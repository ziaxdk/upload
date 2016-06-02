FROM node:4.4.5-slim
MAINTAINER ZiaxDK

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ONBUILD COPY package.json /usr/src/app/
ONBUILD RUN npm install
ONBUILD COPY . /usr/src/app

ONBUILD RUN npm install -g typescript@1.8.10
ONBUILD RUN tsc

CMD [ "npm", "start" ]
