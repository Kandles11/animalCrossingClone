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



const imageURLS = ['assets/char.png', 'assets/grass.png']
var images = [];
var imageCount = 0;

function allLoaded(){
  //draw grass
  for (let i=0; i<map.length; i++) {
    console.log("i ="+ i)
    for (let j=0; j<map[i].length; j++) {
      console.log("j ="+j)
      if (map[i][j] == 1) {
        context.drawImage(images[1],i * 50,j * 50);
      }
    }
  }
  //draw character
  context.drawImage(images[0], 20, 20)
}

imageURLS.forEach(src => {
  const image = new Image();
  image.src = src;
  image.onload = ()=>{
    imageCount += 1;
    if(imageCount === imageURLS.length){
      allLoaded();
    }
  }
  images.push(image);
});