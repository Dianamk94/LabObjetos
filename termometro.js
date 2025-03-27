//Termometro

function Termometro() {this.temperatura = 0;

    this.actualizar = function(grados) {
        this.temperatura = grados;
        
        if (grados > 30) {
            console.log("¡Hace calor!");
        } else if (grados < 10) {
            console.log("¡Hace frío!");
        } else {
            console.log("Temperatura agradable");
        }
    };
}
    
  let termometro1 = new Termometro();
  
  termometro1.actualizar(5)
  termometro1.actualizar(20)
  termometro1.actualizar(35)