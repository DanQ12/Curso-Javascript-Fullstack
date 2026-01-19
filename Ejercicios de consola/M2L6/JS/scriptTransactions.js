let movimientos = JSON.parse(localStorage.getItem("movimientos"));//lista guardada en la memoria
const listaTransacciones = document.querySelector("#transaction-list");//UL del html
let opciones = [];//array de opciones ya seleccionadas

$("#menu").click(function(event){
    window.location.href = "./Menu.html";
}) //cambio de pantalla

$("document").ready(function(){
    loadTransactions()//carga las transacciones
    movimientos.forEach((item)=>{
        getTipoTransaccion(item.type)//envia cada tipo de la transaccion de la memoria a la funcion
    })
});

$("#filtro").change(function(event){
    mostrarUltimosMovimientos($(this).val())
})

function loadTransactions(){

    while(listaTransacciones.firstChild){ //limpieza de li
        listaTransacciones.removeChild(listaTransacciones.firstChild);
    }

    for(i=0; i<movimientos.length; i++){ //carga los movimientos
        listaTransacciones.innerHTML += `<li class="list-group-item ${movimientos[i].sign}"><span class=tipo>${movimientos[i].type}</span> -$ ${movimientos[i].amount}</li>`
    }
}

function getTipoTransaccion(tipo){

    if(!opciones.includes(tipo)){ //revisa si no esta ya en las opciones
        $("#filtro").append(`<option value="${tipo}">${tipo}</option>`)//se añade al final de las opciones
    }
    opciones.push(tipo); //se añade al array de repetidos
}

function mostrarUltimosMovimientos(filtro){
    const transacciones = listaTransacciones.getElementsByTagName("li");
    
    if(filtro === "default"){
        for(i=0;i<transacciones.length;i++){
            transacciones[i].style.display = "";
        }
    }
    else{
        for(i=0;i<transacciones.length;i++){
            a = transacciones[i].getElementsByTagName("span")[0].innerText;
            console.log(a)
            if(a == filtro){
                transacciones[i].style.display = "";
            }
            else{
                transacciones[i].style.display = "none";
            }
        }
    }
}