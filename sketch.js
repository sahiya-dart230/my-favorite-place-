function setup() {
  createCanvas(600, 400);
}

function draw() {
  
  //background color(R, G, B);
  background(2, 222, 242);
  
  //(x, y, width, height, radius);
  fill(214, 153, 9);
  strokeWeight(5)
  rect(180, 160, 200, 200, 0);
  

  
  fill(39, 196, 27)
  strokeWeight(4)
  rect(-10, 360, 700, 60,10); 
  
  fill(181, 26, 18)
  rect(200, 260, 70,100 )
  
  
  
 
  rect(300, 170, 70,70,5)
//(x1, y1, x2, y2)
  line(370,210,300,210,)
  line (335,240,340,170)
  fill(10, 1, 1)
  ellipse(220,320,10)
  fill(238, 250, 7)
  ellipse(450,100,100)
  
  no
  drawGrid()
}



function drawGrid() {
  textSize(10);
  stroke(200);
  fill(120);
  for (let x = -width; x < width; x += 40) {
    line(x, -height, x, height);
    text(x, x + 1, 12);
  }
  for (let y = -height; y < height; y += 40) {
    line(-width, y, width, y);
    fill(255, 100, 0);
    text(y, 1, y + 12);
  }
}