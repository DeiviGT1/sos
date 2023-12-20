FROM node:19.1.0 

WORKDIR /Users/David/Desktop/sos/backend 

COPY package.json .

USER root

RUN npm install

USER node

COPY --chown=node:node . .

EXPOSE 3001

ENV TWILIO_ACCOUNT_ID="AC181d187fbc552e594f3c329e1d155fa1"
ENV TWILIO_TOKEN_ID="1419f6b4ff02689ed1237eea8826ca08"
ENV TWILIO_NUMBER_ID="whatsapp:+14155238886"

CMD ["node", "server.js"] 

