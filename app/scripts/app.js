'use strict';

// Check for jquer.
if(typeof $ === 'undefined') {
  throw new Error();
}

// Create angular variable to store angular module.
const Angular = angular.module('angular-app', ['oc.lazyLoad']);
