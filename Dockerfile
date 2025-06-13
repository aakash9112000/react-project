FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY  . .
RUN npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY  --from=build /app/build .
EXPOSE 80
