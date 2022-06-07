
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine
var world
var wall
var ball
var ground
var angle=60

//function preload() {
	
//}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options = {
		restitution : 0.95,
		frictionAir : 0.01
	}

    var ground_options = {
		isStatic : true
	}

    ball = Bodies.circle(200,10,10,ball_options);
	World.add(world,ball);

	ground = Bodies.rectangle(200,690,400,20,ground_options);
	World.add(world,ground)

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("white");
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,30);
  
  drawSprites();
 
}



