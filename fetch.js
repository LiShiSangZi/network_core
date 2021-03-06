var request = require('../../libs/ajax');
var RSVP = require('rsvp');
var Promise = RSVP.Promise;

function errHandler(err) {
  if (err.status === 401) {
    window.location = '/auth/logout';
  }
  return new Promise(function(resolve, reject) {
    reject(err);
  });
}

var fetch = {};

['get', 'post', 'put', 'delete', 'patch'].forEach((m) => {
  fetch[m] = function(options) {
    var opt = Object.assign({
      dataType: 'json',
      contentType: 'application/json',
      headers: {
        REGION: CONFIG.current_region
      }
    }, options);

    return request[m](opt).catch(errHandler);
  };
});

module.exports = fetch;
