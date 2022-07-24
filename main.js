objectdetector="";
img="";
object=[];
status="";
function preload(){
  img=loadImage("bottle1.jpg");
}
function setup(){
  canvas=createCanvas(640,420);
  canvas.center();
  objectdetector=ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML="Status:detecting object";
}
function modelLoaded(){
  console.log("model is loaded");
  status=true;
  objectdetector.detect(img,gotResults);
}
function gotResults(error,results){
  if (error){
      console.log(error);
  }
console.log(results);
object=results;
}
function draw(){
  image(img,0,0,640,420);
if (status != ""){
  for (i=0 ; i<object.length ; i++){
    fill("black");
  confidence=floor(0.8624680042266846*100);
  text("vase"+" "+confidence+"%",345.3575372695923+15,435.53459644317627+15);
  noFill();
  stroke("black");
  rect(345.3575372695923,435.53459644317627,225.77762603759766,659.220814704895);
  document.getElementById("status").innerHTML="Status:object detected";
  }
}
}