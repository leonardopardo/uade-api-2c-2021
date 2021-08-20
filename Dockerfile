FROM node:alpine

ARG app_environment

WORKDIR /app
COPY . ./

run echo "------> Switching to environment ${app_environment} <------"
run echo "------> Installing dependencies from ${app_environment} <------"

RUN cd /app/${app_environment} && npm install

run echo "------> Finished installing dependencies from ${app_environment} <------"