FROM jekyll/jekyll:3.0.2
MAINTAINER Scott Numamoto <scott.numamoto@pioneers.berkeley.edu>

ADD . /srv/jekyll
VOLUME /srv/jekyll

EXPOSE 4000

ENTRYPOINT ["jekyll"]
CMD ["serve"]