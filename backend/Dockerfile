FROM node:19.1.0 

WORKDIR /Users/David/Desktop/sos/backend 

COPY package.json .

USER root

RUN npm install

USER nodegit

COPY --chown=node:node . .

EXPOSE 3001

ENV TWILIO_ACCOUNT_ID=""
ENV TWILIO_TOKEN_ID=""
ENV TWILIO_NUMBER_ID=""

CMD ["node", "server.js"] 
