'use strict';

var angular = require('angular');
var app = angular.module('registration');

app.directive('step2', ['formData', function (formData) {
  var template = [
    '<ng-form name="step2form">',
    '<div><label>Birthdate',
    '<input name="birthdate" type="date" ng-model="data.birthdate" required>',
    '</label></div>',
    '<div>(Format: YYYY-MM-DD)</div>',

    '<div><label>Sure about that?',
    '<input name="ageliar" type="checkbox" ng-model="data.ageliar">',
    '</label></div>',
    '</ng-form>'
  ].join('\n');

  return {
    scope: {},
    template: template,
    link: function (scope) {
      scope.data = formData.tab2;

      scope.$watch('step2form.$valid', function () {
        formData.tab2.valid = scope.step2form.$valid;
      });
    }
  };
}]);

