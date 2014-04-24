'use strict';

/* Controllers */

angular.module('GamesApp.controllers', [])
  .controller('TicTacToeController', ['$scope', function($scope) {
    $scope.gameTitle = "Tic Tac Toe";
    console.log("Inside TTT controller!");
  }])
  .controller('ConnectFourController', ['$scope', function($scope) {
    console.log("Inside C4 controller!");
  }]);
console.log("Controllers!");
