let iter = 510;//iterations
let angle = 137.5077; //golden angle
let circleSize = 3;
let petalSize = 1;
let w = screen.width - 200;
let h = 300;
let ang1 = 60
let ang2 = 40
let ang3 = 20
let r = 1;
let rPetals = 1;
let stopR = 1;

function setup() {
  var ancho=$('#mainDiv').width();
  w = ancho;
  cnv = createCanvas(w, h);
  angleMode(DEGREES);
  //makeButton();
}

function draw() {
  background(0, 189, 255);
  cnv.translate(w / 2, h / 2);

  //dibujamos los pétalos
  petals();

  //dibujamos el circulo central del girasol
  stroke(255);
  fill( 77, 49, 6 );
  ellipse(0, 0, 105, 105);

  //dibujo fractal
  rotation = angle;
  distance = 1;
  delta = 0.1;
  ellipse(0, 0, circleSize, circleSize);
  rotate(-r);
  for (let i = 0; i <= iter; i++) {
    createFractal(rotation, distance);
    rotation += angle;
    distance += delta;
    fill(255, 227, 117);
  }

  //leafs();
  angleMode(DEGREES);
  //noLoop();
  //aumentamos la rotacion
  r = r + 1.5;
}

function createFractal(_rotation, _distance) {
  push();
  rotate(_rotation);
  ellipse(_distance, 0, circleSize, circleSize);
  pop();
}

function petals() {
  push();
  rotate(rPetals);
  if (petalSize <= 150) {
    rPetals++;
  } else {
    if (stopR > 0) {
      stopR = stopR - 0.005;
      rPetals = rPetals + stopR;
    }
  }
  stroke(255);
  fill( 255, 220, 1 );

  //dibujamos los pétalos cada 60
  for (let i = 0; i < 60; i++){
    temp1 = ((360 / ang1) * i) % (360 / ang3);
    temp2 = ((360 / ang1) * i) % (360 / ang2);
    if (temp1 != 0 && temp2 != 0) {
      //ellipse(60, 0, 150, 20);
      if (petalSize <= 150) {
        ellipse(55, 0, petalSize, 20);
      } else {
        ellipse(55, 0, 150, 20);
      }
    }
    rotate(360 / ang1);
  }
  
  //dibujamos los pétalos cada 40
  for (let i = 0; i < 40; i++){
    temp1 = ((360 / ang2) * i) % (360 / ang3);
    if (temp1 != 0) {
      //ellipse(60, 0, 130, 20);
      if (petalSize <= 130) {
        ellipse(55, 0, petalSize, 20);
      } else {
        ellipse(55, 0, 130, 20);
      }
    }
    rotate(360 / ang2);
  }
  
  //dibujamos los pétalos cada 20
  for (let i = 0; i < 20; i++){
    if (petalSize <= 150) {
      ellipse(55, 0, petalSize, 20);
    } else {
      ellipse(55, 0, 150, 20);
    }
    stroke(255)
    if (petalSize <= 100) {
      line(0, 0, petalSize, 0);
    } else {
      line(0, 0, 100, 0);
    }
    rotate(360 / ang3);
  }
  pop();
  petalSize = petalSize + 1.9;
}

function leafs() {
  angleMode(RADIANS);
  stroke(50,140,48);
  strokeWeight(2);
  arc(50, 60, 40, 40, 0, PI, OPEN);
  noFill();
  arc(65, 60, 40, 80, PI/1.5, 3*PI/2, OPEN);//leaf vein
  arc(65,60,70,80,PI,3*PI/2,OPEN);
  arc(70,20,10,80,PI/2,PI,OPEN);
  fill(50,140,48);
  strokeWeight(1);
  triangle(46, 75, 69, 62, 44, 68);
  triangle(44, 68, 32, 60, 46, 75);
  triangle(45, 60, 65, 44, 45, 51);
  triangle(45, 60, 33, 44, 45, 51);
  triangle(49,36,43,30,47,40);
  triangle(49,36,65,31,47,40);
  noFill();
}

//----------------------------------------------------------------

function resetA() {
  angle = 137.5;
  circleSize = 3;
  iter = 500;
}
function pauseD() {
  freeze = !freeze;
  if (freeze == true) noLoop();
  else loop();
}
function growC() {
  circleSize = circleSize + 2;
}
function shrinkC() {
  circleSize = circleSize - 2;
  print(circleSize);
  if (circleSize <= 3){circleSize = 3;}
}
function incI (){
  iter = iter + 500;
  if (iter >= 12000){
    iter = 12000;
  }
}
function incD (){
  iter = iter - 500;
  if (iter <= 500){
    iter = 500;
  }
}

function makeButton(){
  button = createButton('Reset');
  button.position(19, 19);
  button.mousePressed(resetA);
  button2 = createButton('Play/Pause');
  button2.position(70, 19);
  button2.mousePressed(pauseD);
  growS = createButton('Grow');
  growS.position(145, 19);
  growS.mousePressed(growC);
  shrinkS = createButton('Shrink');
  shrinkS.position(193, 19);
  shrinkS.mousePressed(shrinkC);
  iterI = createButton('More Iterations');
  iterI.position(250, 19);
  iterI.mousePressed(incI);
  iterD = createButton('Less Iterations');
  iterD.position(350, 19);
  iterD.mousePressed(incD); 
  aSlider = createSlider(-0.1, 0.1, 0.0001, 0.00005);
  aSlider.position(20, 40);
  aSlider.size(80,20);
  valueDisp1 = createP()
  valueDisp1.position(350, 29);
  valueDisp1.html("angle = " +angle)
  valueDisp2 = createP()
  valueDisp2.position(29, 40);
  valueDisp2.html("speed= " + speed)
  aSlider.input(sliderChange);
  function sliderChange(){
    speed = aSlider.value();
    valueDisp2.html('speed =  ' + aSlider.value())
  }
}