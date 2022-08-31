FROM node:18.3.0-alpine3.16
WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY . /app
CMD ["npm","run","start"]