'use strict';

var angular = require('angular');
var app = angular.module('registration');

app.factory('formData', function () {
  return {
    tab1: {
      valid: false,
      givenname: '',
      nickname: ''
    },
    tab2: {
      valid: false,
      birthdate: null,
      ageliar: false
    },
    tab3: {
      valid: false,
      contact: null,
    }
  };
});
