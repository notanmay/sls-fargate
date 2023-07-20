FROM node:14.16-alpine

COPY . .

WORKDIR src

RUN yarn install

CMD ["node", "app.js"]
