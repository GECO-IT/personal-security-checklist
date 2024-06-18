FROM node:20.14.0 AS builder

WORKDIR /app

COPY . .

WORKDIR /app/web

RUN yarn
RUN yarn build
RUN yarn build.static

FROM caddy:2.8.4

COPY --from=builder /app/web/dist /usr/share/caddy

WORKDIR /usr/share/caddy


EXPOSE 80


CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]

