#! /usr/bin/env bash

CONTAINER_NAME="website"

# Check to see if the container is running. If so, stop it.
CONTAINER_RUNNING=`docker ps --quiet --filter NAME=$CONTAINER_NAME | wc -l`
if [ "$CONTAINER_RUNNING" -eq "1" ]
then
  echo "Stopping $CONTAINER_NAME"
  docker stop $CONTAINER_NAME
fi

# Build the docker image, specifying the tag for easy reference elsewhere
docker build -t $CONTAINER_NAME:latest .

# Run the container based on the latest image.
docker run --detach --rm --name $CONTAINER_NAME -p 4000:4000 $CONTAINER_NAME:latest

# Useful helptext here.
echo "To view logs, run docker logs -f $CONTAINER_NAME"
echo "To stop the container, run docker stop $CONTAINER_NAME"
