// 1. Mostrar como se definen con function y como se invocan por su nombre

//definicion
function saludos(nombre){
    console.log(`Hola ${nombre}`)
}

//invocacion
saludos("Daniel");
saludos("Valentina");
saludos("Paulina");

//hoisting

despedida("Daniel")

function despedida(nombre){
    console.log(`Adios ${nombre}`)
}

//2. explicar como pueden ser reutilizadas y la importancia de los parametros.

//reutilizacion de parametros

function aplicarDescuentos(precio, porcentaje){
    return precio - (precio * porcentaje)
}

let precioZapatilla = aplicarDescuentos(100, 20);
let precioEquipoFutbol = aplicarDescuentos(50, 10);
let precioCalcetas = aplicarDescuentos(25, 5);

console.log(precioZapatilla)
console.log(precioEquipoFutbol)
console.log(precioZapatilla)

//3. Mostar como se utliza una funcion anonima dentro de otros metodos, como setTimeout o map, donde no es necesario darle nombre a la funcion se usan como argumentos de otras funciones

setTimeout(function(){
    console.log("han pasado 3 segundos")
}, 3000)

let numeros = [1,2,3,4,5];

let dobles = numeros.map(function(num){
    return num * 2
});

console.log(dobles);

let pares = numeros.filter(function(num){
    return num % 2 === 0 
})

console.log(pares);

//4. Mostrar como la sintaxis de la funcion flecha es mas compacta, sin necesidad de escribir la palbra clave funcion

function sumar (a,b){
    return a+b;
}

const sumarFlecha = (a,b) => {return a+b};
const sumarCorto = (a,b) => a+b;
const doble = x => x*2;

console.log(sumarCorto(2,7))
console.log(doble(7))
console.log(sumar(2,7))

//5. Explicar como se maneja this en las funciones flecha, ya queno tienen su propio context de this, sino que lo heredan del contexto de la funcion en la que estan definidas

const persona ={
    nombre: "Oscar", 
    amigos: ["Luis", "Paulina", "Sebastian"],
    listarAmigosMal : function(){
        this.amigos.forEach(function(amigo){
            console.log(this.nombre + "es amigo de " + amigo); //this.nombre es undefined
        })
    },
    listarAmigosBien: function(){
        this.amigos.forEach((amigo)=> {
            console.log(this.nombre + " es amigo de " + amigo)
        })
    }
}

persona.listarAmigosMal()
persona.listarAmigosBien()

//6. Hacer especial mencion a la sintaxis reducida de las funciones flecha

function cuadrado1 (x){
    return x*x
}

const cuadrado2 = (x) => {
    return x * x
}

const cuadrado3 = (x) => x * x;

const cuadrado4 = x => x * x;

console.log(cuadrado1(5))
console.log(cuadrado2(5))
console.log(cuadrado3(5))
console.log(cuadrado4(5))

let numeros2 = [1,2,3,4,5] ;
let cubos = numeros2.map(x => x * x * x);
console.log(cubos)

let mayoQue3 = numeros2.filter(x => x>3);
console.log(mayoQue3)

let frutas= ["manzanas", "naranjas", "melon"];
frutas.sort((a,b)=>a.length -b.length);
console.log(frutas);

const crearPersona = nombre => ({nombre: nombre, edad: 30});
console.log("Daniel")