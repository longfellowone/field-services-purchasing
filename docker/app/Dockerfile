FROM node:alpine as builder
RUN apk add --no-cache git

WORKDIR /builder

COPY package.json .
RUN npm install

RUN npm audit fix

COPY . .
RUN npm run build

FROM nginx:alpine
COPY docker/app/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder builder/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]