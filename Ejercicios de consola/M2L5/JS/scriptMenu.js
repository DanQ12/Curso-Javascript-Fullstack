const deposit = document.querySelector("#deposit");
const sendMoney = document.getElementById("sendmoney")
const transactions = document.getElementById("transactions")
const message= document.querySelector("#messageMenu")

let dinero = localStorage.getItem("dinero");; //valor inical del saldo
let dineroTexto = document.querySelector(".saldo") // texto del saldo

dineroTexto.textContent = `$ ${dinero}` //escribe el valor numerico en la pagina

//has un codigo que carge el valor numerico del saldo cuando se cargue la pagina

deposit.addEventListener("click", (event)=> { // cuando se hace click en Depositar

    redireccion("Depositar")
    setTimeout(() => {
        window.location.href = "./deposit.html";}, 1000); //redirige despues de 5 segundos
})

sendMoney.addEventListener("click", (event)=> { // cuando se hace click en Enviar dinero

    redireccion("Enviar dinero")
    setTimeout(() => {
        window.location.href = "./sendmoney.html";}, 1000); //redirige despues de 5 segundos
})

transactions.addEventListener("click", (event)=> { // cuando se hace click en Ultimos Movimientos

    redireccion("Últimos movimientos")
    setTimeout(() => {
        window.location.href = "./transactions.html";}, 1000); //redirige despues de 5 segundos
})

function redireccion(pagina){ 
    message.textContent = `Redireccionando a la pagina ${pagina}`; //crea el mensaje
}