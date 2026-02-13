//contador de visitas
let visitas = 0;

function incrementarVisitas(){
    visitas++;
    console.log(visitas)
}

//Simulador de temperatura

const obtenerTemperatura = ()=>{
    return Math.floor(Math.random() * 41); 
}

function clasificarClima(){
    const temp = obtenerTemperatura();

    if(temp < 16){
        return console.log(`${temp}°C hace frio`)
    }
    else if(temp <26){
        return console.log(`${temp}°C esta templado`)
    }
    else{
        return console.log(`${temp}°C hace calor`)
    }
}

//calculador de edad

function calcularEdad(anioNacimiento){
    const anioActual = new Date().getFullYear();
    return console.log(anioActual - anioNacimiento);
}