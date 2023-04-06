FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli@15.1.6
COPY . .
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]