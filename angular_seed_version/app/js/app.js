'use strict';


// Declare app level module which depends on filters, and services
angular.module('GamesApp', [
  'ngRoute',
  'GamesApp.filters',
  'GamesApp.services',
  'GamesApp.directives',
  'GamesApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  console.log("Setting up routing");
  // $routeProvider.when('/landing', {templateUrl: 'partials/landing.html', controller: 'LandingController'});
  $routeProvider.when('/tictactoe', {templateUrl: 'partials/tictactoe.html', controller: 'TicTacToeController'});
  $routeProvider.when('/connectfour', {templateUrl: 'partials/connectfour.html', controller: 'ConnectFourController'});
  $routeProvider.otherwise({redirectTo: '/tictactoe'});
}]);
