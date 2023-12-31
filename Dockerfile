FROM node:alpine
RUN addgroup app && adduser -S -G app app
RUN mkdir /app && chown app:app app
USER app
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "run", "start"]