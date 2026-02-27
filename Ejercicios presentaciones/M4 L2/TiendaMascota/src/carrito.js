import { productos } from "./productos";

let carrito =[];

export function agregarAlCarrito(producto, cantidad = 1){
    const item ={
        producto: producto,
        cantidad: cantidad,
        subttotal: productos.precio * cantidad
    };
    carrito.push(item);
    console.log(`✓ ${producto.nombre} agregadp al Carrito(x${cantidad})`)
}

export function verCarrito(){
    console.log("===CARRITO DE COMPRAS===")
    if(carrito.length === 0){
        console.log("El carrito esta vacio")
        return
    }

    carrito.forEach((item, index) =>{
        console.log(`${index + 1}. ${item.producto.nombre} x ${item.cantidad} = $${item.subtotal}`)
    })

    console.log(`TOTAL: $${calcularTotal()}`)
}

export function calcularTotal(){
    return carrito.reduce((total, item) => total + item.subtotal, 0)
}

export function vaciarCarrito(){
    carrito = []
    console.log("Carrito vaciado")
}

export {carrito}