/******************************************
                                          *
  module: files_to_load.js                *
  functionality: To place all file names  *
                 for lazyLoad.            *
******************************************/

'use strict';

// Constant to contain scripts and modules that need to loaded later.
Angular.constant('REQUIRED_FILES', {
  // Controllers scripts
  controllers: {
    'login_controller': ['app/scripts/controllers/login_controller.js']
  },
  // JavaScript standalone scripts
  scripts: {
    'icons': [
      'node_modules/font-awesome/css/font-awesome.min.css'
    ],
    'parsley': [
      'node_modules/parsleyjs/dist/parsley.min.js'
    ]
  },
  // Angular modules provided by various vendors (must use same name as dependency injection!!!)
  modules: [
    {
      name: 'ngCookies',
      files: ['node_modules/angular-cookies/angular-cookies.min.js']
    },
    {
      name: 'ui.bootstrap',
      files: ['node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js']
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
