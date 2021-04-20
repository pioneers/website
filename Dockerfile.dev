FROM ruby:2.6.3

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
