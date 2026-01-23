document.addEventListener("DOMContentLoaded", function(){

    //referencias a los elementos DOM
    const formulario = document.getElementById("formulario");
    const resultado = document.getElementById("resultado");
    const mensaje = document.getElementById("mensaje");

    //escuchar evento submit del fomrulario
    formulario.addEventListener("submit", function(event){
        //prevenir comportamiento por defecto del formulario
        event.preventDefault();

        //Defclaramos y asignamos valores
        let nombre = document.getElementById("name").value;
        let edad = document.getElementById("age").value;
        const mensajeElemento = document.getElementById("mensaje")
        const resultado = document.getElementById("resultado")

        //Mostrar los valores por consola
        console.log("==========DATOS RECIBIDOS");
        console.log("Nombre: " , nombre);
        console.log("Edad: ", edad);
        console.log("Tipo de dato - nombre: ", typeof nombre);
        console.log("Tipo de dato - edad: ", typeof edad)

        //convertir la edad a numero}
        edad =  parseInt(edad)
        console.log("Edad convertida a numero: ", edad);
        console.log("tipo de dato - edad (convertida): ", typeof edad);

        //mensaje Bienvenida
        let mensaje = `¡Hola! ${nombre} Bienvenido/a. Veo que tienes ${edad} años`

        //mensaje consola
        console.log("================BIENVENIDA====================");
        console.log(mensaje);

        //validacion edad
        let infoAdicional
        if(edad<18){
            infoAdicional = "Eres menor de edad"
        }
        else if( edad >= 18 && edad <65){
            infoAdicional = "Eres mayor de edad"
        }
        else{
            infoAdicional = "eres adulto mayor"
        }

        console.log("Informacion adicional: ", infoAdicional);
        mensajeElemento.textContent = `${mensaje} ${infoAdicional}`;
        resultado.classList.remove("oculto");

        console.log("========================")
        console.log("Proceso terminado exitosamente")
        console.log("========================")
    })

    console.log("Aplicacion iniciada. Esperando datos de usuario")
})