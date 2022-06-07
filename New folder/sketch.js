var player;
var bg,bgImg;

function preload(){
  bgImg=loadImage("assets/sprite_0.png");
}

function setup(){
  createCanvas(1000,500);
  rectMode(CENTER);
  player=createSprite(200,200,50,50);
  player.scale=0.5;
  bg=createSprite(200,200,30,30);
  bg.addImage(bgImg);

}

function draw() 
{
background(225);
camera.x=player.x;
camera.y=player.y;
player.depth=bg.depth+1;

if(keyCode===39){
  player.x+=5;
} 
if(keyCode===38){
  player.y-=5;
}
if(keyCode===37){
  player.x-=5;
}
if(keyCode===40){
  player.y+=5;
}

drawSprites();  
}



