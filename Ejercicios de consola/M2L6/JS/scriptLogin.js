const contactos =[{name: "John Doe", CBU: 123456789, alias: "john.doe", bank: "ABC Bank"},{name: "Jane Smith", CBU: 987654321, alias: "jame.smith", bank: "XYZ Bank"}];
const movimientos= [{type: "Compra en línea", amount: 50, sign: "negative"},{type: "Depósito", amount: 100, sign: "positive"},{type: "Transferencia recibida", amount: 75, sign: "positive"},{type: "Compra en línea", amount: 5550, sign: "negative"},{type: "Depósito misma cuenta", amount: 10500, sign: "positive"},{type: "Transferencia recibida", amount: 7575, sign: "positive"}] //variables de memoria


//espera a que se presione el boton de submit

$("#login-form").submit(function(event){

    const email = $("#email").val();
    const pass = $("#password").val();
    const errorMessage = document.querySelector("#message")//elementos a usar

    event.preventDefault(); //evita el compórtamiento por defecto del submit, asi evitamos que borre los datos en los inputs

    if(email == "a@gmail.com" && pass == "1234"){ //verifica que los datos coincidan

        localStorage.setItem("dinero", 60000); //incializa las variables de memoria

        localStorage.setItem("contactos", JSON.stringify(contactos));

        localStorage.setItem("movimientos", JSON.stringify(movimientos))


        window.location.href = "./Menu.html"      
    }
    else{//si alguno de los campos no es el valor correcto
        alert("Correo y/o contraseña invalido")
    }   
});