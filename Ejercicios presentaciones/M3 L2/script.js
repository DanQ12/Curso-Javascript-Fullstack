//Perfil interactivo
function perfilInteractivo(){
    let name = prompt("Ingrese su nombre");
    let edad = prompt("Ingresa tu edad");
    let ciudad = prompt("Ingresa tu ciudad");
    let estudiante = prompt("¿Eres estudainte?");

    return console.log(`Hola ${name}, tienes ${edad} años, eres de ${ciudad} y ${estudiante} eres estudiante`)
}


//verificacion edad de votacion

function edadVotacion(edad){

    if(edad < 17){
        return console.log("Aun no puede votar")
    }
    else if(edad === 17){
        return console.log("Esta cerca de poder votar")
    }
    else{
        return console.log("Puede votar")
    }
}

//simulacion login
const usuario = "admin";
const contraseña = "1234";

function ingresoCredenciales(user, pass){
    if(user === usuario && pass === contraseña){
        console.log("Acceso concedido");
    }
    else{
        console.log("Acceso denegado");
    }
}

//medir temperatura

function medirTemperatura(grados){
    if(grados < 0){
        return console.log("Hace mucho frio")
    }
    else if(grados >= 0 && grados <= 20){
        return console.log("Hace frio")
    }
    else if(grados > 20 && grados <= 30){
        return console.log("Clima agradable")
    }
    else{
        return console.log("Hace calor")
    }
}

//calculadora aprobacion

function promedioMateria(n1, n2){
    if((n1+n2)/2 >= 6){
        return console.log("¡Aprobaste la materia!")
    }
    else{
        return console.log("Debes rendir examen de recuperacion")
    }
}

//simulador tienda online

let carrito = 0;
let stock = 20;


function añadirCarrito(){
    let precio = prompt("ingrese precio del producto")
    let cantidad= prompt("ingrese cantidad del producto")
    let total;

    //revisa si hay suficiente stock
    if(cantidad <= stock){
        stock-=cantidad
    }
    else{
        return console.log("No tenemos suficiente Stock")
    }

    //añade el costo al carrito
    carrito += precio*cantidad;

    //aplica el descuento de se necesario
    if(carrito >= 100){
        total = 0.9 * carrito
    }
    else{
        total = carrito
    }

    console.log("resumen de la compra")
    console.log(`precio unitario: ${precio}`)
    console.log(`unidades compradas: ${cantidad}`)
    console.log(`el total de su compra es $${total.toFixed(2)}`);
    console.log(`stock restante: ${stock}`)
}

//Sistema de control de acceso a un club nocturno

function ingresoClub(){
    let edad = prompt("ingresa tu edad");
    let invitacion = prompt("¿tienes invitacion?")
    let pago = prompt("¿pagaste la entrada?")

    if(edad >17 && (invitacion==="true" || pago==="true")){
        return console.log("puedes entrar")
    }
    else{
        console.log("no puedes entrar")
    }
}

//calculadora de descuentos de una tienda

function descuentosTienda(){
    let totalCompra = prompt("ingrese total de su compra");
    let montoFinal;

    if(totalCompra<100){
        montoFinal=totalCompra;
    }
    else if(totalCompra>=100 && totalCompra <200){
        montoFinal = totalCompra * 0.9;
    }
    else{
        montoFinal = totalCompra * 0.85;
    }

    return console.log(`El total de tu compra es ${montoFinal}`)
}