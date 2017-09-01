
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
        what: 'Medidor Cuartos',
        who: 'Med1',
        when: '3:08PM',
        notes: "ForsatIngenieria",
		links: "initial/cuartos1.html",
		city : "Copacabana"
      },
	   {
        face : imagePath,
        what: 'Medidor Cuartos',
        who: 'Med2',
        when: '3:08PM',
        notes: "ForsatIngenieria",
		links: "initial/cuartos2.html",
		city : "Copacabana"
      },
	  {
        face : imagePath,
        what: 'Medidor Cuartos',
        who: 'Med3',
        when: '3:08PM',
        notes: "ForsatIngenieria",
		links: "initial/cuartos3.html",
		city : "Copacabana"
      },
	  {
        face : imagePath,
        what: 'Proyecto Coraje',
        who: 'T2',
        when: '3:08PM',
        notes: "Osterman  Flores Avila",
		links: "t2.html",
		city : "Los Cedros Soledad"
      },
      {
        face : imagePath,
        what: 'Proyecto Coraje',
        who: 'T3',
        when: '3:08PM',
        notes: "Daniel Lemaitre",
		links: "t3.html",
		city : "Cartagena"
      },
      {
        face : imagePath,
        what: 'Carrera 77 vis #54D-37, Barrio Catalina 2da',
        who: 'T4',
        when: '3:08PM',
        notes: "Yolima Ramirez",
		links: "t4.html",
		city : "Itagui- Antioquia"	
      },
       {
       face : imagePath,
         what: 'Proyecto Coraje',
         who: 'T5',
         when: '3:08PM',
         notes: "Diana Luz Mesa",
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
        what: 'Proyecto Coraje',
        who: 'T7',
        when: '3:08PM',
        notes: "Julio Cesar Agamez",
		links: "t7.html",
		city : "Cartagena"
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
        what: 'Proyecto Coraje',
        who: 'T9',
        when: '3:08PM',
        notes: "José payares",
		links: "t9.html",
		city : "Carrera #38b-61 Barrio la magdalena Barranquilla"
      },
       {
       face : imagePath,
         what: 'Calle 40 A sur, #79C-53',
         who: 'T10',
         when: '3:08PM',
         notes: "Esperanza Solórzano",
		 links: "t10.html",
		 city : "Barranquilla"
       },
      {
      face : imagePath,
        what: 'Proyecto Coraje',
        who: 'T11',
        when: '3:08PM',
        notes: "Angie Paola Valencia",
		links: "t11.html",
		city : "Cartagena"
      },
      {
      face : imagePath,
        what: 'Proyecto Coraje',
        who: 'T12',
        when: '3:08PM',
        notes: "Socorro Gracia Sanjuanelo",
		links: "t12.html",
		city : "Barranquilla"
      }
	   ,
       {
       face : imagePath,
         what: 'Proyecto Coraje',
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