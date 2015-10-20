# rate-limit-headers
Parse / unparse `X-RateLimit-*` headers, converting times to milliseconds rather than unix epoch (seconds)


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
