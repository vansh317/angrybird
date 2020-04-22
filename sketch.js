const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    log1=new Log(250,330,180,PI/2)
    box1 = new Box(200,350,50,50);
    box2 = new Box(300,350,50,50);
   
    pig1=new Pig(250,350)
    
    log2=new Log(250,290,180,PI/2)
    box3 = new Box(200,310,50,50);
    box4 = new Box(300,310,50,50);
    box5 = new Box(250,260,50,50);
    pig2=new Pig(250,310)
    log3=new Log(225,260,100,PI/6)
    log4=new Log(275,260,100,-PI/6)
bird=new Bird(500,200)
    ground = new Ground(400,380,800,20)

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    log1.display();
    box1.display();
    box2.display();
    pig1.display();
    ground.display();
    log2.display();
    box3.display();
    box4.display();
    pig2.display();
    log3.display();
    box5.display();
    log4.display();
    bird.display();

}