const list = document.querySelector("#contact-list");//la lista de contactos

let selectedContact;//variable auxiliar
let contactsArray = JSON.parse(localStorage.getItem("contactos"));//contactos guardados

let movimientos = JSON.parse(localStorage.getItem("movimientos"));//transacciones guardadas

$("document").ready(
    loadContacts()
);//cargamos los contactos al entrar a la pagina

$("#contact-search").keyup(function(event){
//la funcion se activa con cada ingreso del buscador   

    const filtro = $(this).val().toUpperCase(); //saca la cadena de texto y la transforma a mayuscula
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


$("#collapse-btn").click(function(event){//al hacer click añade/quita la clase que le da visibilidad
    $("#collapse-contact").slideToggle()

    if($(this).text() == "Cancelar"){//cambia el texto del boton
        $("#collapse-btn").text("Agregar nuevo contacto");
    }
    else{
        $("#collapse-btn").text("Cancelar");
    }
})

$("#add-form").submit(function(event){//espera a que se envie el formulario
    const nombre = $("#contact-name").val();
    const numeroBanco = $("#contact-cbu").val();
    const apodo = $("#contact-alias").val();
    const banco = $("#contact-bank").val(); //la infortmacion del nuevo contacto

    $("#collapse-contact").slideToggle()

    event.preventDefault(); //detiene el comportamiento normal del submit

    contactsArray.push({name: nombre, CBU: numeroBanco, alias: apodo, bank: banco})//añade el nuevo contacto a la lista

    loadContacts() //recarga los contactos

    localStorage.setItem("contactos", JSON.stringify(contactsArray));//almacenamos la nueva informacion

    
})


$("#contact-list li").click(function(event){
    if(event.target && (event.target.tagName === "LI" || event.target.tagName === "SPAN")){ //revisa si se hizo click en el li o el span
        
        const contacts = list.getElementsByTagName("li");//toma todos los li y los pone en un array

        $("#collapse-money").slideDown();

        event.target.tagName === "LI"? selectedContact = event.target: selectedContact = event.target.parentElement;//guarda el li correspondiente al seleccionado

        for(i=0; i<contacts.length; i++){
            contacts[i].classList.remove("selected-contact");//remueve la clase que destacadora de todos los li
        }

        selectedContact.classList.add("selected-contact");//añade la clase destacadora al li seleccionado
    }
})

$("#send-money").click(function(){//al clickear el boton de enivar dinero


    const money = $("#money").val();
    let saldo = localStorage.getItem("dinero");
    const message = $("#alert-container");

    console.log(money)
    
    if(money == ""){ //validacion que no este vacio
        message.text ("Ingrese la cantidad a transferir");
        message.show();
        message.addClass("alert-danger").removeClass("alert-success");
        return
    }


    else if (parseInt(money) > parseInt(saldo)){ //validacion para que no transifera mas de lo que se tiene
        message.text("No tiene suficiente saldo");
        message.show();
        message.addClass("alert-danger").removeClass("alert-success");
        return
    }

    else{
        saldo -= parseInt(money); 
        localStorage.setItem("dinero",saldo); //actualiza el valor del saldo
        message.text(`El nuevo saldo es $ ${saldo}`);//mensaje de confirmacion
        message.show();
        message.removeClass("alert-canger").addClass("alert-success");
    }

    if(movimientos.length > 9){
        const removed = movimientos.shift();
    }

    movimientos.push({type: "Transferencia", amount: parseInt(money), sign: "negative"});

    localStorage.setItem("movimientos", JSON.stringify(movimientos));
})

$("#menu").click(function(event){
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
