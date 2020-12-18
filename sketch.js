const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject, groundObject
var world;

function preload() {
parkImage=loadImage("parkani.jpg")
}

function setup() {
	createCanvas(1600,661);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj = new dustbin(1200, 600);
	paperObject = new Ball(200, 450, 40);
	groundObject = new Ground(width / 2, 615, width, 20);
	//Create a Ground


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1200,
			height: 700,
			wireframes: false
		}
	});

	Engine.run(engine);
	//Render.run(render);

}


function draw() {
	rectMode(CENTER);
	background(parkImage);

	dustbinObj.display();
	paperObject.display();
	groundObject.display();





}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body, paperObject.body.position, { x: 85, y: -121 });

	}
}

