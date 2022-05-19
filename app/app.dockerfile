# app.dockerfile
# build react app

FROM node:18-alpine as build-stage

WORKDIR /app
COPY . .
RUN npm install

# Set working directory
WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

# Same as npm install
RUN npm ci
COPY . /var/www/html

ENV CI=true
ENV PORT=3000
CMD [ "npm", "start" ]

FROM build-stage AS build
RUN npm run build
