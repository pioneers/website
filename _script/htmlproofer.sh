#!/bin/bash

bundle exec jekyll build
bundle exec htmlproofer --assume-extension --empty_alt_ignore ./_site
