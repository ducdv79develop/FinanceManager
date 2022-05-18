# api.dockerfile
FROM php:7.2.5-fpm

RUN apt-get update && apt-get install -y libmcrypt-dev libpq-dev \
	libmagickwand-dev --no-install-recommends \
   && docker-php-ext-install mysqli

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN mkdir /docker-containers
RUN mkdir -p /app/storage && mkdir -p /app/public/uploads && chmod 777 -R /app/storage  &&  chmod 777 -R /app/public/uploads
