FROM ruby:2.6.3 AS builder
MAINTAINER Scott Numamoto <scott.numamoto@pioneers.berkeley.edu>

# Install bundler for dependency management
RUN apt-get update -qq && apt-get install -y build-essential

# Copy over the Gemfile. This reduces effort required to re-build
ADD Gemfile /srv/jekyll/Gemfile
ADD Gemfile.lock /srv/jekyll/Gemfile.lock

# Use Bundler 2
ENV BUNDLER_VERSION 2.0.2
RUN gem install bundler

# Use this folder as dir we will work from
WORKDIR /srv/jekyll

# Install dependencies
RUN bundle install

# Add the enclosing dir to the image at /srv/jekyll
ADD . /srv/jekyll

# Build the website
RUN bundle exec jekyll build -d ./build

#Copy the built site to our nginx
FROM nginx:latest 

#Expopse port 80, Nginx's default port
EXPOSE 80 

#Copy over just the built website from the previous stage
COPY --from=builder /srv/jekyll/build /usr/share/nginx/html
