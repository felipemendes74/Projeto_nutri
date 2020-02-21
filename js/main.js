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

    if (peso <= 0 || peso > 1000) {
        pesoValido = false;
        tdIMC.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }
    if (altura <= 0 || altura > 1000) {
        alturaValido = false;
        tdIMC.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
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

let botao = document.querySelector("#botao-cadastrar");
botao.addEventListener("click", function () {
    console.log("clicou");
});

botao.addEventListener("click", function (evento) {
    evento.preventDefault();
    let formulario = document.querySelector("#form-paciente");
    let nome = formulario.nome.value;
    let peso = formulario.peso.value;
    let altura = formulario.altura.value;
    let gordura = formulario.gordura.value;
    let imc = formulario.imc.value;

    //criar linha
    let table = document.querySelector("#tabela-pacientes");
    let tr = document.createElement("tr");
    tr.classList.add("paciente");

    //criar coluna
    let tdNome = document.createElement("td");
    tdNome.textContent = nome;
    tr.appendChild(tdNome);
//    td.classList

    let tdPeso = document.createElement("td");
    tdPeso.textContent = peso;
    tr.appendChild(tdPeso);

    let tdAltura = document.createElement("td");
    tdAltura.textContent = altura;
    tr.appendChild(tdAltura);

    let tdGordura = document.createElement("td");
    tdGordura.textContent = gordura;
    tr.appendChild(tdGordura);

    let tdImc = document.createElement("td");
    tdImc.textContent = imc;
    tr.appendChild(tdImc);


    table.appendChild(tr);
});