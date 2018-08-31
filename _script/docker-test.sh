#! /usr/bin/env bash

# Package the current website into a Docker image
docker build -t pie-website .;

# This is not meant to be run from within _script/ but rather the website dir

# Serve the website by running the image we just built
# This is not meant for debugging problems, but rather identifying problems.
docker run -it --rm -p 4000:4000 pie-website

# Breaking it down

# docker run ... pie-website
# create a container to run the image we just built

# -it
# Use interactive mode so that the output from jekyll is displayed and ctrl-c will exit

# --rm
# After exiting, delete the stopped container to keep our Docker space clean

# -p 4000:4000
# Map port 4000 inside the Docker container to port 4000 inside our computer
# Note that we have the EXPOSE step in our Dockerfile, but it is necessary to make sure our container plays nice too, not just the image.
