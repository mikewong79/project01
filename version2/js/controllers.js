angular.module('GamesApp.controllers', [])
  .controller("TicTacToeController", ['$scope', function($scope) {
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
  $scope.reset = function() {
    $scope.replay();
    $scope.player1 = $scope.player2 = $scope.draw = 0;
  };

  $scope.click = function(cellIndex) {
    if ($scope.tictactoeBoard[cellIndex] === 0){
      turn++;
      setTurn();
      $scope.tictactoeBoard[cellIndex] = playerTurn;
      checkWin();
    }
  };
}])
  .controller("ConnectFourController", ['$scope', '$timeout', function($scope, $timeout) {
    $scope.gameTitle = "Connect Four";
    $scope.player1=0;
    $scope.player2=0;
    $scope.draw=0;
    $scope.row=0;
    $scope.col=0;
    $scope.board = new Array (6);
    for (var a = 0; a < 6; a++) {
      $scope.board[a] = new Array (7);
      for (var b = 0; b < 7; b++) {
        $scope.board[a][b] = 0;
      }
    }
    var turn = 0;
    var winner = false;
    var setTurn = function() {
      if (turn % 2 === 0) {
        playerTurn = 1;
      } else {
        playerTurn = -1;
      }
    };
    var placePiece = function() {
      if ($scope.row < 5) {
        if ($scope.board[$scope.row+1][$scope.col] === 0) {
          $scope.board[$scope.row][$scope.col] = 0;
          $scope.board[$scope.row+1][$scope.col] = playerTurn;
          $scope.row++;
          $timeout(placePiece,125);
        } else {
          checkwin($scope.row,$scope.col);
        }
      } else {
        checkwin($scope.row,$scope.col);
      }
    };
    var checkwin = function(row,col) {
    // Check horizontal
      for (var i = -3; i < 1; i++) {
        if (col + i >= 0 && col + i <= 6) {
          if (Math.abs($scope.board[row][col+i] + $scope.board[row][col + i + 1] + $scope.board[row][col + i + 2] + $scope.board[row][col + i + 3]) === 4) {
            gameOver();
          }
        }
      }
      // Check vertical
      for (var b = 0; b < 3; b++) {
        if (Math.abs($scope.board[b][col] + $scope.board[b+1][col] + $scope.board[b+2][col] + $scope.board[b+3][col]) === 4) {
          gameOver();
          break;
        }
      }
      // Check diagnol \
      for (var c = -3; c < 1; c++) {
        if (row + c >= 0 && row + c + 3 <= 5 && col + c >= 0 && col + c + 3 <= 6) {
          if (Math.abs($scope.board[row+c][col+c] + $scope.board[row+c+1][col+c+1] + $scope.board[row+c+2][col+c+2] + $scope.board[row+c+3][col+c+3]) === 4) {
            gameOver();
          }
        }
        // Check diagnol /
        if (row - c - 3>= 0 && row - c <= 5 && col + c >= 0 && col + c + 3 <= 6) {
          if (Math.abs($scope.board[row-c][col+c] + $scope.board[row-c-1][col+c+1] + $scope.board[row-c-2][col+c+2] + $scope.board[row-c-3][col+c+3]) === 4) {
            gameOver();
          }
        }
      }
      if (turn === 42 && !winner) {
        $scope.gameTitle = "Draw";
        $scope.draw++;
      }
    };

    var gameOver = function() {
      winner = true;
      if (playerTurn === 1) {
        $scope.gameTitle = "Red Wins";
        $scope.player2++;
      } else {
        $scope.gameTitle = "Green Wins";
        $scope.player1++;
      }
    };
    $scope.replay = function() {
      winner = false;
      turn = 0;
      $scope.gameTitle = "Connect Four";
      for (var a = 0; a < 6; a++) {
        for (var b = 0; b < 7; b++) {
          $scope.board[a][b] = 0;
        }
      }
    };

    $scope.reset = function() {
      $scope.replay();
      $scope.player1 = $scope.player2 = $scope.draw = 0;
    };

    $scope.click = function(x,y) {
      $scope.row=0;
      $scope.col=y;
      if ($scope.board[0][y] === 0 && !winner) {
        turn++;
        setTurn();
        $scope.board[0][y] = playerTurn;
        $timeout(placePiece,125);
      }
    };
  }]);