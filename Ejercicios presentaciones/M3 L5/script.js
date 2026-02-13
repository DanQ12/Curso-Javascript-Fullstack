//Crear y manipular objeto

let persona = { nombre: "Carlos", edad: 25, profesion: "Desarrollador", presentarse: function () { return console.log(`Hola, me llamo ${this.nombre} y soy ${this.profesion}`) } };

console.log(persona.edad, persona["edad"]);

//Objeto Math

let n1 = Math.floor(Math.random() * 100) + 1;

let n2 = Math.sqrt(25)

let n3 = Math.round(5.7)

console.log(`numero aleatorio: ${n1}, raiz cuadrada: ${n2}, redondeo: ${n3}`)

//String

let texto = "JavaScript es genial"

console.log(texto.toUpperCase());
console.log(texto.replace("genial", "poderoso"));
console.log(texto.length);

//Simular dados

function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1
}

function jugar() {
    n1 = lanzarDado();
    n2 = lanzarDado();
    total = n1 + n2;

    console.log(`Tu tirada es ${total}`)
    if (total > 7) {
        return console.log("Ganaste")
    }
    else if (total === 7) {
        return console.log("Es un empate")
    }
    else {
        console.log("Perdiste")
    }
}

for (let i = 0; i < 5; i++) {
    console.log(`Ronda ${i}`)
    jugar()
    console.log("------------------------------")
}

//generador de codigos

function generarCodigo() {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
    let codigo = "";
    for (let i = 0; i < 5; i++) {
        let indice = Math.floor(Math.random() * caracteres.length);
        codigo += caracteres[indice];
    }
    return codigo;
}

let codigos = []

for (let i = 0; i < 5; i++) {
    codigos.push(generarCodigo());
}

console.log("codigos: ", codigos)

//analisis texto

function analizarTexto(texto) {
    let palabras = texto.split(" ");

    function contarPalabras() {
        return palabras.length;
    }

    function contarCaracteres() {
        return texto.replaceAll(" ", "").length;
    }

    function palabraMasLarga() {
        return palabras.reduce((max, palabra) => palabra.length > max.length ? palabra : max, "")
    }

    return { numeroPalabras: contarPalabras(), numeroCaracteres: contarCaracteres(), palabraMasLarga: palabraMasLarga() }
}

//gestion inventario

let almacen = [{ producto: "jalea", stock: 5 }, { producto: "yogurt", stock: 0 }, { producto: "flan", stock: 7 }]

function gestionarInventario(inventario) {
    let stockTotal = 0;
    function calcularStockTotal() {
        inventario.forEach(item => {
            stockTotal += item.stock;
        });
        return stockTotal;
    }
    function productosAgotados() {
        return inventario.filter(item => item.stock === 0)
    }

    return {totalStock: calcularStockTotal(), productosAgotados: productosAgotados()}
}
