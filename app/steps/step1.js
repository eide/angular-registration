'use strict';

var angular = require('angular');
var app = angular.module('registration');

app.directive('step1', ['formData', function (formData) {
  var template = [
    '<ng-form name="step1form">',
    '<div><label>Given name ',
    '<input name="givenname" type="text" ng-model="data.givenname" required>',
    '</label></div>',

    '<div><label>What do you want us to call you? ',
    '<input name="nickname" type="text" ng-model="data.nickname">',
    '</label></div>',
    '</ng-form>'
  ].join('\n');

  return {
    scope: {},
    template: template,
    link: function (scope) {
      scope.data = formData.tab1;
      
      scope.$watch('step1form.$valid', function () {
        formData.tab1.valid = scope.step1form.$valid;
      });
    }
  };
}]);
