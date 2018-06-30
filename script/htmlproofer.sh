#!/bin/bash

bundle exec jekyll build
bundle exec htmlproofer --assume-extension ./_site
