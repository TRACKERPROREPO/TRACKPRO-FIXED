FROM node:latest As development

WORKDIR /usr/src/app

COPY package*.json ./

# RUN npm install

COPY . .

RUN npm run build doctor-logic

FROM node:latest as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

EXPOSE 3001

CMD ["node", "dist/apps/doctor-logic/main"]