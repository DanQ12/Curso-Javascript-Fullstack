import Producto from "./producto"

const producto1 = new Producto("Notebook", 1200, "Electronica");
const producto2 = new Producto("sILLA GAMER", 250, "Muebles");
const producto3 = new Producto("Auriculares", 100, "Accesorios");

console.log(producto1.detalle())
console.log(producto2.detalle())
console.log(producto3.detalle())