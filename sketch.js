var player,playerimg,enemy,enemygroup;
var canvas;
var backgroundimg,bg;
var platform,platformimg;
var gameState = "play";
var platformpositions = [
  {x:width/2,y:500,image: platformimg}
]

var ground,groundimg;

function preload(){

  backgroundimg = loadImage("./assets/background.jpg");
  playerimg = loadImage("./assets/player.png");
  platformimg = loadImage("./assets/platform.png");


  
}

function setup(){

  canvas = createCanvas(windowWidth,windowHeight);

  bg = createSprite(width/2,height/2,width,height);
  bg.addImage(backgroundimg);

  ground = createSprite(width/2,1000,2000,700);
  ground.visible = false;

  player = createSprite(width/2,400);
  player.addImage(playerimg);
  player.scale = 0.25
  player.velocity.y += 8


  if(keyDown("right")){

    platform.position.x -= 1
  }
  
  



}

function draw(){
  background(255)

  
  

  
  

  player.collide(ground);

  drawSprites();
}


function createplatform(spriteGroup, numberOfSprites, spriteImage, scale, positions = []){


  for(var i = 0; i < numberOfSprites; i++){

    var x,y

    if(positions.length > 0){

      x = positions[i].x;
      y = positions[i].y;
      

    }
  }
}

