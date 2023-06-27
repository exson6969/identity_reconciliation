# Use an official Node.js runtime as the base image
FROM node:20.3.1-slim

# Set the working directory inside the container
WORKDIR /

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle the app source code
COPY . .

# Start the Node.js application
CMD [ "npm", "start" ]
