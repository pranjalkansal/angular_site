/******************************************
                                          *
  module: files_to_load.js                *
  functionality: To place all file names  *
                 for lazyLoad.            *
******************************************/

'use strict';

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
      name: 'ngMessages',
      files: ['node_modules/angular-messages/angular-messages.min.js']
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
