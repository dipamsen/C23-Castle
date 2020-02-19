const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var log1, ground;
var log6,log2, log3, log4, log5;
//VSauce!

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    log1 = new Log(280,380,80,PI);
    
    log2 = new Log(350,380,80,PI);
   log3 = new Log(315,200,82,PI/2);
  log4 = new Log(299,170,60,PI/6);
  log5 = new Log(339,168,60,-PI*30/180);
  log6 = new Log(315,380,80,PI);
    ground = new Ground(200,390,400,20);

    loga1 = new Log(50,380,80,PI);
     loga2 = new Log(120,380,80,PI);
   loga3 = new Log(85,200,80,PI/2);
  loga4 = new Log(70,170,60,PI/6);
  loga5 = new Log(110,170,60,-PI/6);
  loga6 = new Log(85,380,80,PI);

  logs1 = new Log(160,380,100,PI);
  logs2 = new Log(200,380,100,PI);
logs3 = new Log(240,380,100,PI);
logs4 = new Log(180,380,100,PI);
logs5 = new Log(220,380,100,PI);

logq1 = new Log(200,200,100,PI/2);
logq2 = new Log(200,180,80,PI/2);
logq3 = new Log(200,160,60,PI/2);
logq4 = new Log(200,140,40,PI/2);
logq5 = new Log(200,120,20,PI/2);
logq6 = new Log(200,100,10,PI/2);
}

function draw(){
    background("white");
    Engine.update(engine);
    ground.display();
    log1.display();
    log2.display();
    log3.display();
  log4.display();
   log5.display();
   log6.display();
   loga1.display();
   loga2.display();
   loga3.display();
 loga4.display();
  loga5.display();
  loga6.display();   
  logs1.display();
  logs2.display();
  logs3.display();
logs4.display();
 logs5.display();
 logq1.display();
 logq2.display();
 logq3.display();
 logq4.display();
 logq5.display();
 logq6.display();
 // log5.display();
   // box1.display();
   // box2.display();
}