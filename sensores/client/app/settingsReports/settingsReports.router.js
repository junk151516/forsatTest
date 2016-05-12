'use strict';

angular.module('sensoresApp.settingsReports')
  .config(function($routeProvider) {
    $routeProvider
      .when('/configuracion/reportes', {
        templateUrl: 'app/settingsReports/settingsReports.html',
        controller: 'SettingsReportsController',
        controllerAs: 'settingsReportsCtrl',
        authenticate: true
      });
  });
