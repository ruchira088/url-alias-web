FROM node:8-alpine

WORKDIR /opt/web

COPY ./package.json .

RUN npm install

COPY . .

EXPOSE 8000

ENTRYPOINT ["npm", "run"]

CMD ["develop"]