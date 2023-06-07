FROM node:18 as builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY ./ ./
RUN npm i
CMD [ "npm", "run", "start" ]