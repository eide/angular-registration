'use strict';

var angular = require('angular');
var app = angular.module('registration', []);

require('./data');
require('./steps/step1');
require('./steps/step2');
require('./steps/step3');
require('./steps/step4');

app.controller('tabswitcher', ['$scope', 'formData', function ($scope, formData) {
  $scope.tab = 1;

  $scope.data = formData;
}]);
