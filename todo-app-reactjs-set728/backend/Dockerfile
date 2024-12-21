# Check out https://hub.docker.com/_/node to select a new base image
FROM node:22.11.0

# Create app directory (with user `node`)
WORKDIR /home/node/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

CMD [ "npm", "start" ]
