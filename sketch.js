const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var trash;
var ground;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 650, 20, 20, 20);
	ground = new Ground(400, height, 50, 50);
	

  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  trash.display();
  ground.display();


 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

	}
}



