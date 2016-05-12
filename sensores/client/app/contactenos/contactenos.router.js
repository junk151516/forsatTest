'use strict';

angular.module('sensoresApp.contactenos')
  .config(function($routeProvider) {
    $routeProvider
      .when('/contactenos', {
        templateUrl: 'app/contactenos/contactenos.html',
        controller: 'ContactenosController',
        controllerAs: 'contactenosCtrl'
      });
  });
