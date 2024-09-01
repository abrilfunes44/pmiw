  let cant;
  let tam;
  let negro;
  let azul;

function preload () {
  ref = loadImage('./assets/ref.jpg')
}


function setup() {
  createCanvas(800, 400)
  cant = 6;
  tam = width/cant;
  negro = color(0);
  azul = color(37, 41, 183);
}

function draw() {
  image(ref, 0, 0, 400, 400);
  cuadrados();
  circulos();
  esquinaDerecha(mouseX, mouseY);
  if (keyIsPressed == true) {
  negro = color(0);
  azul = color(37, 41, 183);
}
}
