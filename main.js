function setup(){
  canvas=createCanvas(640,480);
  canvas.position(150,150);
  video=createCapture(VIDEO);
  video.hide();
}
function draw(){
  image(video, 230, 150, 220, 200);
  fill(255,0,0);
  stroke(255,0,0)
  circle(50,430,80);
  circle(50,50,80);
  circle(570,50,80);
  circle(570,430,80);

fill(0,128,0);
stroke(0,128,0);
rect(85,40,450,10);

rect(85,430, 450,10);
rect(50,20, 10,440);
rect(559, 20, 10,440);
}