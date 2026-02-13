//Math

console.log("abs: ", Math.abs(-10))
console.log("round: ", Math.round(4.6))
console.log("round: ", Math.round(1.2))
console.log("ceil: ", Math.ceil(4.1))
console.log("floor: ", Math.floor(1.9))

let n1 = -7.8;
let n2 = 7.2;

console.log("n1: ", n1, "abs: ", Math.abs(n1), "round: ", Math.round(n1), "ceil: ", Math.ceil(n1), "floor: ", Math.floor(n1))
console.log("n2: ", n2, "abs: ", Math.abs(n2), "round: ", Math.round(n2), "ceil: ", Math.ceil(n2), "floor: ", Math.floor(n2))


console.log("random: ", Math.random())
console.log("pow: ", Math.pow(2,3))
console.log("sqrt: ", Math.sqrt(81))

function randomEntero(min, max){
    return Math.floor(Math.random() * (max-min + 1) + min)
}

console.log(randomEntero(1,10))
console.log(randomEntero(50,60))

function randomDecimal(min,max){
    return Math.random() * (max - min) + min;
}

console.log(randomDecimal(5,6))
console.log(randomDecimal(5,6))

//Strings

let texto = "JavaScript mi nueva relación tóxica pero poderos.";

console.log(texto.indexOf("JavaScript"));
console.log(texto.lastIndexOf("JavaScript"));

let texto2 = "banana";

console.log(texto2.indexOf("a"))
console.log(texto2.lastIndexOf("a"))

console.log(texto.includes("poderosa"))
console.log(texto.startsWith("JavaScript"))
console.log(texto.endsWith("."))

function buscarPalabra(frase, palabra){
    if(frase.toLowerCase().includes(palabra.toLowerCase())){
        console.log(`se encontro ${palabra} en la frase.`)
    }
    else{
        console.log(`no se encontro ${palabra}`)
    }
}

buscarPalabra("Hola Mundo", "mundo")
buscarPalabra("Hola Mundo", "Java")


let nombre = "   dANIEL qUEZADA   "

console.log(nombre.toLocaleUpperCase())
console.log(nombre.toLocaleLowerCase())
console.log(nombre.trim())

let frase = " hola, hola, hola"

console.log(frase.replace("hola", "adios"))
console.log(frase.replaceAll("hola", "adios"))

function limpiarTexto(input){
    return input.trim().replaceAll("  ", " ")
}
console.log(limpiarTexto("         hola          mundo         "))

//regex

function numeros(texto){
    return /^\d+$/.test(texto)
}

console.log(numeros("1234"))
console.log(numeros("12er4"))

texto3 = "rojo; azul, verde | amarillo, rosado"

let colores = texto3.split(/[,;1]/);
console.log(colores)

let palabra2 = "JavaScript"

console.log(palabra2.slice(0,4))
console.log(palabra2.slice(-6,-2))