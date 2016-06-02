FROM node:4.4.5-onbuild
MAINTAINER ZiaxDK
ONBUILD RUN npm install -g typescript@1.8.10
ONBUILD RUN tsc
