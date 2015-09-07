var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = 'b99e8e14b27091c';

module.exports = {
  get: function(url) {
    return fetch(rootUrl + url, { // fetch will make ajax request
      headers: {
        'Authorization': 'Client-ID ' + apiKey         
      }
    })
    .then(function(response) {
      return response.json()
    })
  }
};
