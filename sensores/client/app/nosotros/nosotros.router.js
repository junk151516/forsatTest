'use strict';

angular.module('sensoresApp.nosotros')
  .config(function($routeProvider) {
    $routeProvider
      .when('/nosotros', {
        templateUrl: 'app/nosotros/nosotros.html',
        controller: 'NosotrosController',
        controllerAs: 'nosotrosCtrl'
      });
  });
