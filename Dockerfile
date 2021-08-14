FROM node:buster as deps
WORKDIR /app
COPY ./package.json ./
RUN yarn install

FROM node:buster as builder
WORKDIR /app
COPY ./ ./
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build

FROM node:buster as runner

RUN addgroup nodejs
RUN adduser eko9x9

USER eko9x9
WORKDIR /home/eko9x9/app

COPY --from=builder --chown=eko9x9:nodejs /app/dist ./dist
COPY --from=builder --chown=eko9x9:nodejs /app/node_modules ./node_modules


