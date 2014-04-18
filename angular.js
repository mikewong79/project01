angular.module('ConnectFourApp', ['ngRoute']);
angular.module('ConnectFourApp',['ngResource']);
function ConnectFourCtrl($scope, $resource){
    $scope.board = [
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
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
            $scope.board[x][y] = $scope.turn;
            while ($scope.board[x+1][y] === 0) {
                $scope.board[x][y] = 0;
                if (x < 4) {
                    document.getElementById(x.toString()+","+y.toString()).style.backgroundColor = "gray";
                    document.getElementById((x+1).toString()+","+y.toString()).style.backgroundColor = $scope.color;
                    x++;
                    if ($scope.board[x+1][y] !== 0) {
                        $scope.board[x][y] = $scope.turn;
                    }
                }
                if ($scope.board[x+1][y] === 0 && x === 4) {
                    document.getElementById(x.toString()+","+y.toString()).style.backgroundColor = "gray";
                    document.getElementById((x+1).toString()+","+y.toString()).style.backgroundColor = $scope.color;
                    $scope.board[x+1][y] = $scope.turn;
                } else if (x === 4) {
                    document.getElementById(x.toString()+","+y.toString()).style.backgroundColor = $scope.color;
                    $scope.board[x][y] = $scope.turn;
                }
            }
        }
    };
}