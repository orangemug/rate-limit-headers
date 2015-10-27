var mappings = [
  {
    header: "X-RateLimit-Limit",
    key: "limit"
  },
  {
    header: "X-RateLimit-Remaining",
    key: "remaining"
  },
  {
    header: "X-RateLimit-Reset",
    key: "reset",
    transform: {
      header: function(val) {
        return parseInt(val / 1000, 10);
      },
      key: function(val) {
        return val * 1000;
      }
    }
  }
];

module.exports = {
  parse: function(headers) {
    var obj = {};
    headers = headers || {};

    mappings.forEach(function(item) {
      var val = headers[item.header];

      if(item.transform && item.transform.header) {
        val = item.transform.key(val);
      }

      obj[item.key] = val;
    });
    return obj;
  },
  unparse: function(obj) {
    var headers = {};
    obj = obj || {};

    mappings.forEach(function(item) {
      var val = obj[item.key];

      if(item.transform && item.transform.header) {
        val = item.transform.header(val);
      }

      headers[item.header] = val;
    });
    return headers;
  }
}
