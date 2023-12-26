FROM python:3.9

WORKDIR /Users/David/Desktop/sos/backend 

COPY . .

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 3001

ENV TWILIO_ACCOUNT_ID="AC181d187fbc552e594f3c329e1d155fa1"
ENV TWILIO_TOKEN_ID="23b7d53268aa3ade8c5d0cd19cb439d0"
ENV TWILIO_NUMBER_ID="whatsapp:+14155238886"

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "3001"]
