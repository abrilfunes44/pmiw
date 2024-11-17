class juego {
  constructor() {
    this.crearpersonajep();
    this.crearautoenemigos ();
  }


  dibujar() {
    this.personajep.dibujar();
    this.autoenemigos.dibujar();
    this.personajep.hachocado(this.autoenemigos);
  }

  crearpersonajep() {
    this.personajep = new personajep();
  }

  crearautoenemigos() {
    this.autoenemigos = new autoenemigos();
  }

  reiniciarautoenemigos() {
    this.autoenemigos.moverhaciaabajo();
    this.autoenemigos.reiniciar();
  }

  teclapresionada(keyCode) {
    this.personajep.teclapresionada(keyCode);
  }
}
