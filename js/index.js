var canvas = document.getElementById("mainCanvas");
var context = canvas.getContext("2d");

canvas.height=window.innerWidth;
canvas.width=window.innerHeight;

var map = [
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1,1,1]
];

var characterImg = new Image();
characterImg.onload = function() {
  context.drawImage(characterImg, 20, 20)
}

var grassImage = new Image();
grassImage.onload = function() {
  for (let i=0; i<map.length; i++) {
    console.log("i ="+ i)
    for (let j=0; j<map[i].length; j++) {
      console.log("j ="+j)
      if (map[i][j] == 1) {
        context.drawImage(grassImage,i * 50,j * 50);
    }
    }
  }
}
characterImg.src = 'assets/char.png'
grassImage.src = 'assets/grass.png'