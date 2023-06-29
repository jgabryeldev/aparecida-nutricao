let pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i<pacientes.length; i++){

    let paciente = pacientes[i];
    let peso = paciente.querySelector(".info-peso");
    peso = peso.textContent;
    let altura = paciente.querySelector(".info-altura");
    altura = altura.textContent;
    let imc = paciente.querySelector(".info-imc");
    imc.textContent = peso/(altura*altura);
    let pesoValido = true;
    let alturaValida = true;

    if(peso>=1000 || peso<=0)
    {
        imc.textContent = "Peso Inválido!";
        pesoValido = false;
        paciente.classList.add("paciente-invalido");
    }
    if(altura>=3 || altura<=0)
    {
        imc.textContent = "Altura Inválida!";
        alturaValida= false;
        paciente.classList.add("paciente-invalido");
    }

    if(pesoValido && alturaValida){
        let imcCalculo = calculaImc(peso, altura);
        imc.textContent = imcCalculo
    }
}

function calculaImc(peso, altura){
    let imc = 0;
    imc = peso / (altura*altura);
    return imc.toFixed(2);
}