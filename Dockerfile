FROM node:10.15.3-alpine

WORKDIR /task_management_app

RUN apk update && \
    npm install -g npm && \
    npm install -g @vue/cli@3.0.1 \
    yarn global add @vue/cli-init
