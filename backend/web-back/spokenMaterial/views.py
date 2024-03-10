# views.py
from rest_framework.views import APIView
from rest_framework import viewsets
from .models import UploadedFile, Transcription
from .serializers import UploadedFileSerializer, TranscriptionSerializer
from rest_framework.response import Response
import whisper
import os
from pydub import AudioSegment
import pandas as pd
from openpyxl import Workbook
from openpyxl.utils.dataframe import dataframe_to_rows
from rest_framework.parsers import MultiPartParser, FormParser
import warnings


class UploadedFileViewSet(viewsets.ModelViewSet):
    queryset = UploadedFile.objects.all()
    serializer_class = UploadedFileSerializer
    parser_classes = (MultiPartParser, FormParser,)  # ファイルアップロードを許可するパーサーを追加

    def create(self, request, *args, **kwargs):
        print(request.data)
        file_serializer = UploadedFileSerializer(data=request.data)
        if file_serializer.is_valid():
            # 一時ファイルとして保存
            file_obj = request.FILES['file']
            temp_file_path = 'temp_uploaded_file'
            with open(temp_file_path, 'wb+') as destination:
                for chunk in file_obj.chunks():
                    destination.write(chunk)

            # 保存したファイルを文字起こし
            try:
                transcribe_and_save(temp_file_path)
                # 文字起こし後、UploadedFileモデルにファイル情報を保存
                uploaded_file = file_serializer.save()
                return Response(file_serializer.data, status=status.HTTP_201_CREATED)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
            finally:
                # 一時ファイルの削除
                os.remove(temp_file_path)
        else:
            return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

class TranscriptionViewSet(viewsets.ModelViewSet):
    queryset = Transcription.objects.all()
    serializer_class = TranscriptionSerializer

    def get_queryset(self):
        """
        uploadedfileのIDに基づいてtranscriptionのクエリセットをフィルタリングする。
        """
        queryset = super().get_queryset()
        # URLからuploadedfileのIDを取得するためのキーを修正する
        uploadedfile_id = self.kwargs.get('uploadedfile_id')  # 修正が必要
        if uploadedfile_id is not None:
            queryset = queryset.filter(uploaded_file__id=uploadedfile_id)
        return queryset

class TestView(APIView):
    def get(self, request):
        return Response({'message': 'Hello, world!'})

# FP16に関するワーニングを無視
warnings.filterwarnings("ignore", message="FP16 is not supported on CPU; using FP32 instead")

def file_upload_view(request):
    if request.method == 'POST':
        form = FileUploadForm(request.POST, request.FILES)
        if form.is_valid():
            # ファイルの処理
            handle_uploaded_file(request.FILES['file'])
            return render(request, 'transcription/success.html')  # 成功時のテンプレート
    else:
        form = FileUploadForm()
    return render(request, 'transcription/upload.html', {'form': form})

def handle_uploaded_file(f):
    # 一時ファイルとして保存
    with open('temp_file', 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)

def transcribe_and_save(file_path):
    # Whisperモデルのロード
    model = whisper.load_model("small")

    # 入力ファイルの読み込み
    file_extension = os.path.splitext(file_path)[1].lower()
    if file_extension in [".wav", ".mp3", ".m4a", ".mp4"]:
        audio = AudioSegment.from_file(file_path, format=file_extension.replace(".", ""))
    else:
        raise ValueError("サポートされていない音声形式です。")

    # 分割する時間間隔（15秒）
    split_interval = 10 * 1000  # ミリ秒単位

    # 音声ファイルを分割して文字起こし
    for i, start_time in enumerate(range(0, len(audio), split_interval)):
        end_time = min(start_time + split_interval, len(audio))
        split_audio = audio[start_time:end_time]

        # 分割した音声を一時ファイルに保存
        temp_file_path = f"temp_{i}.wav"
        split_audio.export(temp_file_path, format="wav")

        # 文字起こし
        try:
            result = model.transcribe(temp_file_path)
            transcription_text = result["text"]
            # 文字起こし結果をTranscriptionsテーブルに保存
            Transcription.objects.create(
                start_time=start_time / 1000,  # 秒単位に変換
                end_time=end_time / 1000,  # 秒単位に変換
                text=transcription_text
            )
        except Exception as e:
            print(f"エラーが発生しました: {e}")
        finally:
            # 一時ファイルの削除
            os.remove(temp_file_path)