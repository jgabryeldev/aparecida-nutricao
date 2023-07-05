let pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i<pacientes.length; i++){

    let paciente = pacientes[i];
    let peso = paciente.querySelector(".info-peso");
    peso = peso.textContent;
    let altura = paciente.querySelector(".info-altura");
    altura = altura.textContent;
    let imc = paciente.querySelector(".info-imc");
    imc.textContent = peso/(altura*altura);
    let pesoEhValido = pesoValido(peso);
    let alturaEhValida = alturaValida(altura);

    if(!pesoEhValido)
    {
        imc.textContent = "Peso Inválido!";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido");
    }
    if(!alturaEhValida)
    {
        imc.textContent = "Altura Inválida!";
        alturaEhValida= false;
        paciente.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValida){
        let imcCalculo = calculaImc(peso, altura);
        imc.textContent = imcCalculo
    }
}

function calculaImc(peso, altura){
    let imc = 0;
    imc = peso / (altura*altura);
    return imc.toFixed(2);
}

function pesoValido(peso) {
    let pesoEhValido = true;
    pesoEhValido = (peso>0 && peso<1000)?true:false;
    return pesoEhValido;
}
function alturaValida(altura) {
    let alturaEhValida = true;
    alturaEhValida = (altura>0 && altura<=3.0)?true:false;
    return alturaEhValida;
}