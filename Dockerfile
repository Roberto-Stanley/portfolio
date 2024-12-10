FROM node:20.14.0

RUN mkdir -p /var/www/project
WORKDIR /var/www/project

RUN apt update && apt dist-upgrade -y 

COPY ./package*.json /var/www/project/

RUN npm install && npm cache clean --force

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
