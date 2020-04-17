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
    console.log("test")
    for (let j=0; j<map[i].length; j++) {
      if (map[i][j] == 1) {
        context.drawImage(grassImage,j*10 + 50,i*10 + 50);
    }
    }
  }
}
characterImg.src = 'assets/char.png'
grassImage.src = 'assets/grass.png'