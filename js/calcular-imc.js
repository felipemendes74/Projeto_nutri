let pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(calcularImc);

function calcularImc(paciente) {
    //for (var i = 0; i < pacientes.length; i++) {
    //    let paciente = pacientes[i];

    //console.error("vai trabalhar");
    const titulo = document.querySelector("#titulo");
    titulo.textContent = "Etecia nutrição e dietética";


    //pegar peso
    let peso = paciente.querySelector(".info-peso").textContent;
    //pegar altura
    let altura = paciente.querySelector(".info-altura").textContent;

    //validar dados
    let pesoValido = true;
    let alturaValido = true;
    let tdIMC = paciente.querySelector(".info-imc");


    //calcular o IMC
    if (pesoValido && alturaValido) {
        let imc = peso / altura ** 2;
        // console.log(imc);
        //escrever o IMC na tabela
        tdIMC.textContent = imc.toFixed(2);
    }
}
/*
let titulo = document.querySelector("#titulo");
titulo.addEventListener("click", mostrarMensagem);
titulo.addEventListener("click", trocarCor);

function mostrarMensagem() {
    console.log("Evento aconteu");
}
function trocarCor() {
    let cor = parseInt(Math.random() * 255);
    titulo.style.color = `rgb(${cor}, ${cor}, ${cor + 64})`;

}
*/
