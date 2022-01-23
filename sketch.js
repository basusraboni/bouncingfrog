var oceanImg, ocean;
var coinImg, coin, coinGroup;
var climberImg, climber, climbersGroup;
var frog, frogImg;
var gameState = "play"
var score = 0;

function preload(){
  oceanImg = loadImage("water.jpg");
  coinImg = loadImage("coin.png");
  climberImg = loadImage("seaweed.png");
  frogImg = loadImage("frog.png");
  
}

function setup(){
  createCanvas(580,450);
  
  ocean = createSprite(300,300);
  ocean.addImage("ocean",oceanImg);

  
  frog = createSprite(200,200,50,50);
  frog.scale = 0.3;
  frog.addAnimation("frog", frogImg);  
  
  
  
   
  
  //create coin group and climber group
  coinGroup = new Group();
  climbersGroup = new Group();
 score = 0;
}


function draw(){  
  background('ocean');
  fill("green")
  textSize(15);
  text("Coin Collect:"+ score,400,30);

  drawSprites() 
  
  if (gameState === "play") {
   
    

      
    if(keyDown("left")&& climber.Y> -4){
      frog.velocityy= (0, - 2) ;
  }
 
    if(keyDown("right")){
      frog.velocityY = 5;
    }
    spawnCoin();
  
    if(climbersGroup.isTouching(frog)){
     
    
    }
    if(coinGroup.isTouching(frog)){
    score= score + 1;
     
  }
}
  
  if (gameState === "end"){
    coinGroup.destroyEach();
    climbersGroup.destroyEach();

  }
  if(ocean.y < 580){
    ocean.y = 400;
  }



// create the coin and climber in the same function
function spawnCoin() {
  
  if (frameCount % 280 === 0) {
    coin = createSprite(100,Math.round(random(10,300)),50,50);
    coin.addImage("coin",coinImg); 
    coin.velocityY = -5;
    coin.scale = 0.4;
    coinGroup.add(coin);
   
    climber = createSprite( 100,coin.y,50,50);
    climber.addImage("climber",climberImg);
    
   climber.VelocityY = - 4;
    climber.scale = 0.6 ;
    climbersGroup.add(climber);
    

    //make the x position of the coin and climber the same
   
    
  }
 
}
}

