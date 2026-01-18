let movimientos = JSON.parse(localStorage.getItem("movimientos"));
const list = document.querySelector("#transaction-list");
const menu = document.querySelector("#menu");

menu.addEventListener("click",(event)=>{
    window.location.href = "./Menu.html";
}) //cambio de pantalla

loadTransactions();//carga las transacciones


function loadTransactions(){

    while(list.firstChild){ //limpieza de li
        list.removeChild(list.firstChild);
    }

    for(i=0; i<movimientos.length; i++){ //carga los movimientos
        list.innerHTML += `<li class="list-group-item ${movimientos[i].sign}">${movimientos[i].type} -$ ${movimientos[i].amount}</li>`
    }
}