let botao = document.querySelector("#botao-cadastrar");
botao.addEventListener("click", function () {
    console.log("clicou");
});

botao.addEventListener("click", function (evento) {
    evento.preventDefault();
    let formulario = document.querySelector("#form-paciente");
    let paciente = carregarPaciente(formulario);

    if (paciente){
        montarTr(paciente);
        formulario.reset();
        mensagem.textContent = "";
            
    }else{

        mensagem.textContent = "Dados Invalidos";
    }

    
});

function montarTr(paciente){
    let table = document.querySelector("#tabela-pacientes");
    let tr = document.createElement("tr");
    tr.classList.add("paciente");

    tr.appendChild(montarTd(paciente.nome, "info-nome"));
    tr.appendChild(montarTd(paciente.peso, "info-peso"));
    tr.appendChild(montarTd(paciente.altura, "info-altura"));
    tr.appendChild(montarTd(paciente.gordura, "info-gordura"));
    tr.appendChild(montarTd(calcularIMC(paciente)));

    table.appendChild(tr);
}

function montarTd(valor, classe) {
    let td = document.createElement("td");
    td.textContent = valor;
    td.classList.add(classe);
    return td;
}

function validarPeso(peso) {
    return !(peso <= 0 || peso >= 1000);
}

function validarAltura(altura) {
    return !(altura <= 0 || altura >= 1000);
}

function validarPaciente(paciente) {
    return (validarPeso(paciente.peso) && validarAltura(paciente.altura));
}

function carregarPaciente(form) {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value
    }

    if (!validarPeso(paciente.peso)) return false;
    if (!validarAltura(paciente.altura)) return false;
    if (paciente.nome.lenght < 2) return false;

    return paciente;
}