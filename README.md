# Project Ho Tro Tai Chinh

#### Developer
- ducdv79
- ducdv7920
- ducdv79develop


#### Frontend
- NodeJS 18.1
- React 18.1.0

#### Backend
- PHP 7.2.5-fpm
- Laravel 7.0
- Composer 2.3.5
- Nginx 1.20.2-alpine

#### MySQL

- MySQL Version: 8.0

### Using the Project

Execute the following command and the Docker will build and run the containers;

```
copy api/.env.example api/.env
copy api/docker-compose.default.yml api/docker-compose.yml
copy app/docker-compose.default.yml app/docker-compose.yml
```

```
run file up.sh or run command 
///
docker-compose -f api/docker-compose.yml up -d
docker-compose -f app/docker-compose.yml up -d
docker-compose -f ../nginx/docker-compose.yml up -d
```
