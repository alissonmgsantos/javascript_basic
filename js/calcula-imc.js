//Calculando IMC de todos os pacientes da tabela
let pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(paciente => {
    let tdPeso = paciente.querySelector(".info-peso");
    let tdAltura = paciente.querySelector(".info-altura");
    let tdImc = paciente.querySelector(".info-imc");

    let peso = tdPeso.textContent;

    let altura = tdAltura.textContent;

    let pesoEhValido = validaPeso(peso);
    let alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }


    if (alturaEhValida && pesoEhValido) {
        tdImc.textContent = calculaImc(peso, altura);
    }
});


function calculaImc(peso, altura) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso){

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}