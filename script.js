var turn = 0;
var cells = document.getElementsByClassName("cell");

var click = function() {
  if (turn % 2 === 0) {
    document.getElementById(this.id).style.backgroundColor = "red";
  } else {
    document.getElementById(this.id).style.backgroundColor = "green";
  }
  turn++;
};

var start = function() {
  for (var i = 0; i < cells.length; i++) {
    cells[i].onclick = click;
  }
};

window.onload = start;