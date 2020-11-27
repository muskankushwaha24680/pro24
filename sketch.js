
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var bin1,bin2,bin3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(100,650,50);
ground = new Ground(600,680,1200,20)
bin1 = new Dustbin(800,590,20,150);
bin2 = new Dustbin(1000,590,20,150)
bin3 = new Dustbin(900,660,210,20)

	Engine.run(engine);
  
}


function draw() {
  background(0);

  Engine.update(engine);
   paper.display();
   ground.display();
   bin1.display();
   bin2.display();
   bin3.display();
   drawSprites();
 keyPressed();
}


function keyPressed(){

	if(keyDown === UP_ARROW){
		
		Matter.Body.applyForce(paper.body,paper.body.position,{ x: 85 , y: -85 });
	}
}



