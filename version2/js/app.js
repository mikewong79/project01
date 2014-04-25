var GamesApp = angular.module('GamesApp', [
  'ngRoute',
  'GamesApp.controllers'
  ]);

GamesApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/tictactoe', {templateUrl: 'partials/tictactoe.html', controller: 'TicTacToeController'});
  $routeProvider.when('/connectfour', {templateUrl: 'partials/connectfour.html', controller: 'ConnectFourController'});
  $routeProvider.otherwise({redirectTo: '/tictactoe'});
}]);