FROM node:16.13-alpine

WORKDIR /app-web

COPY ./package.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "start"]