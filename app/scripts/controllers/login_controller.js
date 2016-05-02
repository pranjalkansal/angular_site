/***************************************
  module: login_controller.js          *
  functionality: To provide login and  *
                 registration based    *
                 functionality.        *
***************************************/

'use strict';

Angular.controller('login', ['$scope', '$state', '$http', function ($scope, $state, $http) {

  // Initialize empty object to collect data from form
  $scope.login = {};

  // Create regex for validations.
  $scope.login.validation = {};
  $scope.login.validation.email_pattern = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i; //parsley regex
  $scope.login.validation.name_pattern = /^[a-z ,.'-]+$/i;
  $scope.login.validation.username_pattern = /^\w+$/;

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
