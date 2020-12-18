const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var lightning, lightning1,lightning2,lightning3,lightning4;

var engine, world;
var maxDrops = [];
var rand;
var song;

var sky;

var maxmaxDrops=100;

var lightningCreatedFrame=0;

function preload(){
    lightning1 = loadImage("1.png");
    lightning2 = loadImage("2.png");
    lightning3 = loadImage("3.png");
    lightning4 = loadImage("4.png");
    sky = loadImage("sky.jpg");
    song = loadSound("sound.mp3");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    umbrella = new Umbrella(200,500);
    if(frameCount % 150 === 0){

        for(var i=0; i<maxmaxDrops; i++){
            maxDrops.push(new createDrop(random(0,400), random(0,700)));
        }

    }
    song.play()
}

function draw(){
    Engine.update(engine);
    background(sky); 
    rand = Math.round(random(1,4));
    
    if(frameCount%80===0){
        lightningCreatedFrame=frameCount;
        lightning = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: lightning.addImage(lightning1);
            break;
            case 2: lightning.addImage(lightning2);
            break; 
            case 3: lightning.addImage(lightning3);
            break;
            case 4: lightning.addImage(lightning4);
            break;
            default: break;
        }
        lightning.scale = random(0.3,0.6)
        
    }

    if(lightningCreatedFrame + 10 ===frameCount && lightning){
        lightning.destroy();
    }

    umbrella.display();
    for(var i = 0; i<maxmaxDrops; i++){
        maxDrops[i].showDrop();
        maxDrops[i].updateY()
        
    }

    drawSprites();
}   

