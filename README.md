# rate-limit-headers
Parse / unparse `X-RateLimit-*` headers, converting times to milliseconds rather than unix epoch (seconds)

[![stability-unstable](https://img.shields.io/badge/stability-unstable-yellow.svg)][stability]
[![circleci](https://circleci.com/gh/orangemug/speedcam.png?style=shield)][circleci]
[![Dependency Status](https://david-dm.org/orangemug/speedcam.svg)][dm-prod]
[![Dev Dependency Status](https://david-dm.org/orangemug/speedcam/dev-status.svg)][dm-dev]

[stability]: https://github.com/orangemug/stability-badges#unstable
[circleci]:  https://circleci.com/gh/orangemug/speedcam
[dm-prod]:   https://david-dm.org/orangemug/speedcam
[dm-dev]:    https://david-dm.org/orangemug/speedcam#info=devDependencies


## Install
To install

    npm i git://github.com/orangemug/rate-limit-headers --save


## Usage
To parse just pass `res.headers` from http/express

```js
var rateLimitHeaders = require("rate-limit-headers");

var headers = rateLimitHeaders.parse({
  "X-RateLimit-Limit": 100,
  "X-RateLimit-Remaining": 99,
  "X-RateLimit-Reset": 1445375864
});

assert.deepEqual(headers, {
  limit: 100,
  remaining: 99,
  reset: 1445375864000
});
```

`unparse` just reverses the process.


## License
[MIT](LICENSE)
