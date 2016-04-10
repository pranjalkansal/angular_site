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
    resolve: helper.resolveFor('parsley', 'icons');
  })
  .state('page.login', {
    url: '/login',
    templateUrl: helper.basepath('/pages/login.html'),
    resolve: helper.resolveFor('login'),
    controller: 'login'
  })
}]);
