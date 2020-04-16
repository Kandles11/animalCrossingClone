var canvas = document.getElementById("mainCanvas");
var context = canvas.getContext("2d");

canvas.height=window.innerWidth;
canvas.width=window.innerHeight;

var characterImg = new Image();
characterImg.onload = function() {
  context.drawImage(characterImg, 20, 20, 100, 100)
}
characterImg.src = 'assets/char.png'

test