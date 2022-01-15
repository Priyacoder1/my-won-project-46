var ball,ballimg;
var score = 0;
var gift1,gift2,gift3,gift4,gift5,gift6,gift7,gift8,gift9,gift10,gift11,gift12,gift113,gift14,
gift15,gift16,gift17,gift18,gift19,gift20;
var wall1,wall2,wall3,wall4;
var gift1img,gift2img;
var paddle,paddleimg;
var jkgift,jkgiftimg;
var vgift,vgiftimg;
var rmgift,rmgiftimg;
var sugagift,sugagiftimg;
var jingift,jingiftimg;
var hobigift,hobigiftimg;
var jimingift,jimingiftimg;
var gifts;
var thankyou,thankyouimg;


function preload(){

  ballimg = loadImage("ball.png");
  gift1img = loadImage("gift1.png");
  paddleimg = loadImage("paddle.png");
  jkgiftimg = loadImage("jkgift.png");
  vgiftimg = loadImage("vgift.png");
  rmgiftimg = loadImage("rmgift.png");
  sugagiftimg = loadImage("sugagift.png");
  jingiftimg = loadImage("jingift.png");
  hobigiftimg = loadImage("hobigift.png");
  jimingiftimg = loadImage("jimingift.png");
  thankyouimg = loadImage("thankyou.jpg");


}

function setup(){
createCanvas(750,600);

paddle = createSprite(200,550,100,10);


ball = createSprite(200,480,10,10);
ball.addImage(ballimg);
ball.scale = 0.08;
ball.velocityY = -6;
ball.velocityX = +6;

wall1 = createSprite(2,300,10,600);
wall2 = createSprite(748,300,10,600);
wall3 = createSprite(400,2,800,10);
wall4 = createSprite(400,598,800,10);

thankyou = createSprite(375,300); 
thankyou.addImage(thankyouimg);
thankyou.scale = 1;
thankyou.visible = false;

gift1 = createSprite(50,150,10,10);
gift1.addImage(jimingiftimg);
gift1.scale = 0.15;

gift2 = createSprite(150,150,10,10);
gift2.addImage(gift1img);
gift2.scale = 0.15;

gift11 = createSprite(250,155,10,10);
gift11.addImage(jkgiftimg);
gift11.scale = 0.15;

gift4 = createSprite(350,150,10,10);
gift4.addImage(gift1img);
gift4.scale = 0.15;

gift12 = createSprite(450,150,10,10);
gift12.addImage(vgiftimg);
gift12.scale = 0.15;

gift6 = createSprite(550,150,10,10);
gift6.addImage(gift1img);
gift6.scale = 0.15;

gift7 = createSprite(650,150,10,10);
gift7.addImage(gift1img);
gift7.scale = 0.15;

gift8 = createSprite(50,230,10,10);
gift8.addImage(gift1img);
gift8.scale = 0.15;

gift16 = createSprite(150,230,10,10);
gift16.addImage(jingiftimg);
gift16.scale = 0.15;

gift10 = createSprite(250,230,10,10);
gift10.addImage(gift1img);
gift10.scale = 0.15;

gift3 = createSprite(350,230,10,10);
gift3.addImage(gift1img);
gift3.scale = 0.15;

gift5 = createSprite(450,230,10,10);
gift5.addImage(gift1img);
gift5.scale = 0.15;

gift13 = createSprite(550,230,10,10);
gift13.addImage(rmgiftimg);
gift13.scale = 0.15;

gift14 = createSprite(650,312,10,10);
gift14.addImage(sugagiftimg);
gift14.scale = 0.15;

gift15 = createSprite(70,315,10,10);
gift15.addImage(hobigiftimg);
gift15.scale = 0.15;

gift9 = createSprite(150,310,10,10);
gift9.addImage(gift1img);
gift9.scale = 0.15;

gift17 = createSprite(250,310,10,10);
gift17.addImage(gift1img);
gift17.scale = 0.15;

gift18 = createSprite(350,310,10,10);
gift18.addImage(gift1img);
gift18.scale = 0.15;

gift19 = createSprite(450,310,10,10);
gift19.addImage(gift1img);
gift19.scale = 0.15;

gift20 = createSprite(550,310,10,10);
gift20.addImage(gift1img);
gift20.scale = 0.15;

gift21 = createSprite(650,230,10,10);
gift21.addImage(gift1img);
gift21.scale = 0.15;


}

function draw(){
  background("yellow");

  textSize(25);
  fill("purple");
  text("score:"+score,50,50);

  textSize(25);
  fill("purple");
  text("Use Left & Right Arrow Key to move paddle",50,80);

   if(ball.isTouching(gift9)){
    gift9.remove();
    ball.velocityY = -6;
    ball.velocityX = +6;
    score = score+5;
  }

  if(ball.isTouching(gift1)){
    gift1.remove();
    ball.velocityY = -6;
    ball.velocityX = +6;
    score = score+10;
  }
  if(ball.isTouching(gift2)){
    gift2.remove();
    ball.velocityY = -6;
    ball.velocityX = +6;
    score = score+5;
  }
  if(ball.isTouching(gift3)){
    gift3.remove();
    ball.velocityY = -6;
    ball.velocityX = +6;
    score = score+5;
  }
  if(ball.isTouching(gift4)){
    gift4.remove();
    ball.velocityY = -6;
    ball.velocityX = +6;
    score = score+5;
  }
  if(ball.isTouching(gift5)){
    gift5.remove();
    ball.velocityY = -6;
    ball.velocityX = +6;
    score = score+5;
  }
  if(ball.isTouching(gift6)){
    gift6.remove();
    ball.velocityY = -6;
    ball.velocityX = +6;
    score = score+5;
  }
  if(ball.isTouching(gift7)){
    gift7.remove();
    ball.velocityY = -6;
    ball.velocityX = +6;
    score = score+5;
  }
  if(ball.isTouching(gift8)){
    gift8.remove();
    ball.velocityY = -6;
    ball.velocityX = +6;
    score = score+5;
  }
  if(ball.isTouching(gift10)){
    gift10.remove();
    ball.velocityY = -6;
    ball.velocityX = +6;
    score = score+5;
  }
  if(ball.isTouching(gift11)){
    gift11.remove();
    ball.velocityY = -6;
    ball.velocityX = +6;
    score = score+10;
  }
  if(ball.isTouching(gift12)){
    gift12.remove();
    ball.velocityY = -6;
    ball.velocityX = +6;
    score = score+10;
  }
  if(ball.isTouching(gift13)){
    gift13.remove();
    ball.velocityY = -6;
    ball.velocityX = +6;
    score = score+10;
  }
  if(ball.isTouching(gift14)){
    gift14.remove();
    ball.velocityY = -6;
    ball.velocityX = +6;
    score = score+10;
  }
  if(ball.isTouching(gift15)){
    gift15.remove();
    ball.velocityY = -6;
    ball.velocityX = +6;
    score = score+10;
  }
  if(ball.isTouching(gift16)){
    gift16.remove();
    ball.velocityY = -6;
    ball.velocityX = +6;
    score = score+10;
  }
  if(ball.isTouching(gift17)){
    gift17.remove();
    ball.velocityY = -6;
    ball.velocityX = +6;
    score = score+5;
  }
  if(ball.isTouching(gift18)){
    gift18.remove();
    ball.velocityY = -6;
    ball.velocityX = +6;
    score = score+5;
  }
  if(ball.isTouching(gift19)){
    gift19.remove();
    ball.velocityY = -6;
    ball.velocityX = +6;
    score = score+5;
  }
  if(ball.isTouching(gift20)){
    gift20.remove();
    ball.velocityY = -6;
    ball.velocityX = +6;
    score = score+5;
  }
  if(ball.isTouching(gift21)){
    gift21.remove();
    ball.velocityY = -6;
    ball.velocityX = +6;
    score = score+5;
  }
  

  if(score>=140){
    ball.visible = false;
    paddle.visible = false;
    thankyou.visible = true;
    
  }
  
  
gamePlay();

  drawSprites();
}


 
 function gamePlay(){
  
  if(keyDown(RIGHT_ARROW)){
    paddle.x = paddle.x+10;
  }

  if(keyDown(LEFT_ARROW)){
    paddle.x = paddle.x-10;
  } 
   
   ball.bounceOff(wall1);
   ball.bounceOff(wall2);
   ball.bounceOff(wall3);
   paddle.bounceOff(wall1);
   paddle.bounceOff(wall2);
   ball.bounceOff(paddle);
   
 }

 