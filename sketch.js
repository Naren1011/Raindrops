const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var rain;
var rainarray = [];

function setup() {
  createCanvas(1263,550);
  engine = Engine.create();
  world = engine.world;
  for(var i=0; i<=10; i = i + 1){
    rainarray[i] = new raindrop(random(0,1000),0,random(10,20),random(10,20));
  
  }

}



function draw() {
  background(0,0,0);  
  Engine.update(engine);
  for(i=0; i<=10; i++){
  //rain = new raindrop(random(0,1263),0,20,20);
  rainarray[i].fall();
  //rainarray[i].d();
  rainarray[i].display();
  }
  //createRainDrops();
  //rain.velocityY = 5;
  
}