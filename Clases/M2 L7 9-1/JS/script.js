$(document).ready(function(){
    $("#btn-calculator").click(function(){
        calcularPrestamo();
    })

//calcular al presionar Enter
$(".form-control").keypress(function(e){
    if(e.which == 13){
        calcularPrestamo();
    }
})

function calcularPrestamo(){
    const monto = parseFloat($("#monto").val())
    const tasa = parseFloat($("#tasa").val())
    const plazo = parseFloat($("#plazo").val())

    $("#error-message").hide();
    $("#results-container").hide();

    if(isNaN(monto) || monto<=0){
        mostrarError("Por favor, ingresar un monto válido mayor a 0")
        return;
    }

    if(isNaN(tasa) || tasa<=0){
        mostrarError("Por favor, ingresar una tasa válida mayor a 0")
        return;
    }

    if(isNaN(plazo) || plazo<=0){
        mostrarError("Por favor, ingresar un plazo válido mayor a 0")
        return;
    }

    const tasaMensual = tasa / 100 / 12;
    let cuotaMensual;

    if(tasaMensual === 0 ){
        cuotaMensual = monto/plazo;
    }
    else{
        cuotaMensual = monto * (tasaMensual * Math.pow(1 + tasaMensual, plazo))/(Math.pow(1 + tasaMensual, plazo) - 1);
    }

    const totalPago = cuotaMensual * plazo;
    const totalIntereses = totalPago - monto;

    $("#cuota-mensual").text(`$ ${cuotaMensual.toFixed(2)}`)
    $("#total-pagar").text(`$ ${totalPago.toFixed(2)}`)
    $("#total-interes").text(`$ ${totalIntereses.toFixed(2)}`)

    $("#result-container").slideDown(400);
}

function mostrarError(mensaje){
    $("errorMessage").text(mensaje).slideDown(300)
}
});