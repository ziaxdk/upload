FROM node:4.4.5
MAINTAINER ZiaxDK

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

RUN npm install -g typescript@1.8.10
RUN tsc

CMD [ "npm", "start" ]
