const transactions = document.getElementById("transactions")

let dinero = localStorage.getItem("dinero"); //valor inical del saldo

$("document").ready(function(event){
    $(".saldo").text(`$ ${dinero}`) //escribe el valor numerico en la pagina
})

$("#deposit").click(function(event){// cuando se hace click en Depositar

    redireccion("Depositar")
    setTimeout(() => {
        window.location.href = "./deposit.html";}, 1000); //redirige despues de 5 segundos
})

$("#sendmoney").click(function(event){// cuando se hace click en Enviar dinero

    redireccion("Enviar dinero")
    setTimeout(() => {
        window.location.href = "./sendmoney.html";}, 1000); //redirige despues de 5 segundos
})

$("#transactions").click(function(event){// cuando se hace click en Ultimos Movimientos

    redireccion("Últimos movimientos")
    setTimeout(() => {
        window.location.href = "./transactions.html";}, 1000); //redirige despues de 5 segundos
})

function redireccion(pagina){ 
    $("#messageMenu").text(`Redireccionando a la pagina ${pagina}`); //crea el mensaje
}