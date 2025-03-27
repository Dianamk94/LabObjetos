
function libro (titulo,autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;
    this.prestar = function prestar(){
        if (this.prestado == false){
            console.log(`El libro ${this.titulo} no está prestado`);
        } else{ 
            console.log(`El libro ${this.titulo} está prestado`);
        }    
    }  
    }

    let libro1 = new libro("El principito", "Antoine de Saint")

    console.log(libro1.prestado);
    libro1.prestar();
    console.log(libro1.prestado);
    
    