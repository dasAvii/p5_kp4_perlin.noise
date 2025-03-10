let t;
let i;
let noisePosX;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  t = 0;
  noisePosX = 0;
  i = 0;
}

function draw() {
   noFill(); 
  stroke(0,20);
  
  let a1 = width * noise(i + 15);
  let a2 = width * noise(i + 25);
  let a3 = width * noise(i + 35);
  let a4 = width * noise(i + 45);
  let b1 = height * noise(i + 55);
  let b2 = height * noise(i + 65);
  let b3 = height * noise(i + 75);
  let b4 = height * noise(i + 85);

  bezier(a1, b1, a2, b2, a3, b3, a4, b4);
  i += 0.1;
  noisePosX = noisePosX + 0.1;
  myHue = noise(noisePosX) * 500;
  
  stroke(myHue,100, 100, 80);


  let x1 = width * noise(t + 15);
  let x2 = width * noise(t + 25);
  let x3 = width * noise(t + 35);
  let x4 = width * noise(t + 45);
  let y1 = height * noise(t + 55);
  let y2 = height * noise(t + 65);
  let y3 = height * noise(t + 75);
  let y4 = height * noise(t + 85);

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  
  t += 0.001;
  
}