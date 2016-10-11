#!/bin/bash

USERNAME="$1"
if [ -z "$USERNAME" ]
then
  echo 'Must specify username'
  return
fi

if [ -z "$2" ]
then
  BRANCH='master'
else
  BRANCH="$2"
fi

eval $"git checkout -b $USERNAME-$BRANCH $BRANCH"
eval $"git pull https://github.com/$USERNAME/website.git $BRANCH"
