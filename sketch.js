var player
var ball
var goalpost
var goalpost2
var playerE

function setup() {
  createCanvas(800,800);
    player=createSprite(200,300,50,50);
    ball=createSprite(400,400,30,20);
    goalpost=createSprite(400,55,200,100);
    goalpost2=createSprite(400,750,200,100);
    playerE=createSprite(100,700,50,50);
}

function draw() {
  background("green");  
  if(ball.isTouching(player)){
    ball.bounce(player)
  
  }
  if(keyDown(LEFT_ARROW)){
    player.x=player.x -1
  }
  if(keyDown(RIGHT_ARROW)){
    player.x=player.x +1
  }
  if(keyDown(UP_ARROW)){
    player.y=player.y -1
  }
  if(keyDown(DOWN_ARROW)){
    player.y=player.y +1
  }
  playerE.setVelocity(random(1,10),random(1,10))
  if(playerE.x>800||playerE.y>800){
    
  }
  drawSprites();
}