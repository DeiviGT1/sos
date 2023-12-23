FROM python:3.9

WORKDIR /Users/David/Desktop/sos/backend 

COPY requirements.txt .

USER root

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 3001

ENV TWILIO_ACCOUNT_ID=""
ENV TWILIO_TOKEN_ID=""
ENV TWILIO_NUMBER_ID=""

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "3001"]
