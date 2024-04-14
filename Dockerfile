FROM node:lts-alpine3.19
WORKDIR /e-commerce-serge-30-bn
COPY package*.json /e-commerce-serge-30-bn/
RUN npm install
COPY . /e-commerce-serge-30-bn
EXPOSE 4000
CMD [ "npm", "start" ]