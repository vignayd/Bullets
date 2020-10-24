var car , wall , speed , weight , deformation , thickness;
 
function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30 , 52);
  thickness = random(22,83);
 bullet = createSprite(100, 200, 40, 10);
 bullet.velocityX = speed;

 wall = createSprite(1500, 200 ,30,150);
}

function draw() {
  background(0);
  if(wall.x - bullet.x< (wall.width + bullet.width)/2 ){
  bullet.velocityX=0;
  deformation=(0.5* weight * speed * speed)/(thickness *thickness*thickness);
  console.log(deformation);
  if(deformation>10){
    wall.shapeColor="red";
  }
  else{
    wall.shapeColor="green";
  }
  }  
  drawSprites();
}