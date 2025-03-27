let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  background('black');
  let distanciaX;
    let distanciaY;
    let distancia;
    distanciaX = mouseX - x;
    distanciaY = mouseY - y;
   // distancia = sqrt(distanciaX*distanciaX + distanciaX*distanciaX);
    distancia = dist(mouseX, mouseY, x, y);
    circle(mouseX,mouseY,distancia);
   // circle(x, y, 10);
   // console.log(distanciaX, distanciaY);

 if(distancia > 50){
    fill('blue')
  }
 if(distancia < 50){
    fill('red')
  }
  if (distancia < 2) {
    text("Encontrei!", 200, 200);
    noLoop();
  }
}
