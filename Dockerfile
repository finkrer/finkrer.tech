FROM node:14-alpine

WORKDIR /app

COPY ./app/package.json /app

RUN yarn install

COPY ./app /app

RUN yarn build

EXPOSE 3000

CMD yarn start