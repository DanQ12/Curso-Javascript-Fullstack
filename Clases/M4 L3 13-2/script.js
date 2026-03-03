function showOutput(outputid, lines){
    const output = document.getElementById(outputid);
    output.classList.add("active");
    output.innerHTML = "";
    lines.forEach((line,i) => {
        const div = document.createElement("div");
        div.className = "log-line";
        div.style.animationDelay = `${i * 0.1}s`;
        div.innerHTML = `<span class="chevron">)</span> ${line}`
        output.appendChild(div)
    });
}

function flashElement(el){
    el.classList.remove("higlight-flash");
    void el.offsetWidth;
    el.classList.add("highlight-flash")
}

function runDemo1(){
    const titulo= document.getElementById("titulo");
    showOutput("output1", [titulo.innerText]);
    flashElement(titulo);
}

function runDemo2(){
    const parrafos = document.getElementsByClassName("descripcion");
    showOutput("output2", [parrafos[0].innerText]);
    flashElement(parrafos[0]);
}

function runDemo3(){
    const items = document.getElementById("target-area").getElementsByTagName("li");
    showOutput("output3", [items[0].innerText]);
    flashElement(items[0]);
}

function runDemo4(){
    const primerElemento = document.querySelector(".elemento");
    showOutput("output4", [primerElemento.innerText]);
    flashElement(primerElemento);
}
function runDemo5(){
    const elementos = document.querySelectorAll(".elemento");
    const lines = []
    elementos.forEach(el =>{
        lines.push(el.innerText);
        flashElement(el);
    });

    showOutput("output5", lines)
}