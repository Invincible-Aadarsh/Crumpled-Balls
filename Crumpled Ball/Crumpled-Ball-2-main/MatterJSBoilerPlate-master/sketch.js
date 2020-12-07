
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, paper_V, ground_V;
var d1;
function preload()
{
	d1 = loadImage('dustbingreen.png');
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground_V = new Ground(600,height,1200,20)
   paper_V = new Paper (300,height,5);
   body1=createSprite(width/2, height-45,100,20);
body1.shapeColor=color('red');
body1.scale = 0.3
body1.addImage(d1);
/*body2=createSprite(width-350, height-80,20,100);
body2.shapeColor=color('red');

body3=createSprite(width-450, height-80,20,100);
body3.shapeColor=color('red');*/

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');
  //Engine.Update(Engine)
  ground_V.display();
  paper_V.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper_V.body,paper_V.body.position,{x:85,y:-85});
	}
}



