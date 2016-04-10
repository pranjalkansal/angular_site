'use strict';

// Check for jquery.
if(typeof $ === 'undefined') {
  throw new Error('This application\'s JavaScript requires jQuery');
}

// Create angular variable to store angular module.
const Angular = angular.module('angular-app', ['oc.lazyLoad']);
