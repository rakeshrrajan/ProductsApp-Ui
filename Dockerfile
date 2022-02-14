FROM node:12.14 AS builder
WORKDIR /src
COPY ["ProductsApp-Ui/.", "/ProductsApp-Ui/."]

WORKDIR /ProductsApp-Ui
RUN npm install
RUN npm run build --prod

FROM nginx:1.15.8-alpine
WORKDIR /src
COPY --from=builder /ProductsApp-Ui/dist/ProductsApp-Ui /usr/share/nginx/html
COPY /ProductsApp-Ui/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8001