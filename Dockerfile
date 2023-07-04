FROM node:latest AS build

WORKDIR /frontend

COPY package.json package.json

COPY webpack.config.js webpack.config.js

COPY .babelrc .babelrc

COPY public public

COPY src src

COPY webpack webpack

RUN npm i

RUN npm run build:dev

FROM nginx:alpine

COPY --from=build /frontend/build/ /usr/share/nginx/html
