FROM node:current-alpine

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY . /app

RUN yarn build

USER node

EXPOSE 3000

CMD yarn start