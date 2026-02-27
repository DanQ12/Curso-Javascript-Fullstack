export const servicios = {
    peluqueria: {
        nombre: "Peluqueria Canina",
        precio: 20000,
        duracion: "1-2 horas"
    },
    veterinaria:{
        nombre: "Consulta Veterinaria",
        precio: 30000,
        duracion: "30-45 minutos"
    },
    guarderia:{
        nombre: "Guarderia Diaria",
        precio: 15000,
        duracion: "Dia completo"
    }
}

export function mostrarServicios(){
    console.log("===SERVICIOS DISPONIBLES===")
    for(let servicio in servicios){
        const s = servicios[servicio];
        console.log(`${s.nombre} - $${s.precio} (${s.duracion})`)
    }
}

export function agendarServicio(tipoServicio, mascota){
    const servicio= servicios[tipoServicio];
    if(servicio){
        return `Servicio agendado: ${servicio.nombre} para ${mascota}`;
    }
    return "Servicio no disponible"
}