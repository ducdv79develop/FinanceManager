# app.dockerfile
FROM node:18-alpine

RUN mkdir -p /app/
WORKDIR /app
COPY package*.json /app

COPY . /app
RUN npm install
#RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]
