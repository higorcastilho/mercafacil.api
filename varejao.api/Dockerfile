FROM node:16

WORKDIR /usr/src/app
COPY package*.json ./

EXPOSE 6002

CMD npm config set cache-min 9999999 \
    && npm install \
    && npm start