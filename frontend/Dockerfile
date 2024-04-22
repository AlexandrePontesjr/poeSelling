# Stage 1: Build the React app
FROM node:lts as builder
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build
# Stage 2: Create the production image
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]