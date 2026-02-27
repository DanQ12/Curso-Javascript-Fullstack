//Ejercicio 2
const Persona = function(nombre, edad) {
this.nombre = nombre;
this.edad = edad;
};

Persona.prototype.saludar = function() {
return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años`
};

const estudiantes = [
new Persona("Juan", 25),
new Persona("Ana", 22),
new Persona("Carlos", 28)
];

estudiantes.forEach(e => {
    console.log(`${e.saludar()}`)
})

const sumar = (a, b)=> {
return a + b;
}

const numeros = [1, 2, 3, 4, 5];

const cuadrados = numeros.map((num)=> {
return num * num;
});

console.log("Números elevados al cuadrado:", cuadrados);

function filtrarPares(array) {
return array.filter((num)=> {
return num % 2 === 0;
});
}

console.log("Números pares:", filtrarPares(numeros));

setTimeout(function() {
console.log("Esto se ejecuta después de 2 segundos");
}, 2000);

//ejercicio 3

class Empleado{
    constructor(nombre, puesto, salario){
        this.nombre = nombre;
        this.puesto = puesto;
        this.salario = salario;
    }

    obtenerInfo(){
        return `Empleado: ${this.nombre}, Puesto: ${this.puesto}, Salario: $${this.salario}`
    }
};

const empleados = [
new Empleado("Laura", "Desarrolladora", 45000),
new Empleado("Pedro", "Diseñador", 40000),
new Empleado("Marta", "Gerente", 60000)
];

empleados.forEach(e => {
    console.log(e.obtenerInfo());
})

function calcularTotalSalarios(empleados) {
    let total = 0;
    for (var i = 0; i < empleados.length; i++) {
        total += empleados[i].salario;
    }
return total;
}

console.log("Total de salarios:", calcularTotalSalarios(empleados));

function filtrarAltosSalarios(empleados, limite) {
    return empleados.filter(function(emp) {
        return emp.salario > limite;
    });
}

console.log("Empleados con salario mayor a 45k:",
filtrarAltosSalarios(empleados, 45000));

//ejercicio 4

class Producto {
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    obtenerInfo(){
        return `Producto: ${this.nombre} - Precio: $${this.precio} - Stock: ${this.stock}`
    };
};



const productos = [
    new Producto("Laptop", 1200, 5),
    new Producto("Mouse", 20, 50),
    new Producto("Teclado", 45, 30)
];

productos.forEach(p=>{
    console.log(p.obtenerInfo());
    }
)

function calcularTotalInventario(productos) {
    let total = 0;
    for (var i = 0; i < productos.length; i++) {
        total += productos[i].precio * productos[i].stock;
    }
    return total;
}

console.log("Valor total del inventario:", calcularTotalInventario(productos));

function filtrarProductosCaros(productos, limite) {
    return productos.filter(function(prod) {
        return prod.precio > limite;
    });
}

console.log("Productos con precio mayor a 50:",
filtrarProductosCaros(productos,50));

//ejercicio 5

const objetoEjemplo = {
    nombre: "Daniel",
    apellido: "Quezada",
    edad: 30
}

const {nombre, apellido, edad} = objetoEjemplo;
const identidad = {...objetoEjemplo, colorFavorito: "azul"}

const user1={nombre: "Valentina"}
const user2={nombre: "Paulina"}

const obtenerNombres =(...usuarios)=> usuarios.map(u => u.nombre)

console.log(obtenerNombres(user1, user2))

//ejercicio 7

function prepararPedido(pedido){
    return new Promise((resolve, reject)=>{
        const tiempo = Math.random() * 5000 + 2000
        console.log(`Preparando pedido: ${pedido}...`);
        setTimeout(() =>{
            if(Math.random() > 0.2){
                resolve(`Pedido listo ${pedido} en ${Math.floor(tiempo/1000)} segundos`)
            }
            else{
                reject(`Error preparando el pedido ${pedido}`)
            }
        }, tiempo)
    })
}

prepararPedido("Pizza").then(console.log).catch(console.error);


async function realizarPedido(pedido){
    try{
        const resultado = await prepararPedido(pedido);
        console.log(resultado)
    }
    catch(error){
        console.error(error);
    }
}

realizarPedido("Hamburguesa")
realizarPedido("Ensalada")