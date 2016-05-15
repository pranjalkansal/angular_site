/******************************************************
                                                      *
  Module: routes.js                                   *
  Functionality: To resole routes for defined states  *
                                                      *
******************************************************/

'use strict';

Angular.config(['$stateProvider', '$urlRouterProvider', 'RouteHelpersProvider', function ($stateProvider, $urlRouterProvider, helper) {

  // Set default route.
  $urlRouterProvider.otherwise('/page/login');

  // Set routes for states.
  $stateProvider

  // Registration landing pages routes.
  .state('page', {
    url: '/page',
    templateUrl: helper.basepath('/pages/page.html'),
    resolve: helper.resolveFor('icons', 'ngMessages')
  })
  .state('page.login', {
    url: '/login',
    templateUrl: helper.basepath('/pages/login.html'),
    controller: 'login'
  })
  .state('page.register', {
    url: '/register',
    templateUrl: helper.basepath('/pages/login.html'),
    controller: 'login'
  })

  // Main app routes
  .state('app', {
    url: '/app',
    templateUrl: helper.basepath('/app/app.html'),
    resolve: helper.resolveFor('icons')
  })
  .state('app.messages', {
    url: '/messages',
    templateUrl: helper.basepath('/app/message.html')
  });
}]);
