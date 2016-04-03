'use strict';

// Check for jquery.
if(typeof $ === 'undefined') {
  throw new Error('This application\'s JavaScript requires jQuery');
}

// Create angular variable to store angular module.
const Angular = angular.module('angular-app', ['oc.lazyLoad']);

// Constant to contain scripts and modules that need to loaded later.
Angular.constant('REQUIRED_FILES', {
  // JavaScript standalone scripts
  scripts: {
    'icons': [
      'node_modules/font-awesome/css/font-awesome.min.css'
    ]
  },
  // Angular modules provided by various vendors (must use same name as dependency injection!!!)
  modules: [
    {
      name: 'ngCookies',
      files: ['node_modules/angular-cookies/angular-cookies.min.js']
    },
    {
      name: 'ngDialog',
      files: [
        'node_modules/ng-dialog/css/ngDialog.min.css',
        'node_modules/ng-dialog/css/ngDialog-theme-default.min.css',
        'node_modules/ng-dialog/js/ngDialog.min.js'
      ]
    }
  ]
});

// Config oc_lazy_load provider to stop loaded files debugging.
Angular.config(['$ocLazyLoadProvider', 'REQUIRED_FILES', function ($ocLazyLoadProvider, FILES) {
  $ocLazyLoadProvider.config({
    debug: false,
    events: true,
    modules: FILES.modules
  });

}]);
