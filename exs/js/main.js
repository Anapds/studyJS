const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const peso = parseFloat(document.querySelector('#peso').value);
    const altura = parseFloat(document.querySelector('#altura').value);
    
    if (isNaN(peso) || isNaN(altura)) {
        setResultado('Valores inválidos. Por favor, insira números válidos para peso e altura.');
        return;
    }

    const imc = calcularIMC(peso, altura);
    const msg = `Seu IMC é ${imc.toFixed(2)}.`;

    setResultado(msg);
});

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
}
