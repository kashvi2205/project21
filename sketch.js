var bulletspeed,weight;
var wall,thickness;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(100, 200, 50, 5);
  bullet.color=(0,0,0);
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor(80,80,80);
  speed = ramdom(223,321);
  weight = ramdom(30,52);
function draw() {
  background(255,255,255);  
  drawSprites();
  function hasCollided(lbullet,lwall);
  bulletRightEdge= lbullet.x + lbullet.width;
  wallLedtEdge = lwall.x
  if (bulletRightEdge>= wallLedtEdge
    {
     retrun true
    }
    return faulse;

    if (hasCollided(bullet,wall))
    {
      bullet.velocityX=0;
      var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

      if (damage>10){
wall.shapeColor = color (255,0,0);
      }

      if (damage<10){
        wall.shapeColor= color(0,255,0);
      }
    
}