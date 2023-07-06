FROM node:16

WORKDIR /server

RUN apt-get update && apt-get install -y vim

COPY package*.json ./
RUN npm install

RUN npm i

COPY . .

CMD [ "npm", "run", "docker" ]