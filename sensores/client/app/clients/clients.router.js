'use strict';

angular.module('sensoresApp.nosotros')
  .config(function($routeProvider) {
    $routeProvider
      .when('/clientes', {
        templateUrl: 'app/clients/clients.html',
        controller: 'ClientesController',
        controllerAs: 'clientesCtrl'
      });
  });
