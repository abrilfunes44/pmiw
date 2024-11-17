let objjuego ;
let fondo, inicio;
let contador = 0;
let pantallas = [];
let estado;
let fuente;


function preload() {
  
  fuente=loadFont("/assets/mifuente.ttf")
  pantallas[0] = loadImage( "/assets/1.jpg");
  pantallas[1] = loadImage( "/assets/2.jpg");
  pantallas[2] = loadImage( "/assets/3.jpg");
  pantallas[3] = loadImage( "/assets/4.jpg");
  pantallas[4] = loadImage( "/assets/5.jpg");
}

function setup() {
  createCanvas(640, 480);
  objjuego = new juego(1);
  estado = "inicio";
  textFont(fuente);
}


function draw() {
  background(200);
  print(estado);
  if (estado === "inicio") {
    pantallaInicio();
    objjuego = new juego(1);
    contador = 0;
  } else if (estado === "jugando") {
    pantallaJuego();
  } else if (estado === "perdio") {
    pantallaPerdiste()
  }
}

function keyPressed() {
  objjuego.teclapresionada(keyCode);
  if (keyCode === ENTER && estado === "inicio") {
    estado = "jugando";
  }
  if (key === "r") {
    estado = "inicio";
  }
}
