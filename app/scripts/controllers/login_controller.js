/***************************************
  module: login_controller.js          *
  functionality: To provide login and  *
                 registration based    *
                 functionality.        *
***************************************/

'use strict';

Angular.controller('login', ['$scope', '$state', '$http', 'REGEX', function ($scope, $state, $http, REGEX) {

  // Initialize empty object to collect data from form
  $scope.login = {};

  // Create regex for validations.
  $scope.login.validation = {};
  $scope.login.validation.email_pattern = REGEX.email;
  $scope.login.validation.name_pattern = REGEX.name;
  $scope.login.validation.username_pattern = REGEX.alpha_num;

  // Check for state and activate the login/register tabs and contents.
  $scope.login.active = $state.current.url == '/login'?true:false;

  // Remove extra spaces from input fields.
  $scope.trim_spaces = function (field) {
    $scope.login[field] = $scope.login[field].trim();
    $scope.login[field] = $scope.login[field].replace(/\s+/g, ' ');
    $scope.login[field] = $scope.login[field].replace(/(^| )(\w)/g, function(x) {return x.toUpperCase();});
  };

  // Check if username already exists.
  $scope.check_username = function ($error) {
    console.log($scope.login.username);
  }

}]);
