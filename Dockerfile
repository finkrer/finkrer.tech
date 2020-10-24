FROM node:current-alpine

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

RUN yarn build

EXPOSE 3000

CMD yarn start