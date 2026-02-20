console.log("*".repeat(50));
console.log("1) Creaciond e objetos en JS");
console.log("*".repeat(50));

//objetos literales

console.log("\n 1. objetos literales")
console.log("*".repeat(50));

const perro1 = {
    nombre: Pixixo,
    edad: 8,
    raza: "poodle",
    ladrar: function(){
        return console.log(`${this.nombre} dice ¡guagau guagau!`)
    }
}

console.log("Objeto literal creado: ", perro1);
console.log(perro1.ladrar())

//funciones constructoras

console.log("\n 1. funciones constructoras")
console.log("*".repeat(50));

function Gato(nombre, edad, color){
    this.nombre = nombre;
    this.edad = edad;
    this.color = color;

    //metodo constructor
    this.maullar = function(){
        return `${this.nombre} dice: Miau`
    }
}

//metodo prototype

Gato.prototype.dormir = function(){
    return `${this.nombre} esta durmiendo`;
}

const gato1 = new Gato("Rafa", 10, "Tres leches");
const gato2 = new Gato("Jack", 15, "Naranja");

console.log("Gato 1: ", gato1);
console.log(gato1.maullar());
console.log(gato1.dormir());
console.log("Gato 2: ", gato2);

//clases ES6

console.log("\n 3. clases ES6")
console.log("*".repeat(50));

class Pajaro{
    constructor(nombre, especie, puedeVolar=true){
        this.nombre = nombre;
        this.especie = especie;
        this.puedeVolar = puedeVolar;
    }

    cantar(){
        return `${this.nombre} esta piando`
    }

    volar(){
        if(this.puedeVolar){
            return `${this.nombre} esta volando muy alto`
        }

        else{
            return `${this.nombre} no puede volar (es un ${this.especie})`
        }
    }
}

const pajaro1 = new Pajaro("Piolin","Canario");
const pajaro2 = new Pajaro("TaeKwanDodo","Dodo", false);

console.log("Pajaro 1: ", pajaro1)
console.log(pajaro1.cantar())
console.log(pajaro1.volar())
console.log("Pajaro 2: ", pajaro2)
console.log(pajaro2.cantar());
console.log(pajaro2.volar())

//Encapsulamiento

console.log("\n 1. Encapsulamiento")
console.log("*".repeat(50));
console.log("Ocultar detalles internos y exponer solo lo necesario");

class CuentaBancaria {
    #saldo;
    #numeroCuenta;

    constructor(titular, saldoInicial = 0){
        this.titular = titular;
        this.#saldo = saldoInicial;
        this.#numeroCuenta = Math.floor(Math.random() * 100000)
    }

    depositar(cantidad){
        if(cantidad>0){
            this.#saldo += cantidad;
            return `Deposito exitoso, nuevo saldo: ${this.#saldo}`
        }
        return "Deposito invalido"
    }

    retirar(cantidad){
        if(cantidad > 0 && cantidad <= this.#saldo){
            this.#saldo -= cantidad
            return `Retiro exitoso, nuevo saldo: ${this.#saldo}`
        }
        return "Retiro no valido"
    }

    obtenerSaldo(){
        return `${this.#saldo}`;
    }

    obtenerNumeroCuenta(){
        return `****  ${String(this.#numeroCuenta).slice(-4)}`
    }
}

const miCuenta = new CuentaBancaria("Daniel Quezada", 1000);

console.log("Cuenta creada: ",miCuenta.titular);
console.log("Numero de cuenta: ", miCuenta.obtenerNumeroCuenta());
console.log("Saldo inicial: ", miCuenta.obtenerSaldo());
console.log(miCuenta.depositar(8000));
console.log(miCuenta.retirar(1000));
console.log("Saldo final: ", miCuenta.obtenerSaldo());
console.log("\n Intentar acceder a propiedad privada #saldo", miCuenta.saldo);


//Herencia

console.log("\n 2. Herencia")
console.log("*".repeat(50));
console.log("Crea nuevas clases basadas en clases existentes");

class Vehiculo{
    constructor(marca, modelo, año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.encendido = false;
    }

    encender(){
        this.encendido = true;
        return `${this.marca} ${this.modelo} encendido`
    }

    apagar(){
        this.encendido = false;
        return `${this.marca} ${this.modelo} apagado`
    }

    obtenerInformacion(){
        return `${this.marca} ${this.modelo} año ${this.año}`
    }
}

class Auto extends Vehiculo{
    constructor(marca, modelo, año, numPuerta){
        //herencia de la clase padre
        super(marca, modelo,año);
        this.numPuerta = numPuerta;
    }

    tocarBocina(){
        return `${this.marca} ${this.modelo} ¡BEEP, BEEP!`
    }

    obtenerInformacion(){
        return `${super.obtenerInformacion()} - ${this.numPuerta} puertas`
    }
}

class Motocicleta extends Vehiculo{
    constructor(marca, modelo, año, cilindrada){
        super(marca, modelo, año);
        this.cilindrada = cilindrada;
    }

    hacerCaballito(){
        if(this.encendido){
            return `${this.marca} ${this.modelo} : Haciendo caballito`
        }
        return `No se pudo hacer caballito`
    }

    obtenerInformacion(){
        return `${super.obtenerInformacion()} - ${this.cilindrada} cilindrada`
    }
}

const auto = new Auto("Toyota", "Corolla", 2023, 4);
const moto = new Motocicleta("Yamaha", "YZF-R15", 2024, 998);

console.log("Auto:", auto.obtenerInformacion())
console.log(auto.encender())
console.log(auto.tocarBocina())

console.log("Moto: ", moto.obtenerInformacion())
console.log(moto.hacerCaballito())
console.log(moto.encender())
console.log(moto.hacerCaballito());

//Polimorfismo

console.log("\n 3. Polimorfismo")
console.log("*".repeat(50));
console.log("Diferentes clases pueden responder al mismo metodo de forma distinta");

class Forma {
    constructor(nombre){
        this.nombre = nombre;
    }

    calcularArea(){
        return "Debe implementarse en la subclase"
    }

    describir(){
        return `Soy un(a) ${this.nombre}`;
    }
}

class Circulo extends Forma {
    constructor(radio){
        super("circulo")
        this.radio = radio;
    }

    calcularArea(){
        return Math.PI * this.radio ** 2;
    }
}

class Rectangulo extends Forma {
    constructor(base, altura){
        super("rectangulo")
        this.base = base;
        this.altura = altura;
    }

    calcularArea(){
        return this.base * this.altura;
    }
}

class Triangulo extends Forma{
    constructor(base, altura){
        super("triangulo");
        this.base = base;
        this. altura = altura;
    }

    calcularArea(){
        return this.base * this.altura / 2;
    }
}

const formas = [
    new Circulo(5),
    new Rectangulo(4,6),
    new Triangulo(3,8)
];

console.log("Calculando area de las distintas formas: ");

formas.forEach(forma =>{
    console.log(`${forma.describir()}`);
    console.log(`Area: ${forma.calcularArea().toFixed(2)} unidades`)
})


//Abstraccion

console.log("\n 4. Abstraccion")
console.log("*".repeat(50));
console.log("Sistema de Empleados - Simplificar la complejidad mostrando solo lo esencial");

class Empleado{
    constructor(nombre, salarioBase){
        if(this.constructor === Empleado){
            throw new Error("No se puede instanciar una clase abstracta directamente")
        }

        this.nombre = nombre;
        this.salarioBase = salarioBase;
    }

    calcularSalario(){
        throw new Error("El metodo calcularSalario() debe ser implementado")
    }

    obtenerInfo(){
        return `Empleado: ${this.nombre}, Salario: ${this.calcularSalario()}`
    }
}

class EmpleadoTiempoCompleto extends Empleado{
    constructor(nombre, salarioBase, bono){
        super(nombre, salarioBase);
        this.bono = bono
    }

    calcularSalario(){
        return this.salarioBase + this.bono
    }
}

class EmpleadoPorHoras extends Empleado{
    constructor(nombre, tarifaPorHoras, horasTrabajadas){
        super(nombre, 0);
        this.tarifaPorHoras =tarifaPorHoras;
        this.horasTrabajadas = horasTrabajadas;
    }

    calcularSalario(){
        return this.tarifaPorHoras * this.horasTrabajadas;
    }
}

class EmpleadoFreelance  extends Empleado{
    constructor(nombre, proyecto){
        super(nombre, 0);
        this.proyectos = proyecto
    }

    calcularSalario(){
        return this.proyectos.reduce((total,pago) => total + pago,0);
    }
}

try{
    const empleado = new Empleado("Test", 1000);
}catch(error){
    console.log("Error inesperado: ", error.message);
}

const empleados =[
    new EmpleadoTiempoCompleto("Fulano de Tal", 3000, 5000),
    new EmpleadoPorHoras("Megara", 20, 1000),
    new EmpleadoFreelance("Filoptetes", [1500, 2000, 1800])
]

console.log("Nomina de Empleados");
empleados.forEach(empleados =>{
    console.log(empleado.obtenerInfo())
})