
FROM node:20-alpine


WORKDIR /usr/src/app


COPY package.json yarn.lock ./


RUN yarn install


COPY . .


RUN yarn build


RUN yarn migrations:run


EXPOSE 3000


CMD ["yarn", "start"]
