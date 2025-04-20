# --- Etapa de build ---
    FROM node:20-alpine AS builder
    WORKDIR /app
    COPY package*.json ./
    RUN npm ci --no-audit --no-fund
    COPY . .
    RUN npm run build
    
    # --- Etapa de producción ---
    FROM nginx:1.25-alpine AS runner
    COPY --from=builder /app/.next /usr/share/nginx/html/.next
    COPY --from=builder /app/public /usr/share/nginx/html
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]