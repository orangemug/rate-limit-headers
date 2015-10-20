# rate-limit-headers
Parse / unparse `X-RateLimit-*` headers, converting times to milliseconds rather than unix epoch (seconds)

![stability-experimental](https://img.shields.io/badge/stability-experimental-orange.svg)
[![circleci](https://circleci.com/gh/teamguideio/rate-limit-headers.png?style=shield)](https://circleci.com/gh/teamguideio/rate-limit-headers)
[![Dependency Status](https://david-dm.org/teamguideio/rate-limit-headers.svg)](https://david-dm.org/teamguideio/rate-limit-headers)
[![Dev Dependency Status](https://david-dm.org/teamguideio/rate-limit-headers/dev-status.svg)](https://david-dm.org/teamguideio/rate-limit-headers#info=devDependencies)


## Install
To install

    npm i git://github.com/teamguideio/rate-limit-headers --save


## Usage
To parse just pass `res.headers` from http/express

    var rateLimitHeaders = require("rate-limit-headers");
    rateLimitHeaders.parse(res.headers)
    /**
      * {
      *   limit: 100,
      *   remaining: 99,
      *   reset: 1445375864000
      * }
      */

`unparse` just reverses the process.


## License
[MIT](LICENSE)
