# set base image
FROM python:3.9

# Install ffmpeg
RUN apt-get update && apt-get install -y ffmpeg

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# set work directory
WORKDIR /code

RUN apt update \
    && apt-get -y install gcc libmariadb-dev \
    && apt install -y default-mysql-client \
    && apt-get install -y default-libmysqlclient-dev \
    && apt install --no-install-recommends -y tzdata \
    && apt-get install -y git \
    && apt clean

# install dependencies
COPY requirements.txt ./
RUN python3 -m pip install --upgrade pip setuptools
RUN pip install -r requirements.txt
RUN python3 manage.py collectstatic

# Copy project
COPY . ./

# Expose application port
EXPOSE 8000