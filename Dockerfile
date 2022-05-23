FROM node:10

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY . .

ENV NODE_ENV docker
ENV API_URL http://localhost:3001

RUN npm install pm2 --global
RUN npm run build
RUN npm run build-server

RUN pm2 start dist/server.js --name api

EXPOSE 3000
CMD ["npm", "start"]
