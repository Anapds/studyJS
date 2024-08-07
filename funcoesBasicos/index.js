// Tipos de functions

function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('ana');
console.log(variavel);

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));


const raiz = function(n) {
     return n ** 0,5;
};

console.log(raiz(9));

const raizz = n => n ** 0.5; 

console.log(raizz(9));