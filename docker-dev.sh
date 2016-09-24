#! /usr/bin/env bash
docker run -i --rm -p 4000:4000 -v "$PWD:/srv/jekyll" numascott/jekylldev:latest serve --incremental

# Breaking it down

# docker run ... numascott/jekylldev:latest
# create a container from the latest numascott/jekyll image
# https://hub.docker.com/r/numascott/jekylldev/

# -i
# Use interactive mode so that the output from jekyll is displayed

# --rm
# After exiting, delete the stopped container to keep our Docker space clean

# 4000:4000
# Map port 4000 inside the Docker container to port 4000 inside our computer

# -v "$PWD:/srv/jekyll"
# Allow the current folder of PWD be accessible inside the Docker container
# inside the folder /srv/jekyll. The quotes are necessary to address folder
# names that contain characters such as spaces.

# The files inside the container will change as you change them in the current
# folder
