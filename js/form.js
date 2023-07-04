let botaoAdicionaPaciente = document.querySelector("#adicionar-paciente");

botaoAdicionaPaciente.addEventListener("click", function adicionaPaciente(Event){
    Event.preventDefault();
    let formulario = document.querySelector("#form-adiciona");
    let paciente = dadosPaciente(formulario);
    let pacienteTr = criaTr(paciente);
    /*Adiciona à tabela do meu HTML*/
    let tabela = document.querySelector("#tabela");
    tabela.appendChild(pacienteTr);
    formulario.reset();
}
)

/*Cria o objeto paciente*/
function dadosPaciente(formulario){
    let paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calculaImc(formulario.peso.value, formulario.altura.value)
    }
    return paciente;
}

function criaTr(paciente) {
    /*Cria os elementos da tabela*/
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    let nomeTd = document.createElement("td");
    let pesoTd = document.createElement("td");
    let alturaTd = document.createElement("td");
    let gorduraTd = document.createElement("td");
    let imcTd = document.createElement("td");

    /*Validação do peso e altura*/
    pesoEhValido = pesoValido(paciente.peso);
    alturaEhValida = alturaValida(paciente.altura);

    if(!pesoEhValido){
        alert("Peso Inválido!");
        return;
    }
    if(!alturaEhValida){
        alert("Altura Inválida!");
        return;
    }
    if (alturaEhValida && pesoEhValido) {
        imcTd.textContent = paciente.imc;
    }

    /*Extrai o conteúdo de texto do paciente*/
    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;

    /*Adiciona classe ao td*/
    nomeTd.classList.add("info-nome");
    pesoTd.classList.add("info-peso");
    alturaTd.classList.add("info-altura");
    gorduraTd.classList.add("info-gordura");
    imcTd.classList.add("info-imc");
    
    /*Põe os elementos como filho da minha Tr*/
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    return pacienteTr;
}