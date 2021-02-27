#!/bin/bash

chmod -R 777 .docker/mysql/data
npm install
node server.js