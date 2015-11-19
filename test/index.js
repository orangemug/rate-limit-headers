var assert = require("assert");
var rateLimitHeaders = require("../");
var readmeTester = require("readme-tester");

describe("rate-limit-headers", function() {

  it("should parse", function() {
    var out = rateLimitHeaders.parse({
      "X-RateLimit-Limit":     1000,
      "X-RateLimit-Remaining": 999,
      "X-RateLimit-Reset":     1445375864
    });

    assert.deepEqual(out, {
      limit: 1000,
      remaining: 999,
      reset: 1445375864000
    });
  });

  it("should unparse", function() {
    var out = rateLimitHeaders.unparse({
      "limit":     1010,
      "remaining": 1009,
      "reset":     1445375564789
    });

    assert.deepEqual(out, {
      "X-RateLimit-Limit": 1010,
      "X-RateLimit-Remaining": 1009,
      "X-RateLimit-Reset": 1445375564
    });
  });

  it("README should show no errors", function(done) {
    readmeTester(__dirname+"/../", function(err) {
      assert.ifError(err);
      done();
    });
  });

});
