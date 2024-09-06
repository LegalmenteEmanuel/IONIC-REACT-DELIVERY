FROM node:18

WORKDIR /app

RUN npm install -g @ionic/cli

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npx cap sync

EXPOSE 8100

CMD ["npm", "run", "dev", "--", "--port", "8100", "--host"]
