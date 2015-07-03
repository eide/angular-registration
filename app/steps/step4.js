'use strict';

var angular = require('angular');
var app = angular.module('registration');

app.directive('step4', ['formData', function (formData) {
  var template = [
    '<h3>Your data</h3>',
    '<dl>',
    '<dt>Your name</dt>',
    '<dd>{{data.tab1.givenname}}</dd>',
    '<dt ng-show="data.tab1.nickname">But you want us to call you</dt>',
    '<dd>{{data.tab1.nickname}}</dd>',
    '<dt>Birthdate</dt>',
    '<dd>{{data.tab2.birthdate|date:"shortDate"}} <span ng-if="data.tab2.ageliar">(we will keep your little lie a secret)</span></dd>',
    '<p>{{contact}}</p>',
    '</dl>',
  ].join('\n');

  var contact = {
    yes: 'We will contact you!',
    no: 'You will never hear from us again!',
    monday: 'I hate mondays, but okay, we will contact you on a monday.'
  };

  return {
    scope: {},
    template: template,
    link: function (scope) {
      scope.data = formData;

      scope.$watch('data.tab3.contact', function () {
        scope.contact = contact[scope.data.tab3.contact];
      });
    }
  };
}]);

