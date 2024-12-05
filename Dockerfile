FROM node:20.13.0-alpine

# Create src directory
WORKDIR /opt/github_repos/seller_shop

# Copy build, ecosystem and package.json files
COPY ./build /opt/github_repos/seller_shop/build
COPY ./lib /opt/github_repos/seller_shop/lib
COPY ./node_modules /opt/github_repos/seller_shop/node_modules
COPY ecosystem-prod.config.js /opt/github_repos/seller_shop/ecosystem-prod.config.js
COPY package.json /opt/github_repos/seller_shop/package.json

# Install node_modules
RUN npm install

# Install PM2
RUN npm install pm2 -g

# Install git
RUN apk add git

EXPOSE 3000

# start static server
CMD ["pm2-runtime", "ecosystem-prod.config.js", "--env", "production"]
