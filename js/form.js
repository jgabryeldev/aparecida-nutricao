let botaoAdicionaPaciente = document.querySelector("#adicionar-paciente");

botaoAdicionaPaciente.addEventListener("click", function adicionaPaciente(Event){
    Event.preventDefault();
    let formulario = document.querySelector("#form-adiciona");
    let paciente = dadosPaciente(formulario);
    let pacienteTr = criaTr(paciente);
    /*Adiciona à tabela do meu HTML*/
    let tabela = document.querySelector("#tabela-pacientes");
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
    
    let erros = validacaoPaciente(paciente);


    if (erros.length > 0) {
        exibeErro(erros);
    }
    if(erros.length == 0){
        imcTd.textContent = paciente.imc;
        let exibeMensagemErro = document.querySelector("#adiciona-erros-paciente");
        exibeMensagemErro.innerHTML = "";
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
/*Toda a validação dos campos de adição de paciente*/
function validacaoPaciente(paciente) {
    let erros = [];
    pesoEhValido = pesoValido(paciente.peso);
    alturaEhValida = alturaValida(paciente.altura);
    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco!");
    }
    if(paciente.peso.length == 0){
        erros.push("O peso não pode ser em branco!");
    }
    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco!");
    }
    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco!");
    }
    if(!pesoEhValido){
        erros.push("O peso é inválido!");
    }
    if(!alturaEhValida){
        erros.push("A altura é inválida!");
    }
    return erros;
}

/*Função responsável em adicionar os a mensagens de erros na minha ul*/
function exibeErro(erros) {
    let ul = document.querySelector("#adiciona-erros-paciente");
    ul.innerHTML = "";

    erros.forEach(function adicionaLi(erro) {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}