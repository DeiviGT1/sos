FROM node:19.1.0 

WORKDIR /Users/David/Desktop/sos/frontend 

COPY package.json .

USER root

RUN npm install

USER nodegit

COPY --chown=node:node . .

EXPOSE 3000

CMD ["npm", "start"] 
