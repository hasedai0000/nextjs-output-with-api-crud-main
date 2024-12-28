FROM --platform=linux/amd64 node:22-alpine

# 必要なパッケージをインストール
RUN apk add --no-cache openssl openssl-dev libc6-compat

RUN npm i -g @nestjs/cli

WORKDIR /backend

COPY package*.json ./
RUN npm install --non-interactive --frozen-lockfile

COPY . .
RUN npx prisma generate

RUN npm run build

CMD ["npm", "run", "start"]
