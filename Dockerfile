FROM node:4.4.5-slim
MAINTAINER ZiaxDK

RUN mkdir -p /usr/src/app/uploads
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

CMD [ "npm", "start" ]
