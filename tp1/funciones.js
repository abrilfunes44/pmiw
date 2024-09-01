function cuadrados() {
  for (x=0; x<cant; x++) {
    for (y=0; y<cant; y++) {
      if (esPar(x, y)) {
        fill (azul);
      } else {
        fill (negro);
      }
      rect (400+x*tam, y*tam, tam, tam);
    }
  }
}

function circulos() {
  for (x = 0; x< cant; x++) {
    for (y =0; y<cant; y++) {
      if (esPar(x, y)) {
        fill(negro);
      } else {
        fill(azul);
      }
      circle(400+x*tam+tam/2, y*tam+tam/2, tam);
    }
  }
}

function esPar(a, b) {
return ((a+b)%2 == 0);
}

function esquinaDerecha (posx, posy) {
  dis = dist(posx, posy, 600, 200);
  c = map (dis, 0, 280, 0, 255);
  if (posx > 400) {
    azul = color(c, 41, 183);
    negro = color(c);
  }
}
