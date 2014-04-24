var GamesApp = angular.module('GamesApp',[]);

GamesApp.controller("TicTacToeController", function($scope) {
  $scope.gameTitle = "Tic Tac Toe";
  $scope.tictactoeBoard = [];
  for (var a = 0; a < 9; a++) {
    $scope.tictactoeBoard[a] = 0;
  }
  $scope.player1 = 0;
  $scope.player2 = 0;
  $scope.draw = 0;
  var win = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
  var turn = 0;
  var playerTurn = 0;
  var winner = false;
  var setTurn = function() {
    if (turn % 2 === 0) {
      playerTurn = 1;
    } else {
      playerTurn = -1;
    }
  };
  var checkWin = function() {
    for (var b = 0; b < win.length; b++) {
      if ($scope.tictactoeBoard[win[b][0]] + $scope.tictactoeBoard[win[b][1]] + $scope.tictactoeBoard[win[b][2]] === 3) {
        $scope.gameTitle = "Red Wins";
        $scope.player2++;
        gameOver();
        break;
      }
      if ($scope.tictactoeBoard[win[b][0]] + $scope.tictactoeBoard[win[b][1]] + $scope.tictactoeBoard[win[b][2]] === -3) {
        $scope.gameTitle = "Green Wins";
        $scope.player1++;
        gameOver();
        break;
      }
    }
    if (turn === 9 && !winner) {
      $scope.gameTitle = "Draw";
      $scope.draw++;
    }
  };
  var gameOver = function() {
    winner = true;
    for (var c = 0; c < 9; c++) {
      if ($scope.tictactoeBoard[c] === 0) {
        $scope.tictactoeBoard[c] = 3;
      }
    }
  };
  $scope.replay = function() {
    turn = 0;
    winner = false;
    $scope.gameTitle = "Tic Tac Toe";
    for (var d = 0; d < 9; d++){
      $scope.tictactoeBoard[d] = 0;
    }
  };

  $scope.click = function(cellIndex) {
    if ($scope.tictactoeBoard[cellIndex] === 0){
      turn++;
      setTurn();
      $scope.tictactoeBoard[cellIndex] = playerTurn;
      checkWin();
    }
  };
});