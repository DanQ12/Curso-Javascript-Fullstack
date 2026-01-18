const form = document.querySelector("form")
const menu = document.querySelector("#menu-principal");
let saldo = parseInt(localStorage.getItem("dinero"));
let movimientos = JSON.parse(localStorage.getItem("movimientos")) //variables a usar

form.addEventListener("submit", (event) =>{//esspera el click
    
    const deposit = document.getElementById("monto");
    const texto = document.querySelector(".message");//variables de la funcion

    event.preventDefault(); //detiene comportamiento por defecto

    saldo += parseInt(deposit.value); //actualiza el saldo
    texto.textContent = `El nuevo saldo es  $ ${saldo}`; //mensaje de nuevo saldo

    localStorage.setItem("dinero", saldo); //guarda nuevo saldo

    if(movimientos.length > 9){
        const removed = movimientos.shift();
    }

    movimientos.push({type: "Deposito", amount: parseInt(deposit.value), sign: "positive"});

    localStorage.setItem("movimientos", JSON.stringify(movimientos));
})

menu.addEventListener("click", (event)=>{ //cambio de pantalla
    window.location.href = "./Menu.html";
})