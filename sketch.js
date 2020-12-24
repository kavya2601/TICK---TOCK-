var hr , min , sec;


function setup() {
  createCanvas(800,450);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}


function draw() {
  background(0);
  
  fill(255);
  textSize(24);
  textStyle("bold");
  text("Tick - Tock time is flying away TICK TOCK TICK TOCK", 100 , 400);
  
  
  translate(200 , 200)
  rotate(-90);
  //calculating the time using predefined func from p5.js
  hr = hour();
  min = minute();
  sec = second(); 
  
  strokeWeight(8);
  stroke("red");

  var end = map(sec,0,60,0,360);
  arc(0,0,300,300,0,end);
  
  stroke("green");
  var end2 = map(min,0,60,0,360);
  arc(0,0,280,280,0,end2);
  
  stroke("blue");
  var end3 = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,end3);
  
  push();
  rotate(end);
  stroke("blue");
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(end2);
  stroke("red");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(end3);
  stroke("green");
  line(0,0,50,0);
  pop();
  
  stroke("Black");
  point (0,0);



  drawSprites();

}