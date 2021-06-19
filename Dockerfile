FROM ruby:2.6.3
MAINTAINER Scott Numamoto <scott.numamoto@pioneers.berkeley.edu>

# Install bundler for dependency management
RUN apt-get update -qq && apt-get install -y build-essential

# Use this folder as dir we will work from
WORKDIR /srv/jekyll

# Copy over the Gemfile. This reduces effort required to re-build
ADD Gemfile Gemfile
ADD Gemfile.lock Gemfile.lock

# Use Bundler 2 without config
ADD .bundle .bundle
ENV BUNDLER_VERSION 2.0.2
RUN gem install bundler

# Install dependencies
RUN bundle install

# Expose port 4000, the port Jekyll exposes by default
# Rarely changed, but if needed, placed after the expensive download and install
# of dependencies
EXPOSE 4000

# Add the enclosing dir to the image at /srv/jekyll
ADD . /srv/jekyll

# Build the website
RUN bundle exec jekyll build

# Serve the website when we run the image
CMD bundle exec jekyll serve
