function Empleados(nombre, edad, cargo){
    this.nombre = nombre;
    this.edad = edad;
    this.cargo = cargo;
}

Empleados.prototype.mostrarInfo = function(){
    return console.log(`Empleado: ${this.nombre}, Edad: ${this.edad}, Cargo: ${this.cargo}`);
}

const empleado1 = new Empleados("Daniel", 30, "Analista");
const empleado2 = new Empleados("Paulinda", 34, "Psicologa");

empleado1.mostrarInfo();
empleado2.mostrarInfo();

JSON.stringify([empleado1,empleado2],null,2);

//ejercicio 2

productos =[
    {
        nombre: "bebida",
        precio: 1500,
        stock: 10,
        aplicarDescuento: function(porcentaje){
            return precio * ((100 - porcentaje)/100)
        }
    },
    {
        nombre: "jugo",
        precio: 1200,
        stock: 8,
        aplicarDescuento: function(porcentaje){
            return precio * ((100 - porcentaje)/100)
        }
    },
    {
        nombre: "doritos",
        precio: 1600,
        stock: 5,
        aplicarDescuento: function(porcentaje){
            return precio * ((100 - porcentaje)/100)
        }
    }
]

const listaProductos = JSON.stringify(productos)