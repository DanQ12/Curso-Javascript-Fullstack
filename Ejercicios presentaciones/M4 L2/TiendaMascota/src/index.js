import { productos, mostrarProductos, buscarProducto } from "./productos.js";

import { mostrarServicios, agendarServicio } from "./servicios.js";

import { agregarAlCarrito, vaciarCarrito, verCarrito, carrito } from "./carrito.js";

console.log("🐾 BIENVENIDO A LA TIENDA DE MASCOTAS 🐾")
mostrarProductos();
mostrarServicios();

console.log("🐾 SIMULACION DE COMPRA 🐾")

const alimento = buscarProducto("Alimento");
const juguete = buscarProducto("juguetes");

if(alimento) agregarAlCarrito(alimento, 2);
if(juguete) agregarAlCarrito(juguete, 1);

verCarrito()