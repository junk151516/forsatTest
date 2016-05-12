'use strict';

angular.module('sensoresApp.reportes')
  .config(function($routeProvider) {
    $routeProvider
      .when('/reportes', {
        templateUrl: 'app/reportes/reportes.html',
        controller: 'ReportesController',
        controllerAs: 'reportesCtrl',
        authenticate: 'admin'
      });
  });
