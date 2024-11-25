# Use the official Node.js image as a base
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json into the container
COPY package.json package-lock.json /usr/src/app/

# Install dependencies
RUN npm install

# Copy the rest of the application into the container
COPY . /usr/src/app

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
