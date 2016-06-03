FROM alpine
MAINTAINER ZiaxDK

WORKDIR /usr/src/app

RUN apk add --update nodejs && \
    mkdir -p /usr/src/app/uploads && \
    COPY package.json /usr/src/app/ && \
    npm install

CMD [ "npm", "start" ]
