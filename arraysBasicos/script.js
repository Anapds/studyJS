//                0       1         2            3       4
const alunos = ['ana', 'sofia', 'gabriel']; // Luiza, Eduardo

// console.log(alunos instanceof Array);  A expressão instanceof Array é usada para verificar se um objeto é uma instância da classe Array.

// --------------------------------------------------------

// alunos.push(Luiza);
// alunos.push(Eduardo); 
// O método push em JavaScript é usado para adicionar um ou mais elementos ao final de um array. 

// ----------------------------------------------------------

// console.log(alunos.slice(0, -2)); 

// O método slice em JavaScript é usado para retornar uma cópia superficial de uma porção de um array em um novo array. A porção é selecionada a partir de um índice inicial até um índice final (não incluído), onde os índices são especificados como parâmetros ao método.
let frutas = ["maçã", "banana", "laranja", "uva", "manga"];
let citricos = frutas.slice(1, 3);

console.log(citricos); // ["banana", "laranja"]


// --------------------------------------------------------------

// console.log(alunos[50]); vai dar undefineld

// delete alunos [1]; vai ficar um elemento vazio.
// console.log(alunos[1]);

// const removido = alunos.shift(); remover um elemento do começo.
// console.log(removido);

// alunos.unshift('Fabio'); Adiciona no começo
// alunos.unshifr('luiza');

// alunos.push('amora'); Adiciona no fim
// alunos.push('sarina');

// alunos[alunos.length] = 'Amora'; Adiciona no fim do array e ver o tamanho.

// alunos[0] = 'Paula'; Alterei ana por paula
// alunos[5] = 'Sabrina'; adicionando

// Operação ternaria
// (condição) ? 'if' : 'else';

// em vez de usar o if e o else nos usaremos a condição ternaria que seria assim:
// const pontuacaoUsuario = 1000;
// const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Nivel vip' : 'nivel normal';
// console.log(nivelUsuario);