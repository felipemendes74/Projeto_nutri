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

let titulo = document.querySelector("#titulo");
titulo.onclick = mostrarMensagem;
function mostrarMensagem() {
    console.log("Evento aconteu");
}