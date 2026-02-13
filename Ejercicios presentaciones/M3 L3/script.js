//carrito de compras
const carrito = ["arroz", "queso", "leche","jugo"]

function mostrarCarrito(){
    for(i=0;i<carrito.length;i++){
        console.log(carrito[i])
    }
    return
}

//filtrar numeros pares
const numeros = [1,2,3,4,5,6,7,8];

function filtrarPares(){
    let pares = numeros.filter(a => a%2 === 0)
    return console.log(pares)
}

//calculadora While

function calcularWhile(){
    let operacion
    while(operacion !== "salir"){
        let n1 = prompt("Ingrese primer numero")
        let n2 = prompt("Ingrese segundo numero")
        operacion = prompt("Ingrese operacion")

        if(["+","-","*","/"].includes(operacion)){
            let evaluacion = `${n1} ${operacion} ${n2}`
            console.log(`${evaluacion} = ${eval(evaluacion)}`)
        }
    }

    return console.log("la calculadora se detuvo")
}

//sumar contenidos de un arreglo

const numeros2 = [13, 15, 21, 26];

function sumarArreglo(){
    let total = 0;
    for(i=0; i<numeros2.length; i++){
        total+=numeros2[i];
    }
    return total;
}