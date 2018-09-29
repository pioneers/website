#!/bin/bash
bundle exec jekyll serve --livereload --incremental

# Dissecting this script

# bundle exec
# We use bundle to ensure developers have dependencies and their correct versions as we run on the production (for  reals) web server. Bundle exec ensures we are using the dependencies we listed in the Gemfile.lock, and not from our local machine. bundle exec assumes you have preivously run bundle install to install the dependencies for this repo.

# jekyll serve
# Jekyll is the ruby program we use to compile and serve our website
# serve is the command that builds and then puts up the web server

# --livereload
# Refresh your browser after a change occurs. No more hitting f5 <3

# --incremental
# Only do partial builds when recompiling the website for that suhpeedy dev
