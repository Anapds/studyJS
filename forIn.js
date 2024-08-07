const frutas = ['Pera', 'uva', 'maçã'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

const frutass = ['morango', 'banana', 'mamão'];

for (let i in frutas) {
    console.log(frutass[i]);
}

const pessoa = {
    nome: 'ana',
    sobrenome: 'santos',
    idade: 20
};

for (let chave in pessoa) {
    console.log(chave, (pessoa[chave]));
}


// for classico - Geralmente com ieráveis (array ou strings)

// for in - retorna o indice ou chave (string, array ou objetos)

// for of - retorna o valor em si (iteraveis, arrays ou strings)

// Objetos iteráveis são aqueles que implementam o protocolo de iteração, permitindo que seus elementos sejam percorridos um a um. Em JavaScript, muitos tipos de dados são iteráveis por padrão, incluindo arrays, strings, conjuntos (Set), mapas (Map) e objetos como o objeto arguments dentro de funções.