const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ball=[];

var block1,block2,block3,block4,block5,block6
var block7block8,block9,block10,block11;
var wall1,wall2,wall3,wall4,wall5,wall6;
var canvasWidth=1200;
var canvasHeight=600;

function setup() {
  createCanvas(canvasWidth,canvasHeight);
  engine=Engine.create();
  world=engine.world;
  //createSprite(400, 200, 50, 50);
  block1=new Block(100,230,20,20);
  block2=new Block(300,230,20,20);
  block3=new Block(500,230,20,20);
  block4=new Block(700,230,20,20);
  block5=new Block(900,230,20,20);
  block6=new Block(1100,230,20,20);
  block7=new Block(200,150,20,20);
  block8=new Block(400,150,20,20);
  block9=new Block(600,150,20,20);
  block10=new Block(800,150,20,20);
  block11=new Block(1000,150,20,20);

  wall1=new Wall(200,480,20,200);
  wall2=new Wall(400,480,20,200);
  wall3=new Wall(600,480,20,200);
  wall4=new Wall(800,480,20,200);
  wall5=new Wall(1000,480,20,200);
  wall6=new Wall(600,590,1200,20);
}

function draw() {
  Engine.update(engine);
  background(172,151,211); 
  block1.display();
  block2.display(); 
  block3.display(); 
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();  
  block9.display();    
  block10.display(); 
  block11.display(); 

  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  spawnBall();
  drawSprites();
}
function spawnBall(){
  if(frameCount%60===0){
ball.push(new Ball(random(10,1190),10,10));
  }
  for(var k = 0; k < ball.length; k++){
    ball[k].display();
  }
}