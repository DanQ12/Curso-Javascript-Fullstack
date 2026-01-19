let saldo = parseInt(localStorage.getItem("dinero"));
let movimientos = JSON.parse(localStorage.getItem("movimientos")) //variables a usar

$("document").ready(
    updateBank()
)

$("#deposit-form").submit(function(event){

    const deposit = $("#monto").val();

    event.preventDefault(); //detiene comportamiento por defecto

    $(".message").text(`+$ ${deposit}`);

    $("#alert-container").text(`Se ha hecho el deposito exitosamente`);
    $("#alert-container").show();

    saldo += parseInt(deposit); //actualiza el saldo

    localStorage.setItem("dinero", saldo); //guarda nuevo saldo

    updateBank();

    if(movimientos.length > 9){
        const removed = movimientos.shift();
    }

    movimientos.push({type: "Deposito", amount: parseInt(deposit), sign: "positive"});

    localStorage.setItem("movimientos", JSON.stringify(movimientos));

    setTimeout(()=>{
        window.location.href= "./Menu.html"
    },2000)
})

$("#menu-principal").click(function(event){
    window.location.href = "./Menu.html";
})

function updateBank(){
    $(".saldo").text(`$ ${saldo}`)
}