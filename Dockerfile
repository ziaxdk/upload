FROM node:4.4.5-slim
MAINTAINER ZiaxDK

RUN mkdir -p /usr/src/app/uploads
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

RUN npm install -g typescript@1.8.10
RUN npm install -g typings@1.0.4
RUN typings install
RUN tsc

CMD [ "npm", "start" ]
