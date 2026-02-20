class Animal {
    constructor(nombre, sonido){
        this.nombre = nombre;
        this.sonido = sonido;
    }

    hacerSonido(){
        console.log(`${this.nombre} hace ${this.sonido}`)
    }
}

class Perro extends Animal {
    constructor(nombre){
        super(nombre, "guau")
    }

    buscar(objeto){
        console.log(`${this.nombre} busca el ${objeto}`)
    }
}

const miPerro = new Perro("WiwiNelson");

miPerro.hacerSonido();
miPerro.buscar("pelota de futbol");

//forma previa a ES6

function Animal (nombre, sonido){
    this.nombre = nombre;
    this.sonido = sonido
}

Animal.prototype.hacerSonido() = function(){
    console.log(`${this.nombre} hace ${this.sonido}`)
}

