angular.module('ConnectFourApp', ['ngRoute']);
angular.module('ConnectFourApp',['ngResource']);
function ConnectFourCtrl($scope, $resource){
    $scope.board = [
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    ];

    $scope.class = "box";
    $scope.turn = 0;
    $scope.count = 0;
    $scope.color = "gray";
    // $scope.click = function() {
    //     if ($scope.turn % 2 === 0) {
    //         this.class = "red";
    //         $scope.board[this.$parent.$index][this.$index]=1;
    //     } else {
    //         this.class = "green";
    //         $scope.board[this.$parent.$index][this.$index]=-1;
    //     }
    //     $scope.turn++;
    //     console.log(this);
    // };

    $scope.checkwin = function(row,col) {
        // Check horizontal
        for (var i = -3; i < 1; i++) {
            if (col + i >= 0 && col + i <= 6) {
                if ($scope.board[row][col+i] + $scope.board[row][col + i + 1] + $scope.board[row][col + i + 2] + $scope.board[row][col + i + 3] === 4) {
                    console.log("red wins");
                }
                if ($scope.board[row][col+i] + $scope.board[row][col + i + 1] + $scope.board[row][col + i + 2] + $scope.board[row][col + i + 3] === -4) {
                    console.log("green wins");
                }
            }
        }
        // Check vertical
        for (var b = 0; b < 3; b++) {
            if ($scope.board[b][col] + $scope.board[b+1][col] + $scope.board[b+2][col] + $scope.board[b+3][col] === 4) {
                console.log("red wins");
                break;
            }
            if ($scope.board[b][col] + $scope.board[b+1][col] + $scope.board[b+2][col] + $scope.board[b+3][col] === -4) {
                console.log("green wins");
                break;
            }
        }
        for (var c = -3; c < 1; c++) {
            // Check diagnol \
            if (row + c >= 0 && row + c + 3 <= 5 && col + c >= 0 && col + c + 3 <= 6) {
                if ($scope.board[row+c][col+c] + $scope.board[row+c+1][col+c+1] + $scope.board[row+c+2][col+c+2] + $scope.board[row+c+3][col+c+3] === 4) {
                    console.log("red wins");
                }
                if ($scope.board[row+c][col+c] + $scope.board[row+c+1][col+c+1] + $scope.board[row+c+2][col+c+2] + $scope.board[row+c+3][col+c+3] === -4) {
                    console.log("green wins");
                }
            }
            // Check diagnol /
            if (row - c - 3>= 0 && row - c <= 5 && col + c >= 0 && col + c + 3 <= 6) {
                if ($scope.board[row-c][col+c] + $scope.board[row-c-1][col+c+1] + $scope.board[row-c-2][col+c+2] + $scope.board[row-c-3][col+c+3] === 4) {
                    console.log("red wins");
                }
                if ($scope.board[row-c][col+c] + $scope.board[row-c-1][col+c+1] + $scope.board[row-c-2][col+c+2] + $scope.board[row-c-3][col+c+3] === -4) {
                    console.log("green wins");
                }
            }
        }
    };

    $scope.click = function() {
        x = 0;
        y = this.$index;
        if ($scope.count % 2 === 0) {
            $scope.color = "red";
            $scope.turn = 1;
        } else {
            $scope.color = "green";
            $scope.turn = -1;
        }

        if ($scope.board[x][y] === 0) {
            $scope.count++;
            document.getElementById(x.toString()+","+y.toString()).style.backgroundColor = $scope.color;
            $scope.placePiece = function(row, col) {
                if (row < 5) {
                    if ($scope.board[row + 1][col] === 0) {
                        document.getElementById((row).toString()+","+y.toString()).style.backgroundColor = "gray";
                        document.getElementById((row + 1).toString()+","+y.toString()).style.backgroundColor = $scope.color;
                        row++;
                        console.log($scope.board);
                        setTimeout(function() {$scope.placePiece(row, col);}, 500);
                    // } else {
                    //     if ($scope.board[5][col] === 0) {
                    //         $scope.board[5][col] = $scope.turn;
                    //         $scope.checkwin(5,col);
                    //     } else {
                    //         for (var a = 0; a < 5; a++) {
                    //             if ($scope.board[a+1][col] !== 0) {
                    //                 $scope.board[a][col] = $scope.turn;
                    //                 $scope.checkwin(a,col);
                    //                 break;
                    //             }
                    //         }
                    //     }
                    }

                }
            };
            setTimeout(function() {$scope.placePiece(x,y);}, 500);
            // for (var i = 1; i < 6; i++) {
            //     if ($scope.board[x + i][y] === 0) {
            //         document.getElementById((x + i - 1).toString()+","+y.toString()).style.backgroundColor = "gray";
            //         document.getElementById((x+i).toString()+","+y.toString()).style.backgroundColor = $scope.color;
            //     }
            // }
            $scope.setBoard = function(z) {
                console.log(z);
                if ($scope.board[5][z] === 0) {
                    $scope.board[5][z] = $scope.turn;
                    $scope.checkwin(5,z);
                } else {
                    for (var a = 0; a < 5; a++) {
                        if ($scope.board[a+1][z] !== 0) {
                            $scope.board[a][z] = $scope.turn;
                            $scope.checkwin(a,z);
                            break;
                        }
                    }
                }
            };
            setTimeout(function() {$scope.setBoard(y);}, 3000);
            // for (var z = 5; z >= 0; z--) {
            //     if ($scope.board[z][y] === 0) {
            //         $scope.board[z][y] = $scope.turn;
            //     }
            // }
            // $scope.board[x][y] = $scope.turn;
            // while ($scope.board[x+1][y] === 0) {
            //     $scope.board[x][y] = 0;
            //     if (x < 4) {
            //         document.getElementById(x.toString()+","+y.toString()).style.backgroundColor = "gray";
            //         document.getElementById((x+1).toString()+","+y.toString()).style.backgroundColor = $scope.color;
            //         x++;
            //         if ($scope.board[x+1][y] !== 0) {
            //             $scope.board[x][y] = $scope.turn;
            //             $scope.checkwin(x,y);
            //         }
            //     }
            //     if ($scope.board[x+1][y] === 0 && x === 4) {
            //         document.getElementById(x.toString()+","+y.toString()).style.backgroundColor = "gray";
            //         document.getElementById((x+1).toString()+","+y.toString()).style.backgroundColor = $scope.color;
            //         $scope.board[x+1][y] = $scope.turn;
            //         $scope.checkwin(x+1,y);
            //     } else if (x === 4) {
            //         document.getElementById(x.toString()+","+y.toString()).style.backgroundColor = $scope.color;
            //         $scope.board[x][y] = $scope.turn;
            //         $scope.checkwin(x,y);
            //     }
            // }
        }
    };
}