# app.dockerfile
FROM node:18-alpine

RUN mkdir -p /app/
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json /app/package*.json

COPY . ./
RUN npm install
#RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]
