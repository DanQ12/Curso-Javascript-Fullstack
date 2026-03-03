//ejercicio 2
const nodo = document.getElementById("medio")

console.log(nodo.parentNode)
console.log(nodo.children)
console.log(nodo.previousSibling)
console.log(nodo.nextSibling)

console.log("*".repeat(50))

//ejercicio 3
console.log(document.getElementById("miParrafo"))
console.log(document.getElementsByClassName("miLista"))
console.log(document.getElementsByTagName("li"))
console.log(document.querySelector(".miLista li"))

console.log("*".repeat(50))

//ejercicio 4

document.getElementById("miParrafo").textContent = "texto modificado"

document.getElementById("medio").innerHTML = '<strong>nuevo elemento</strong> <button class="eliminar">Eliminar</button>'

console.log("*".repeat(50))

//ejercicio 5

document.getElementById("btn-agregar").addEventListener("click", agregarElemento)


function agregarElemento(){
    const nuevoE = document.createElement("li")
    nuevoE.innerHTML = 'elemento agregado <button class="eliminar">Eliminar</button>';
    document.getElementById("lista").appendChild(nuevoE)
}

console.log("*".repeat(50))

//ejercicio 6

document.getElementById("btn-estilo").onclick = cambiarEstilo

function cambiarEstilo(){
    document.getElementById("texto1").style.color = "blue"
    document.getElementById("texto2").classList.toggle("resaltado")
}

console.log("*".repeat(50))

//ejercicio 7

document.getElementById("lista").addEventListener("click", function(event){
    if(event.target.classList.contains("eliminar")){
        event.target.parentElement.remove()
    }
})

console.log("*".repeat(50))

//ejercicio 8

document.getElementById("inputText").addEventListener("input", function(event){
    document.getElementById("resultado").textContent = event.target.value;
})

document.getElementById("inputText").addEventListener("keydown", function(event){
    if(!isNaN(event.key) && event.key!==" "){
        event.preventDefault();
    }
})