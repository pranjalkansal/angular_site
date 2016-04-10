// Communication with server application programming interface (API's).

'use strict';

const URL = 'http://127.0.0.1:8000'; // Server url.

Angular.service('Server', function () {
  var database = {};

  // Create fetch object for GET calls from server.
  database.fetch = {};

  // Create write object for POST calls to server.
  database.write = {};

  // Create update object for PUT or DELETE calls to server.
  database.update = {};
});
