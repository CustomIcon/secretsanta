# Stage 1: Build the application
FROM node:20

# Install build dependencies for compiling TypeScript and native modules
RUN apt-get update && apt-get install -y \
  python3 \
  make \
  g++ \
  gcc \
  && rm -rf /var/lib/apt/lists/*

# Copy package.json and yarn.lock
COPY package.json ./

# Install dependencies
RUN yarn install
RUN npm i @rollup/rollup-linux-x64-gnu
# Copy the rest of the application
COPY . .

RUN yarn vite build
# Expose the port that Vite will use (default is 5173)
EXPOSE 4173

# Command to preview the application using Vite
CMD ["yarn", "vite", "preview", "--host"]
