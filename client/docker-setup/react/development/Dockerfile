FROM node:16-alpine

WORKDIR /client

COPY package.json ./

COPY . .

RUN npm install

ENV NODE_ENV=development

CMD [ "npm", "start" ]