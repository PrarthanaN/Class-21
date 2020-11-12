var movingRect, fixedRect;
var gameObject1, gameObject2, gameObject3, gameObject4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  movingRect = createSprite(400, 200, 80, 50);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  fixedRect.debug = true;
  movingRect.debug = true;

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(100,200,50,50);
  gameObject3.shapeColor = "yellow";
  gameObject4 = createSprite(600,200,50,50);
  gameObject4.shapeColor = "white";

  gameObject3.velocityX = 5;
  gameObject4.velocityX = -5;
}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, gameObject1)){
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }else{
    gameObject1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  if(isTouching(movingRect, gameObject2)){
    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }else{
    gameObject2.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  
bounceOff(gameObject3, gameObject4);

  drawSprites();
  
}
