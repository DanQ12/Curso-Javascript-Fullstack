//Calculadora de sueldos
function calcularSueldoNeto(nombre, sueldoBase, ...bonificaciones){
    console.log(`Nombre: ${nombre}, Sueldo neto: ${(sueldoBase + bonificaciones.reduce((a,b) => a+b)) * 0.87}, Bonificaciones: ${bonificaciones}, Sueldo bruto: ${sueldoBase}`)
}

//Resgistro de asistencia
function registrarAsistencia(clase, totalAlumnos, ...alumnos){
    return console.log(`la clase ${clase} tuvo una asistencia de ${(alumnos.length/totalAlumnos) * 100}%`)
}