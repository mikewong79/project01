// Let's create some global variables we can play with.
var winner = false;
var turn = 0;
var cells = document.getElementsByClassName("cell");
var title = 0;
var win = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
// This creates global variables cell0 through cell8 equal to 0,
// which will be changed to a 1 for red or -1 for green.
for (var i = 0; i < 9; i++) {
  window["cell" + i.toString()] = 0;
}

//Function which will run when a cell is clicked on.
var click = function() {
  // Checks to see if the cell has already been clicked on.
  //  If it already has a value stored, the click does nothing.
  if (window[this.id.toString()] !== 0) {
    return;
  }
  // Changes the background color and assigns the appropriate value
  // to the corresponding cell variable based on if the turn is odd or even
   else if (turn % 2 === 0) {
    document.getElementById(this.id).style.backgroundColor = "red";
    window[this.id.toString()] = 1;
  } else {
    document.getElementById(this.id).style.backgroundColor = "green";
    window[this.id.toString()] = -1;
  }
  // Increments turn and checks to see if its a cats game.
  // Need to differentiate when turn 9 results in a win.
  turn++;
  gameOver();
  if (turn === 9 && !winner) {
    title.innerHTML = "Cat's Game";
  }
};

// Checks if somebody has won.  Runs through each array in win and checks
// if their sum is equal to 3 or -3.  Declares winner if one is found.
var gameOver = function() {
  for (i = 0; i < win.length; i++) {
    if (eval("cell" + win[i][0]) + eval("cell" + win[i][1]) + eval("cell"+ win[i][2]) === 3) {
      title.innerHTML = "Red Wins";
      winner = true;
      break;
    } if (eval("cell" + win[i][0]) + eval("cell" + win[i][1]) + eval("cell"+ win[i][2]) === -3) {
      title.innerHTML = "Green Wins";
      winner = true;
      break;
    }
  }
};

// Makes each of the 9 cells clickable and run the function "click" when
// clicked on
var start = function() {
  for (var i = 0; i < cells.length; i++) {
    cells[i].onclick = click;
  }
  title = document.getElementsByTagName("header")[0];

};

window.onload = start;