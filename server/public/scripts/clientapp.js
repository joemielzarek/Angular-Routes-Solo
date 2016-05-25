var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "HomeController"
    })
    .when('/powerrangers', {
      templateUrl: '/views/powerrangers.html',
      controller: "PowerRangersController"
    })
    .when('/zordon', {
      templateUrl: '/views/zordon.html',
      controller: "ZordonController"
    })
    .when('/alpha', {
      templateUrl: '/views/alpha.html',
      controller: "AlphaController"
    })
    .otherwise({
      redirectTo: 'home'
    })
}]);
