const form = document.querySelector("form");//formulario
const contactos =[{name: "John Doe", CBU: 123456789, alias: "john.doe", bank: "ABC Bank"},{name: "Jane Smith", CBU: 987654321, alias: "jame.smith", bank: "XYZ Bank"}];
const movimientos= [{type: "Compra en línea", amount: 50, sign: "negative"},{type: "Depósito", amount: 100, sign: "positive"},{type: "Transferencia recibida", amount: 75, sign: "positive"},{type: "Compra en línea", amount: 5550, sign: "negative"},{type: "Depósito misma cuenta", amount: 10500, sign: "positive"},{type: "Transferencia recibida", amount: 7575, sign: "positive"}]


//espera a que se presione el boton de submit
form.addEventListener("submit", (event) => {

    const email = document.getElementById("email");
    const pass = document.getElementById("password");
    const errorMessage = document.querySelector("#message")//elementos a usar

    event.preventDefault(); //evita el compórtamiento por defecto del submit, asi evitamos que borre los datos en los inputs

    if(email.value == "a@gmail.com" && pass.value == "1234"){ //verifica que los datos coincidan

        errorMessage.textContent = "Correo y contraseña correcto, lo redirigiremos al menú principal"; //_Cambiamos al mensaje de que funciono

        errorMessage.className="positive"; //le damos color y mas peso a la fuente

        localStorage.setItem("dinero", 60000); //incializa las variables de memoria

        localStorage.setItem("contactos", JSON.stringify(contactos));

        localStorage.setItem("movimientos", JSON.stringify(movimientos))

        setTimeout(() => {
        window.location.href = "./Menu.html";}, 1000); //despues de 5 segundos redirige al menu principal
        
    }
    else{//si alguno de los campos no es el valor correcto
        errorMessage.textContent += " ¡Correo y/o contraseña no validos!"; //mensaje de error
        errorMessage.className = "negative" //cambios visuales al texto
    }   
});