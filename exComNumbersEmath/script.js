const numero = Number(prompt('digite um número: '));
const numeroTitulo = document.getElementById('numeroTitulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML = `<p>Seu número + 2 é ${numero + 2}.</p>`;
texto.innerHTML += `<p>Raiz quadrada ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>E NaN ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casa decimais: ${numero.toFixed(2)}.</p>`;
