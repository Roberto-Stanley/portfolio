FROM node:20.14.0 AS base

WORKDIR /app

COPY ./package*.json ./

COPY . . 

FROM base AS dev

ENV NODE_ENV=development

RUN npm install \
  && mkdir -p /app/.next \
  && chown -R node:node /app

USER node

EXPOSE 3000

CMD ["npm", "run", "dev"]

# ...existing code...
FROM base AS production

ENV NODE_ENV=production

RUN npm ci

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]


FROM base AS production

ENV NODE_ENV=production

RUN npm ci

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]