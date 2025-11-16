# Build stage

FROM node:22-alpine AS build

WORKDIR /app

COPY package.json ./

RUN corepack enable

COPY pnpm-workspace.yaml pnpm-lock.yaml ./

ENV CI=true

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

# Runtime stage

FROM nginx:1.29.2-alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
