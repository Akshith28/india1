var canvas;

var form,form1,form2;

var indiabg;

function preload(){
  indiabg=loadImage("india.jpg");
}


function setup(){
  canvas = createCanvas(windowWidth/2+500, windowHeight-30);
  form = new Form();
  form.display();

  var text = select('#text');
  text.position(windowWidth/2-400,40);


}


function draw(){
  if(indiabg) {
    background(indiabg);
  }
  
  
}
