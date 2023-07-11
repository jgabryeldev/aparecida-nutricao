// HTTP --> precisa trazer para o meu documento JS --> xhr - armazenar o meu XMLHttpRequest() --> open --> send --> load

let botaoBuscaPacientes = document.querySelector("#busca-pacientes");

botaoBuscaPacientes.addEventListener( "click", function(){
    
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", function(){
        
        let resposta = xhr.responseText;

        let pacientes = JSON.parse(resposta);
        if (xhr.status == 200) 
        {
            for (let i = 0; i < pacientes.length; i++) {
                let paciente = [];
                paciente = pacientes[i];
                adicionaPacienteNaTabela(paciente);
            }
        }
        else{
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    });

    xhr.send();
})