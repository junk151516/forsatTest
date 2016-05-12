'use strict';

angular.module('sensoresApp.servicios')
  .config(function($routeProvider) {
    $routeProvider
      .when('/servicios', {
        templateUrl: 'app/servicios/servicios.html',
        controller: 'ServiciosController',
        controllerAs: 'serviciosCtrl'
      })
      .when('/disenos-electronicos', {
        templateUrl: 'app/servicios/disenos-electronicos.html',
        controller: 'ServiciosController',
        controllerAs: 'serviciosCtrl'
      })
      .when('/disenos-acusticos', {
        templateUrl: 'app/servicios/disenos-acusticos.html',
        controller: 'ServiciosController',
        controllerAs: 'serviciosCtrl'
      })
      .when('/simulaciones-numericas', {
        templateUrl: 'app/servicios/simulaciones-numericas.html',
        controller: 'ServiciosController',
        controllerAs: 'serviciosCtrl'
      })
      .when('/monitoreo-remoto', {
        templateUrl: 'app/servicios/monitoreo-remoto.html',
        controller: 'ServiciosController',
        controllerAs: 'serviciosCtrl'
      })
      .when('/desarrollo-lab-view', {
        templateUrl: 'app/servicios/desarrollo-lab-view.html',
        controller: 'ServiciosController',
        controllerAs: 'serviciosCtrl'
      })

      ;
  });
