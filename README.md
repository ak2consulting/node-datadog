## node-datadog

A node module for interacting with the DataDog API.

### Example

```js
var DataDog = require('datadog');

var dd = new DataDog('API_KEY', 'APPLICATION_KEY');

dd.postEvent({
   title: 'Events, events, events',
   text: 'Testing events.'
});
```
