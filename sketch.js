const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bg;

var SLING = 0;
var SHOT = 1;
var gameState = SLING;

var boxar = [];

var posX1 = 840;
var posX2 = 860;
var posX3 = 880;
var posX4 = 900;
var posX5 = 920;
var posX6 = 940;
var posX7 = 960;
var posX8 = 980;
var posX9 = 1000;

var flag;

function preload() {
  bg = loadImage("Sprites/sky.jpg");

}

function setup() {
  createCanvas(2000, 800);
  engine = Engine.create();
  world = engine.world;

  hero = new Hero(200,200,200,80);
  ground = new Ground(1000, 600, 400, 10);

  rope1 = new Rope(hero.body, {x:150,y:150});
  rope2 = new Rope(hero.body, {x:250,y:150});

  //box1 = new Box(1000,500,40,40);

  for(var i = 1;i<10;i++){
    boxar.push(new Box(posX1,580,40,40));
    posX1 = posX1 + 40;
  }

  for(var i = 1;i<9;i++){
    boxar.push(new Box(posX2,540,40,40));
    posX2 = posX2 + 40;
  }

  for(var i = 1;i<8;i++){
    boxar.push(new Box(posX3,500,40,40));
    posX3 = posX3 + 40;
  }

  for(var i = 1;i<7;i++){
    boxar.push(new Box(posX4,460,40,40));
    posX4 = posX4 + 40;
  }

  for(var i = 1;i<6;i++){
    boxar.push(new Box(posX5,420,40,40));
    posX5 = posX5 + 40;
  }

  for(var i = 1;i<5;i++){
    boxar.push(new Box(posX6,380,40,40));
    posX6 = posX6 + 40;
  }

  for(var i = 1;i<4;i++){
    boxar.push(new Box(posX7,340,40,40));
    posX7 = posX7 + 40;
  }

  for(var i = 1;i<3;i++){
    boxar.push(new Box(posX8,300,40,40));
    posX8 = posX8 + 40;
  }

  for(var i = 1;i<2;i++){
    boxar.push(new Box(posX9,260,40,40));
    posX9 = posX9 + 40;
  }

  monster1 = new Monster(1800, 500,120,120);
}

function draw() {
  background(bg);

  Engine.update(engine);

  ground.display();

  hero.display();

  rope1.display();
  rope2.display();

  for(var i = 0;i<boxar.length;i++){
    boxar[i].display();
  }

  monster1.display();
  //box1.display();

  var collision = Matter.SAT.collides(hero.body,monster1.body);

    if(collision.collided){
        flag = 1;
    }

    if(flag === 1){
        text("YOU WON!!!", 960,400);
        World.remove(world,monster1.body);
        
    }else{
      
    }

}

function mouseDragged(){
  if(gameState === SLING){
      Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){
  gameState = SHOT;
  rope1.fly();
  rope2.fly();
}

function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(hero.body,{x:200,y:50});
      rope1.attach(hero.body);
      rope2.attach(hero.body);
      gameState = SLING;
      flag = 0;
  }
}