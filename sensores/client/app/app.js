'use strict';

angular.module('sensoresApp', [
  'sensoresApp.auth',
  'sensoresApp.admin',
  'sensoresApp.reportes',
  'sensoresApp.nosotros',
  'sensoresApp.servicios',
  'sensoresApp.clientes',
  'sensoresApp.dispositivo',
  'sensoresApp.contactenos',
  'sensoresApp.settingsReports',
  'sensoresApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'validation.match',
  'ui.materialize'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
 google.charts.load('current', {packages: ['corechart', 'line']});
//desolate-waters-33607
