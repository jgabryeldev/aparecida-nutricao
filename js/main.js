/*let titulo = document.querySelector(".titulo");

titulo.textContent = "Modifica o texto da página";*/

let paciente = document.querySelector(".primeiro-paciente");
let peso = paciente.querySelector(".info-peso");
peso = peso.textContent;
let altura = paciente.querySelector(".info-altura");
altura = altura.textContent;
let imc = paciente.querySelector(".info-imc");
imc.textContent = peso/ (altura*altura);