'use strict';

// Check for jquery.
if(typeof $ === 'undefined') {
  throw new Error('This application\'s JavaScript requires jQuery');
}

// Create angular variable to store angular module.
const Angular = angular.module('angular-app', ['ui.router', 'oc.lazyLoad']);

Angular.run(['$rootScope', function ($rootScope) {
  $rootScope.app = {};

  // Set data to be shown accross complete app.
  $rootScope.app.name = 'Angular Chat Service';
  $rootScope.app.year = new Date().getFullYear();
  $rootScope.app.title = 'Angular';
  $rootScope.app.description = 'Website created on angular javascript framework!!';
}]);
