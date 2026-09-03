# syntax=docker/dockerfile:1
# Image for theinsuranceglossary.com (Express+tRPC+Drizzle+Vite client).
# NOTE: the server bundle imports `vite` at runtime (dev-server integration is
# bundled as an external import), so the runtime needs the FULL node_modules,
# not prod-only. Slimming this is a future optimization.

FROM node:22-alpine AS build
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10.4.1 --activate
COPY package.json pnpm-lock.yaml ./
COPY patches ./patches
RUN pnpm install --frozen-lockfile
COPY . .
ARG VITE_APP_ID
ARG VITE_OAUTH_PORTAL_URL
ARG VITE_FRONTEND_FORGE_API_URL
ARG VITE_FRONTEND_FORGE_API_KEY
ENV VITE_APP_ID=$VITE_APP_ID \
    VITE_OAUTH_PORTAL_URL=$VITE_OAUTH_PORTAL_URL \
    VITE_FRONTEND_FORGE_API_URL=$VITE_FRONTEND_FORGE_API_URL \
    VITE_FRONTEND_FORGE_API_KEY=$VITE_FRONTEND_FORGE_API_KEY
RUN pnpm build
# Bundle the daily blog generator as a standalone runtime entry
RUN pnpm exec esbuild scripts/generate-daily.ts --platform=node --packages=external --bundle --format=esm --outfile=dist/generate-daily.js

FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./package.json
EXPOSE 3000
CMD ["node", "dist/index.js"]
