# app.dockerfile
# build react app

FROM node:18.1-alpine AS development

# Set working directory
WORKDIR /var/www/html

COPY package.json /var/www/html/package.json
COPY package-lock.json /var/www/html/package-lock.json

# Same as npm install
RUN npm ci
COPY . /var/www/html

ENV CI=true
ENV PORT=3000
CMD [ "npm", "start" ]

FROM development AS build
RUN npm run build
