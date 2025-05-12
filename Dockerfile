

# 1. Base image
FROM node:21-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy both backend and client files
COPY . .

# 4. Install server dependencies
RUN npm install

# 5. Build React app
RUN npm install --prefix client && npm run build --prefix client

# 6. Serve React build via Express static (you already have it in your server.js)
EXPOSE 5000

# 7. Start backend server
CMD ["node", "server.js"]
