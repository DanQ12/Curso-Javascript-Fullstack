const input = document.querySelector("#contact-search");//barra de busqueda
const addBtn = document.querySelector("#collapse-btn");//boton para colapsar
const addForm =document.querySelector("#add-form");//formulario para añadir contacto
const list = document.querySelector("#contact-list");//la lista de contactos
const menu = document.querySelector("#menu");

let selectedContact;//variable auxiliar
const sendMoney = document.querySelector("#send-money");//boton para enivar dinero
let contactsArray = JSON.parse(localStorage.getItem("contactos"));//contactos guardados

let movimientos = JSON.parse(localStorage.getItem("movimientos"));//transacciones guardadas

loadContacts();//cargamos los contactos al entrar a la pagina

input.addEventListener("input", (event)=>{ //la funcion se activa con cada ingreso del buscador
    
    
    const filtro = input.value.toUpperCase(); //saca la cadena de texto y la transforma a mayuscula
    const contacts = list.getElementsByTagName("li");//conseguimos la lista de contactos

    for(i=0; i<contacts.length; i++){ //el ciclo revisa toda la lsita de contactos
        a=contacts[i].getElementsByTagName("span")[0];//obtiene el primer span
        txtValue = a.textContent || a.innerText;//saca el tacto del primer span
        if(txtValue.toUpperCase().indexOf(filtro) > -1){ //revisa si esta presenta la cadena que se busca
            contacts[i].style.display = ""; //si esta no pasa nada
        }
        else{
            contacts[i].style.display = "none"; //si no esta lo vuelve invisible
        }

}})

addBtn.addEventListener("click", (event)=>{ //al hacer click añade/quita la clase que le da visibilidad
    const collapseForm = document.getElementById("collapse-contact");
    
    collapseForm.classList.toggle("show");
})

addForm.addEventListener("submit", (event)=>{ //espera a que se envie el formulario
    const nombre = document.querySelector("#contact-name");
    const numeroBanco = document.querySelector("#contact-cbu");
    const apodo = document.querySelector("#contact-alias");
    const banco = document.querySelector("#contact-bank"); //la infortmacion del nuevo contacto

    event.preventDefault(); //detiene el comportamiento normal del submit

    contactsArray.push({name: nombre.value, CBU: numeroBanco.value, alias: apodo.value, bank: banco.value})//añade el nuevo contacto a la lista

    loadContacts() //recarga los contactos

    localStorage.setItem("contactos", JSON.stringify(contactsArray));//almacenamos la nueva informacion
})

list.addEventListener("click", (event)=>{
    if(event.target && (event.target.tagName === "LI" || event.target.tagName === "SPAN")){ //revisa si se hizo click en el li o el span
        const collapseMoney = document.querySelector("#collapse-money");//el div colapsable
        const contacts = list.getElementsByTagName("li");//toma todos los li y los pone en un array

        collapseMoney.classList.add("show")//vovlemos visible el div colapsable

        event.target.tagName === "LI"? selectedContact = event.target: selectedContact = event.target.parentElement;//guarda el li correspondiente al seleccionado

        for(i=0; i<contacts.length; i++){
            contacts[i].classList.remove("selected-contact");//remueve la clase que destacadora de todos los li
        }

        selectedContact.classList.add("selected-contact");//añade la clase destacadora al li seleccionado
    }
})

sendMoney.addEventListener("click", (event)=>{ //al clickear el boton de enivar dinero
    const money = document.querySelector("#money");
    let saldo = localStorage.getItem("dinero");
    const message = document.querySelector(".error-message");
    
    if(money.value == ""){ //validacion que no este vacio
        message.textContent = "Ingrese la cantidad a transferir";
        message.classList.add("negative");
    }


    else if (parseInt(money.value) > parseInt(saldo)){ //validacion para que no transifera mas de lo que se tiene
        message.textContent="No tiene suficiente saldo";
        message.classList.add("negative");
    }

    else{
        saldo -= parseInt(money.value); 
        localStorage.setItem("dinero",saldo); //actualiza el valor del saldo
        message.textContent=`El nuevo saldo es $ ${saldo}`;//mensaje de confirmacion
        message.classList.remove("negative");
        message.classList.add("postive");//decoraciond el mensaje
    }

    if(movimientos.length > 9){
        const removed = movimientos.shift();
    }

    movimientos.push({type: "Deposito", amount: parseInt(deposit.value), sign: "negative"});

    localStorage.setItem("movimientos", JSON.stringify(movimientos));
})

menu.addEventListener("click", (event)=>{
    window.location.href="./Menu.html"
})

function loadContacts(){ //funcion para cargar y actualizar contactos
    
    while(list.firstChild){ //elimina todos los li ya existentes
        list.removeChild(list.firstChild);
    }

    for(i=0;i<contactsArray.length;i++){ //carga los li guardados
        list.innerHTML += `<li class="list-group-item">
                        <span>${contactsArray[i].name}</span>
                        <span>CBU: ${contactsArray[i].CBU}, Alias: ${contactsArray[i].alias}, Banco: ${contactsArray[i].bank}</span>
                    </li>`
    }
}
