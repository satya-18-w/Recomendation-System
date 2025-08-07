# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

ARG PYTHON_VERSION=3.12.0
FROM python:${PYTHON_VERSION}-slim 

# Prevents Python from writing pyc files.
ENV PYTHONDONTWRITEBYTECODE=1

# # Keeps Python from buffering stdout and stderr to avoid situations where
# # the application crashes without emitting any logs due to buffering.
# ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY requirements.txt \
    app.py \
    setup.py\
    ./

RUN pip install --upgrade pip
RUN pip install -r requirements.txt


# copy all the required files
COPY  data/filtered/ /app/data/filtered/
COPY  data/processed/ /app/data/processed/
COPY  src/data/cleaning.py /app/src/data/cleaning.py
COPY src/features/ /app/src/features/
COPY src/models/ /app/src/models/








# Expose the port that the application listens on.
EXPOSE 8000

# Run the application.
CMD ['streamlit',"run","app.py","--server-port","8000","--server.address","0.0.0.0"]
