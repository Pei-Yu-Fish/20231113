
var soundl
function preload() {
  soundl=loadSound("alex-productions-louder.mp3")
} //載入音樂


function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#48304D");
  analyzer=new p5.Amplitude();
  analyzer.setInput(soundl)
}

var x=100; //宣告一個畫方框的x軸變數(var宣告變數為一格全域變數)
var y=100; //宣告一個畫方框的y軸變數(var宣告變數為一格全域變數)
var r_b=100;
var w=70; //宣告一個畫方框的寬度變數(var宣告變數為一格全域變數)
var r_s=20;

function draw() {

  noFill()
  rectMode(CENTER)
  strokeWeight(2)
  background("#48304D");

if(soundl.isPlaying()){ //有播放時
  var fc=map(analyzer.getLevel(),0,1,50,300)
  var fs=map(analyzer.getLevel(),0,1,20,50)
  var fe=map(analyzer.getLevel(),0,1,10,60)
  var fes=map(analyzer.getLevel(),0,1,0,50)
}else{ //沒播放時
  var fc =map(mouseX,0,width,50,300)
  var fs =map(mouseX,0,width,20,30)
  var fe =map(mouseX,0,width,10,25)
  var fes =map(mouseX,0,width,5,50)
}
for(var y=50;y<height;y=y+r_b){
  for(var x=50;x<width;x=x+r_b){
    stroke("#FBCAEF")
    ellipse(x,y,fc)
    
    noStroke()
    fill("#FFFECB")
    ellipse(x-18,y-8,fes-15)
    fill("#ADFC92")
    ellipse(x+18,y-8,fe-3)
    
    stroke("#FF2E00")
    noFill()
    ellipse(x-18,y-8,r_s+5)
    stroke("#FF2E00")
    ellipse(x+18,y-8,fe+5)
    stroke("#5448C8")
    rect(x,y+20,fs)
    stroke("#E637BF")
    rect(x,y,w)
   }
  }

  noStroke()
  fill("#FBFF12")
  textSize(fc-5)
  text("412730284 王沛瑜",width/2/2,height/2) 

}



function mousePressed(){
  if(soundl.isPlaying()){
    soundl.stop();
   }else{
   soundl.play();
 }
}
