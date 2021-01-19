var tom, tomImg1,tomImg2,tomImg3;
var jerry,jerryImg1,jerryImg2,jerryImg3;
var ground, groundImg;

function preload() {
    //load the images here
    tomImg1=loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3=loadAnimation("images/tomFour.png");

    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");

    groundImg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(800, 650, 20, 30);
    tom.addAnimation("catFirstImage",tomImg1,tomImg2);
    tom.scale=0.1;
    tom.debug=true;

    jerry=createSprite(100,650,10,10);
    jerry.addAnimation("mouseFirstImage",jerryImg1);
    jerry.scale=0.1;
    jerry.debug=true;

    keyPressed();

}

function draw() {

    background(groundImg);

    
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){     
        tom. x=jerry.x+50;
        tom.velocityX=0;
        tom.addAnimation("catLastImage",tomImg3);
        tom.changeAnimation("catLastImage");
        jerry.addAnimation("mouseLastImage",jerryImg3);
        jerry.changeAnimation("mouseLastImage");
    }
    
    drawSprites();
}


function keyPressed(){

     if(keyCode===LEFT_ARROW){
         tom.velocityX=-5;
         tom.addAnimation("catRunning",tomImg2);
         tom.changeAnimation("catRunning",tomImg2);
         jerry.addAnimation("mouseSecondImg",jerryImg2);
         jerry.changeAnimation("mouseSecondImg");
     }

}
