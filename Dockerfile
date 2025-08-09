FROM oven/bun:1.2.19-alpine AS build
WORKDIR /app

COPY package.json bun.lock ./
ENV CI=true
RUN bun install

COPY . .
RUN bunx --bun vite build

FROM nginx:1.27-alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
