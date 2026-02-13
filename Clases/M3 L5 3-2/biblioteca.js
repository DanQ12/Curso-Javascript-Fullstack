console.log("Bienvenido al Sistema de Gestion de Biblioteca");
console.log("=".repeat(50));

//Estructura de datos

let biblioteca = [
    {
    titulo: "Cien años de Soledad",
    autor: "Gabriel Garcia Marquez",
    año: 1967,
    categoria: "Ficcion",
    disponible: true
},
{
    titulo: "Sapiens: De animales a dioses",
    autor: "Yuval Noah Harari",
    año: 2011,
    categoria: "No Ficcion",
    disponible: true
},
{
    titulo: "Cosmos",
    autor: "Carl Sagan",
    año: 1980,
    categoria: "Ciencias",
    disponible: true
},
{
    titulo: "El codigo Da Vinci",
    autor: "Dan Brown",
    año: 2003,
    categoria: "Misterio",
    disponible: false
},
{
    titulo: "La historia del arte",
    autor: "Ernst Gombrich",
    año: 1950,
    categoria: "Arte",
    disponible: false
}]

//funciones de visualizacion

function mostrarTodosLosLibros(){
    console.log("\n CATOALOGO COMPLETO DE LIBROS:");
    console.log("-".repeat(50));
    console.log(`\n Total de libros: ${biblioteca.length}`)
}

function menu(){
    console.log("\n" + "=".repeat(50));
    console.log("MENU PRINCIPAL - BIBLIOTECA");
    console.log("1. Ver todos los libros");
    console.log("2. Buscar por Categoria")
    console.log("3. Buscar por Autor")
    console.log("4. Ver Estadisticas")
    console.log("5. Prestar Libros")
    console.log("6. Devolver Libros")
    console.log("7. Generar Reporte de Disponibilidad")
    console.log("0. Salir")
    console.log("\n" + "=".repeat(50));
}

//Funciones de busqueda

/**
 * buscar libro por categoria
 * @param{String}
 * @returns{Array}
 */

function buscarPorCategoria(categoria){
    console.log(`\n Buscando Libros por Categoria: ${categoria}`)
    console.log("-".repeat(50));

    let resultado = [];

    if(resultado.length === 0){
        console.log("No se encontraron libros en esta categoria")
    }
    return resultado
}

/**
 * buscar libro por categoria
 * @param{String} autor - Nombre del autor
 * @returns{Array} - Arreglo de libros del autor
 */

function buscarPorAutor(autor){
    console.log(`\n Buscando Libros por Autor: ${autor}`)
    console.log("-".repeat(50));

    let resultado = [];

    if(resultado.length === 0){
        console.log("No se encontraron libros en esta categoria")
    }

    return resultado
}

/**
 * Filtros
 * @returns{Array} - Arreglo libros disponibles
 */

function obtenerListadoLibrosDisponibles(){
    return biblioteca.filter(libro => libro.disponible);    
}

// Calculos/Estadisticas

/**
 * Promedio año de publicacion
 * @returns {number} - año promedio
 */

function calcularPromedio(){
    let sumaAños = 0;

    return sumaAños / biblioteca.length;
}

/**
 * Contar libros por categoria
 * @returns {Object} - objeto con conteo de categoria
 */

function contarPorCategoria(){
    console.log("\n DISTRIBUCION POR CATEGORIAS")
    console.log("-".repeat(50))

    let conteo={};

    for(let categoria in conteo){
        console.log(`${categoria} : ${conteo[categoria] } libro(s)`)
    }

    return conteo;
}

/**
 * Porcentaje de libros disponibles
 * @returns {number} - porcentaje de disponibilidad
 */

function calcularPorcentajeDisponible(){
    let disponibles = obtenerListadoLibrosDisponibles().length;
    let porcentaje = (disponibles/biblioteca.length) * 100

    return porcentaje.toFixed(2)
}

//mostrar varias estadisticas

function mostrarEstadisticas(){
    console.log("\n ESTADISTICAS DE LA BIBLIOTECA");
    console.log("-".repeat(50))

    console.log(`Total de Libros: ${mostrarTodosLosLibros()}}`)
    console.log(`Libros Disponibles: ${obtenerListadoLibrosDisponibles().length}`)
    console.log(`Libros Prestados: ${biblioteca.length - obtenerListadoLibrosDisponibles().length}`)
    console.log(`Porcentaje Disponible: ${calcularPorcentajeDisponible()}%`)
    console.log(`Año promedio de publicacion: ${calcularPromedio()}`)

    console.log("/n")
    contarPorCategoria();
}

//sistema de Prestamos

/**Prestar un libro 
 * @param {string} titulo - libro a prestar
 * @returns {boolean} true - presto libro, false- si no
*/

function prestarLibro(titulo){
    console.log(`\n Intentando prestar: ${titulo}`)
    console.log("-".repeat(50));

    let libro= biblioteca.length.find(L => L.titulo.toLowerCase() === titulo.toLowerCase());

    if(!libro){
        console.log("ERROR: El libro no existe en la biblioteca")
        return false
    }

    if(!libro.disponible){
        console.log("ERROR: El libro ya esta prestado")
        return false
    }
    
    console.log("Libro Prestado Exitosamente");
    return true
}

/**
 * Devolucion de libro
 * @param {string} titulo a devolver
 * @returns {boolean} true- si se devolvio, false - si no
 */

function devolverLibro(titulo){
    console.log(`\n Intentando devolver: ${titulo}`)
    console.log("-".repeat(50));

    let libro= biblioteca.length.find(L => L.titulo.toLowerCase() === titulo.toLowerCase());

    if(!libro){
        console.log("ERROR: El libro no existe en la biblioteca")
        return false
    }

    if(libro.disponible){
        console.log("ERROR: El libro no esta prestado")
        return false
    }

    console.log("Libro Devuelto Exitosamente");
    return true
}

function generarReportePrestamos(){
    console.log("REPORTE DE PRESTAMOS")
    console.log("-".repeat(50));

    let prestado = biblioteca.filter(libro => !libro.disponible)

    if(prestado.length === 0){
        console.log("No hay libros prestados actualmente")
    }
    else{
        console.log(`Total libros prestados actualmente: ${prestado.length}\n`)

        prestado.forEach((libro, index) =>{
            console.log(`${index + 1}. "${libro.titulo}" - ${libro.autor}`);
        })
    }
}

function iniciarAplicacion(){
    console.log("\n Sistema inicializado correctamente")
    menu();
}

iniciarAplicacion()