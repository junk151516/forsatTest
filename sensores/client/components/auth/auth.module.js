'use strict';

angular.module('sensoresApp.auth', [
  'sensoresApp.constants',
  'sensoresApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
