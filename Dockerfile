# Step 1: Build the React app
FROM node:21 AS build-frontend
WORKDIR /app
COPY client/package*.json ./client/
RUN cd client && npm install
COPY client ./client
RUN cd client && npm run build

FROM node:21
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

COPY --from=build-frontend /app/client/build ./client/build

EXPOSE 5000

CMD ["node", "server.js"]
