//contador de visitas
let contador = 0;

function contarVisita(){
    contador++;
    return console.log(contador)
}

//simulador de temperatura

function leerTemperatura(temperatura){
    if(temperatura >=0 && temperatura<= 15){
        return console.log("Hace frio")
    }
    else if(temperatura > 15 && temperatura < 25){
        return console.log("Esta templado")
    }
    else{
        return console.log("Hace calor")
    }
}

//calculador de edad

function calcularEdad(anioNacimiento){
    const anioActual = new Date().getFullYear()
    return console.log(anioActual -anioNacimiento)
}

//Calculadora de sueldos
function calcularSueldoNeto(nombre, sueldoBase, ...bonificaciones){
    console.log(`Nombre: ${nombre}, Sueldo neto: ${(sueldoBase + bonificaciones.reduce((a,b) => a+b)) * 0.87}, Bonificaciones: ${bonificaciones}, Sueldo bruto: ${sueldoBase}`)
}

//Resgistro de asistencia
function registrarAsistencia(clase, totalAlumnos, ...alumnos){
    return console.log(`la clase ${clase} tuvo una asistencia de ${(alumnos.length/totalAlumnos) * 100}%`)
}