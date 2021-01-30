#FROM ruby:2.6.3
#MAINTAINER Scott Numamoto <scott.numamoto@pioneers.berkeley.edu>

# Install bundler for dependency management
#RUN apt-get update -qq && apt-get install -y build-essential

# Copy over the Gemfile. This reduces effort required to re-build
#ADD Gemfile /srv/jekyll/Gemfile
#ADD Gemfile.lock /srv/jekyll/Gemfile.lock

# Use Bundler 2
#ENV BUNDLER_VERSION 2.0.2
#RUN gem install bundler

# Use this folder as dir we will work from
#WORKDIR /srv/jekyll

# Install dependencies
#RUN bundle install

# Expose port 4000, the port Jekyll exposes by default
# Rarely changed, but if needed, placed after the expensive download and install
# of dependencies
#EXPOSE 4000

# Add the enclosing dir to the image at /srv/jekyll
#ADD . /srv/jekyll

# Build the website
#RUN bundle exec jekyll build

# Serve the website when we run the image
#CMD bundle exec jekyll serve

#EVERYTHING ABOVE THIS LINE IS JEKYLL-RELATED AND IS TEMPORAIRILY COMMENTED OUT
#EVERYTHING AFTER THIS LINE IS NGINX-RELATED
#FROM ubuntu AS builder
#COPY nginx_test.html /temp/

#FROM nginx:latest
#COPY --from=builder . /usr/share/nginx/html/
FROM node:12-alpine AS build-stage
#WORKDIR /app
COPY nginx_test.html .
RUN yarn install --production
CMD ["node", "src/index.js"]


FROM nginx:latest 
COPY --from=build-stage nginx_test.html /usr/share/nginx/html/index.html
