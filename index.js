var request = require('request');

var DataDog = function(apiKey, applicationKey, opt_apiBaseUrl) {
   if (opt_apiBaseUrl === undefined) {
      opt_apiBaseUrl = 'https://app.datadoghq.com';
   }

   this.apiBaseUrl = opt_apiBaseUrl;

   this.apiKey = apiKey;
   this.applicationKey = applicationKey;
};

DataDog.prototype.postEvent = function(event, callback) {
   request.post({
      url: this.apiBaseUrl + '/api/v1/events',
      qs: {
         api_key: this.apiKey,
         application_key: this.applicationKey
      },
      json: event
   },
   callback);
};

module.exports = DataDog;
