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
	paper = new Paper(200,450,40);
	trash = new Trash(650, 700);
	ground = new Ground(400, 690, 800, 20);
	

  
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

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

	}
}



