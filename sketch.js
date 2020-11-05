var bullet, wall;
var speed, weight, thickness;
var deformation;

function setup() {
  createCanvas(1600,400);
 speed = random(235,321);
 weight = random(30,52);
 thickness = random(22,83);

 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = "blue";
 //car1.velocityx = 20;

 bullet = createSprite(50,200,50,5);
 bullet.shapeColor = ("white");
 bullet.velocityX = speed;
 


}

function draw() {
  background("green");  

  if (hasCollided(bullet, wall))
  {
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed*speed/(thickness*thickness*thickness);

  if (damage > 10)

{
  wall.shapeColor = color(255,0,0);
}

if (damage < 10)

{
  wall.shapeColor = color(0,255,0);
}




  }

 
 
 

   
  drawSprites();
}



