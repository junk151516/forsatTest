
angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
.config(function($mdIconProvider) {
  $mdIconProvider
    .iconSet('communication', 'img/icons/sets/communication-icons.svg', 24);
})
.controller('AppCtrl', function($scope, $location) {
	
	
    var imagePath = 'img/list/60.jpeg';

	$scope.go = function ( path ) {
		$location.path( path );
	};
	
    $scope.phones = [
      {
        type: 'Home',
        number: '(555) 251-1234',
        options: {
          icon: 'communication:phone'
        }
      },
      {
        type: 'Cell',
        number: '(555) 786-9841',
        options: {
          icon: 'communication:phone',
          avatarIcon: true
        }
      },
      {
        type: 'Office',
        number: '(555) 314-1592',
        options: {
          face : imagePath
        }
      },
      {
        type: 'Offset',
        number: '(555) 192-2010',
        options: {
          offset: true,
          actionIcon: 'communication:phone'
        }
      }
    ];
    $scope.todos = [
      {
        face : imagePath,
        what: 'Proyecto Antioquia',
        who: 'T2',
        when: '3:08PM',
        notes: "Marleni Florez",
		links: "t2.html",
		city : "Sincelejo"
      },
      {
        face : imagePath,
        what: 'Proyecto Antioquia',
        who: 'T3',
        when: '3:08PM',
        notes: "walter alvarez",
		links: "t3.html",
		city : "Sincelejo"
      },
      {
        face : imagePath,
        what: 'Proyecto Antioquia',
        who: 'T4',
        when: '3:08PM',
        notes: "Jhon David Vandelamar",
		links: "t4.html",
		city : "Cartagena"	
      },
      {
      face : imagePath,
        what: 'Proyecto Antioquia',
        who: 'T5',
        when: '3:08PM',
        notes: "Luz Arteaga",
		links: "t5.html",
		city : "Barranquilla"
      },
      {
        face : imagePath,
        what: 'conservador C150L (Super Eco)',
        who: 'T6',
        when: '3:08PM',
        notes: "Alexy del Carmen Payares",
		links: "t6.html",
		city : "Barranquilla"
      },
      {
      face : imagePath,
        what: 'Proyecto Antioquia',
        who: 'T7',
        when: '3:08PM',
        notes: "Delsy Sierra Alvarez",
		links: "t7.html",
		city : "Sincelejo"
      },
	  {
      face : imagePath,
        what: 'Antioquia Bajo régimen',
        who: 'T8',
        when: '3:08PM',
        notes: "Haceb Chequeos",
		links: "t8.html",
		city : "Medellin"
      },
      {
      face : imagePath,
        what: 'Proyecto Antioquia',
        who: 'T9',
        when: '3:08PM',
        notes: "Linet Hernandez",
		links: "t9.html",
		city : "Barranquilla"
      },
      {
      face : imagePath,
        what: 'conservador C150L (Super Eco)',
        who: 'T10',
        when: '3:08PM',
        notes: "Yuleivy Judith Meza Payares",
		links: "t10.html",
		city : "Barranquilla"
      },
      {
      face : imagePath,
        what: 'Proyecto Antioquia',
        who: 'T11',
        when: '3:08PM',
        notes: "Angie Paola Valencia",
		links: "t11.html",
		city : "Cartagena"
      },
      {
      face : imagePath,
        what: 'Proyecto Antioquia',
        who: 'T12',
        when: '3:08PM',
        notes: "Gladis Gutierrez de Gomez",
		links: "t12.html",
		city : "Barranquilla"
      },
      {
      face : imagePath,
        what: 'Proyecto Antioquia',
        who: 'T13',
        when: '3:08PM',
        notes: "Graciela Cecilia Arrieta Sierra",
		links: "t13.html",
		city : "Sincelejo"
      }
	  
	  
    ];
});


/**
Copyright 2016 Google Inc. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
**/