var player,playerImage
var enemy,enemyImage
var Bg,BgImage

function preload(){
Bgimage = loadImage("images/bg.png")
playerImage = loadImage("images/playerplane.png")
}

function setup(){
createCanvas(windowWidth,windowHeight);
Bg = createSprite(windowWidth/2,windowHeight/2)
Bg.scale = 3
Bg.addImage(Bgimage)
Bg.velocityY = 3
player = createSprite(400,750,20,20);
player.scale = 0.6
player.addImage(playerImage)




}

function draw(){
background("white");

if(Bg.y > 500){
  Bg.y = 400
}

if(keyDown("d")){
player.x = player.x + 10

}

if(keyDown("a")){
  player.x = player.x - 10
  
  }
spawnObstacles() 
drawSprites()

}

function spawnObstacles(){
if(frameCount % 120 === 0){
enemy = createSprite(200,10,20,20)
enemy.x = Math.round(random(80,1000))
enemy.velocityY = 5
enemy.addImage("images/enemy1.png")
}
}