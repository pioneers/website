# Website
PiE's public-facing website, built on Jekyll.

To get help, checkout the [wiki](https://github.com/pioneers/website/wiki).

# Developer Instructions
You can make a fork of this repo and host a development instance of your proposed changes via [GitHub project pages](https://pages.github.com/)

Note that if you do this, take care to:

* Add a [robots.txt](http://www.robotstxt.org/robotstxt.html) to prevent Google from indexing your site. The first example provided in the link will suffice
* Change two variables in `_config.yml`

```
baseurl:<your forked repo name>
```
```
url:<github username>.github.io
```