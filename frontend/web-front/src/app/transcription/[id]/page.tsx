'use client'
import { Footer } from '@/app/components/transcription/Footer';
import { Header } from '@/app/components/transcription/Header';
import TranscriptionDetail from '@/app/components/transcription/TranscriptionDetail';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PageComponent() {
  const params = useParams();
  const id = params ? params.id : null;
  const [data, setData] = useState<{ post?: any } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData(id: any) {
      if (id === null) {
        console.error('ID is null');
        return;
      }
      const instance = axios.create({
        baseURL: 'http://localhost:8080',
      });
      try {
        const response = await instance.get(`/api/spokenMaterial/transcriptions/uploaded-file/${id}`);
        const post = response.data;
        setData({ post });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData(id);
  }, [id]);

  if (data === null) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#2c3e50' }}>
        <div style={{ border: '4px solid #34495e', borderRadius: '50%', borderTop: '4px solid #16a085', width: '40px', height: '40px', animation: 'spin 2s linear infinite' }}></div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    ); // データがまだない場合は、もっと暗めのかっこいいローディング表示
  }

  return (
    <>
      <Header />
      <TranscriptionDetail transcription={data.post} />
      <Footer />
    </>
  );
};