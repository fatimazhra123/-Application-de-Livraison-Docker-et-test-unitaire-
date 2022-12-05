FROM node:16

WORKDIR /app

COPY ./package.json .

COPY . .

EXPOSE 8000

RUN npm install

CMD ["npm", "start"]