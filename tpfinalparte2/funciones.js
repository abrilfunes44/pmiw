
function pantallaInicio() {
  image(pantallas[0], 0, 0, width, height)
    textAlign(CENTER);
  text("Presiona ENTER para empezar", (width/2), 400);
}

function pantallaJuego() {
  image(pantallas[1], 0, 0, width, height);
  objjuego.dibujar();
  objjuego.reiniciarautoenemigos();
}

function pantallaPerdiste() {
  image(pantallas[2], 0, 0, width, height);
  text (textAlign(CENTER));
  text('Perdiste! Presiona R para reiniciar', width/2, height/2);
}
