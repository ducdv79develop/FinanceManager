# app.dockerfile
FROM node:18-alpine as build

RUN mkdir -p /app/
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json /app/package*.json

COPY . ./
RUN npm run build

EXPOSE 3000
CMD [ "npm", "run", "start" ]
