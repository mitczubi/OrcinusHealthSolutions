#
# Stage 1: React production build
#
FROM node:16-slim as client

COPY package.json package-lock.json ./

RUN npm install && mkdir /client && mv ./node_modules ./client

WORKDIR /client

COPY . .

RUN npm run build

EXPOSE 3000
#
# Stage 2: Nginx as proxy & static server file
#
FROM nginx:1.23.0

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

RUN apt-get update && apt-get install -y certbot python3-certbot-nginx vim

# Remove default nginx configuration
RUN rm /etc/nginx/conf.d/*

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy static assets from builder stage
COPY --from=client /client/build .

# Update the nginx config with our own config file
COPY --from=client /client/docker-setup/nginx/orcinus.conf /etc/nginx/conf.d/

RUN chown -R nginx:nginx /usr/share/nginx/html && chmod -R 755 /usr/share/nginx/html && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d

RUN touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid

# RUN chown -R nonroot:nonroot /etc/nginx/conf.d/ /var/cache/nginx/ /var/run/

EXPOSE 80

USER nginx

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]