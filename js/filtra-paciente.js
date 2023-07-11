let campoFiltro = document.querySelector("#filtra-pacientes");

campoFiltro.addEventListener("input", function() {

    let pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
        for (let i = 0; i < pacientes.length; i++) {
            let paciente = [];
            paciente = pacientes[i];
            let tdNomes = paciente.querySelector(".info-nome");
            let nome = tdNomes.textContent;
            
            let comparacao = new RegExp(this.value, "i");

            if(comparacao.test(nome)){
                paciente.classList.remove("invisivel");
            }
            else{
                paciente.classList.add("invisivel");
            }
        }
    }
    else{
        for (let i = 0; i < pacientes.length; i++) {
            let paciente = [];
            paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
})

//pacientes(TRs) --> TDs --> testar os nomes