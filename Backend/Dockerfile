FROM node:18-alpine AS builder

WORKDIR /src

COPY package*.json ./

RUN npm install --only=production


FROM node:18-alpine

WORKDIR /src

COPY --from=builder /src/node_modules /src/node_modules

COPY . .

EXPOSE 4000

CMD ["npm", "start"]

