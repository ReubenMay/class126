song="";

function setup(){
  canvas=  createCanvas(600,450);
  canvas.center();
  video=  createCapture(VIDEO);
  video.hide()
}
function preload(){
    song=loadSound("music.mp3");
}
function draw(){
    image(video,0,0,600,450);
}
function play(){
    song.play();
}