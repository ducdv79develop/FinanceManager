# app.dockerfile
FROM node:18-alpine as build-stage

WORKDIR /app
COPY package.json ./

RUN npm install

COPY . .

RUN npm ci

ENV CI=true
ENV PORT=3000
CMD [ "npm", "start" ]

FROM build-stage AS build
RUN npm run build
