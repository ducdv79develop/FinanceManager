# app.dockerfile
FROM node:18-alpine as build

RUN mkdir -p /app/
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./

RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./
RUN npm run build

EXPOSE 3000
CMD [ "npm", "run", "start" ]
