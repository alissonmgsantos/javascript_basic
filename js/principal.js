//Calculando IMC de todos os pacientes da tabela
let pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(paciente => {
    let tdPeso = paciente.querySelector(".info-peso");
    let tdAltura = paciente.querySelector(".info-altura");
    let tdImc = paciente.querySelector(".info-imc");

    let peso = tdPeso.textContent;

    let altura = tdAltura.textContent;

    let pesoEhValido = true;
    let alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");

    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");

    }

    if (alturaEhValida && pesoEhValido) {

        let imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
});


