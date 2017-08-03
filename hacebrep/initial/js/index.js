
angular.module('tabsDemoDynamicHeight', ['ngMaterial'])

.controller('BlankApp', function($scope) {
  $scope.imagePath = 'img/cnx.png';
  $scope.title = "rds online";
  $scope.description = "description";
});

angular.module('bindHtmlExample', ['ngSanitize'])
.controller('ExampleController', ['$scope', function($scope) {
  $scope.myHTML =
     'I am an <code>HTML</code>string with ' +
     '<a href="#">links!</a> and other <em>stuff</em>';
}]);
