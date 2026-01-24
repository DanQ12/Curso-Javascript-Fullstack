$(document).ready(function(){
    //evento click boton
    $("#btn-calculator").on("click", function(){
        //limpiar errores
        $("#error-message").hide().text("");

        //obtener datos input
        const monto = parseFloat($("#monto").val());
        const tasa = parseFloat($("#tasa").val());
        const plazo = parseInt($("#plazo").val());

        if(isNaN(monto) || monto === 0){
            mostrarError("Por favor ingresar monto valido mayor a cero");
            return;
        }

        if(isNaN(tasa) || tasa === 0){
            mostrarError("Por favor ingresar tasa valida mayor a cero");
            return;
        }

        if(isNaN(plazo) || plazo === 0){
            mostrarError("Por favor ingresar plazo valido mayor a cero");
            return;
        }

        //calcular prestamo
        calcularPrestamo(monto, tasa, plazo)
    })

    function mostrarError(mensaje){
        $("#error-message").text(mensaje).show().css("display","block");
        $("result.container").hide();
    }

    function calcularPrestamo(monto, tasa, plazo){
        const tasaMensual = (tasa/100)/12;

        let cuotaMensual;

        if(tasaMensual === 0){
            cuotaMensual = monto/plazo;
        }
        else{
            const numerador = tasaMensual * Math.pow(1 + tasaMensual, plazo);
            const denominador = Math.pow(1 + tasaMensual, plazo) - 1;
            cuotaMensual = monto * (numerador/denominador);
        }

        //calcular totales
        const totalPagar = cuotaMensual * plazo;
        const totalInteres = totalPagar - monto;

        //mostrar resultados
        $("#cuota-mensual").text(`$ ${formatearNumero(cuotaMensual)}`)
        $("#total-pagar").text(`$ ${formatearNumero(totalPagar)}`)
        $("#total-interes").text(`$ ${formatearNumero(totalInteres)}`)

        $("#result-container").slideDown("slow")
    }

    function formatearNumero(numero){
        return numero.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    $(".form-control").on("keypress", function(e){
        if(e.which == 13){
            $("#btn-calculator".click())
        }
    })
})