var paper
var dustbin1
var dustbin2
var dustbin3

var bin,binImage

var ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	binImage=loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(100,200,10);
dustbin1= new Dustbin(400,590,160,30)
dustbin2=new Dustbin(450,550,30,100)
dustbin3=new Dustbin(350,550,30,100)
ground=new Ground(400,600,800,10)

var bin =createSprite(400,490,30,30);
bin.addImage(binImage);
bin.scale=0.7

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);

  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
   if(keyCode===UP_ARROW){

    Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:-80})

}
}