FROM ruby:2.5.1-alpine
MAINTAINER Scott Numamoto <scott.numamoto@pioneers.berkeley.edu>

# Add the enclosing dir to the image at /srv/jekyll
ADD . /srv/jekyll

# Use this folder as dir we will work from
WORKDIR /srv/jekyll

# Install dependencies
CMD bundle install

# Build the website
CMD bundle exec jekyll build

# Expose port 4000, the port Jekyll exposes by default
EXPOSE 4000

# Serve the website when we run the image
ENTRYPOINT ["bundle exec jekyll serve"]
