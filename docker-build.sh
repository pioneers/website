#! /usr/bin/env bash

docker build -t pie-website .;
docker run -d --name website -p 4000:4000 pie-website
