# api.dockerfile
FROM php:7.2.5-fpm

RUN apt-get update && apt-get install -y libmcrypt-dev libpq-dev \
    libmagickwand-dev --no-install-recommends \
    && docker-php-ext-install mysqli

RUN mkdir /docker-containers