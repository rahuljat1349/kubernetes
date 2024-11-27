FROM node:20

WORKDIR /app

COPY package.json package-lock.json ./

# Install dependencies, including TypeScript
RUN npm install

# Install TypeScript globally
RUN npm install -g typescript

COPY . .

# Build the TypeScript project
RUN tsc -b

CMD ["node", "index.js"]
