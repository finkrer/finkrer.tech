FROM node:current-alpine

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

RUN yarn build

RUN addgroup -g 1000 -S next && \
    adduser -u 1000 -S next -G next

USER next

EXPOSE 3000

CMD yarn start