FROM node:14

WORKDIR /app
COPY package.json .
RUN npm install
RUN npm install --global serve
COPY . .
RUN npm run build

CMD ["serve", "-l", "3000", "build/"]