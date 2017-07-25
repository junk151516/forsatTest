var rdsApp = angular.module('sidenavDemo2', ['ngMaterial' ,'ngRoute'])
.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $http) {
$scope.toggleLeft = buildToggler('left');
$scope.toggleRight = buildToggler('right');
$scope.changeUrl = changeUrl('right');
$scope.url = "html/inicio.html";

//$scope.appetizers= [];
//$http.get('https://api.thingspeak.com/channels.json?api_key=8VLOZT0WKDBJO8IQ').success(function(data) {
//    console.log("success!");
//    $scope.appetizers = data.appetizers;
//        console.log(data.appetizers);
//    });
//});


function buildToggler(componentId) {
  return function() {
    $mdSidenav(componentId).toggle();
  };
}
function changeUrl(componentId) {
  return function() {
    url = "html/index.html";
  };
}

$scope.todos = [
     {
       name: 'Tasajera',
       links: "#tasajera"
     },
     {
       name: 'Ayurá',
       links: "#ayura"
     },
     {
       name: 'Porce II',
       links: "#porce"
     },
     {
       name: 'Guadalupe IV',
       links: "html/guad4.html"
     },
     {
       name: 'Guatapé',
       links: "html/guata.html"
     },
     {
       name: 'Porce III',
       links: "html/porse3.html"
     },
     {
       name: 'Playas',
       links: "html/playas.html"
     },
     {
       name: 'Guadalupe III',
       links: "html/guad2.html"
     },
     {
       name: 'Termosierra',
       links: "html/term.html"
     },
     {
       name: 'Troneras',
       links: "html/tron.html"
     },
     {
       name: 'GenHidro',
       links: "html/hidro.html"
     },
     {
       name: 'GenTerm',
       links: "html/termic.html"
     },
     {
       name: 'GenEólico',
       links: "html/eoli.html"
     },
   ];
}).controller('MainCtrl', ['$route', '$routeParams', '$location',
  function MainCtrl($route, $routeParams, $location) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
}])
.controller('BookCtrl', ['$routeParams', function BookCtrl($routeParams) {
  this.name = 'BookCtrl';
  this.params = $routeParams;
  
}])
.controller('tasajera', ['$routeParams','$http','$scope', function tasajera($routeParams ,$http,$scope) {
  this.name = 'tasajera';
  this.params = $routeParams;
  	$http.get("https://api.thingspeak.com/channels/283841/feeds.json?api_key=IHEKNAZE3YXDTPK8&results=1")
    .then(function(response) {
        $scope.myWelcome = response.data; // unidad 2
		//$scope.myWelcome = angular.fromJson(response.data.field1);
    });
	$scope.parJson = function (json) {
		return angular.fromJson(json);
	};
	var myOffset = new Date().getTimezoneOffset();
	// converts date format from JSON
	$scope.toDate = function getChartDate(d) {
		// get the data using javascript's date object (year, month, day, hour, minute, second)
		// months in javascript start at 0, so remember to subtract 1 when specifying the month
		// offset in minutes is converted to milliseconds and subtracted so that chart's x-axis is correct
		return Date.UTC(d.substring(0,4), d.substring(5,7)-1, d.substring(8,10), d.substring(11,13), d.substring(14,16), d.substring(17,19)) - (myOffset * 60000);
	}
}]).config(function($mdThemingProvider) {
	  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
	  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
	  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
	  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
	});

rdsApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'html/inicio.html',
            controller  : 'MainCtrl'
        })
        .when('/tasajera', {
            templateUrl : 'cards/tasajera.html',
            controller  : 'tasajera'
			
        })
        .when('/ayura', {
            templateUrl : 'cards/index.html',
            controller  : 'ChapterCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});
