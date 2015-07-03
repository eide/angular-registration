'use strict';

var angular = require('angular');
var app = angular.module('registration');

app.directive('step3', ['formData', function (formData) {
  var template = [
    '<ng-form name="step3form">',
    '<div>Do you want us to contact you?</div>',

    '<div><label>Yes',
    '<input name="contactyes" type="radio" ng-model="data.contact" value="yes">',
    '</label></div>',

    '<div><label>No',
    '<input name="contactno" type="radio" ng-model="data.contact" value="no">',
    '</label></div>',

    '<div><label>Only on mondays',
    '<input name="contactmonday" type="radio" ng-model="data.contact" value="monday">',
    '</label></div>'
  ].join('\n');

  return {
    scope: {},
    template: template,
    link: function (scope) {
      scope.data = formData.tab3;

      scope.$watch('data.contact', function () {
        formData.tab3.valid = !!scope.data.contact;
      });
    }
  };
}]);

