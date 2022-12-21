FROM node

WORKDIR /urs/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm start

EXPOSE 3000