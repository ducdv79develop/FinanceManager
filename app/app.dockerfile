# app.dockerfile
# 1. For build React app
FROM node:lts AS development
# Set working directory
WORKDIR /docker-containers
#
COPY package.json /docker-containers/package.json
COPY package-lock.json /docker-containers/package-lock.json
# Same as npm install
RUN npm ci
COPY . /docker-containers
ENV CI=true
ENV PORT=3000
CMD [ "npm", "start" ]
FROM development AS build
RUN npm run build
