const nome = 'ana';
const sobrenome = 'Pereira';
const idade = '20';
const peso = '60';
const altura = '1.65';
let imc;
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2023 - idade; 

console.log(`${nome} ${sobrenome} tem ${idade} anos, e pesa ${peso}kg `);
console.log(`tem ${altura} de altura e seu IMC (indice de massa corporal) é de ${imc.toFixed(2)}`);
console.log(`${nome} nasceu em ${anoNascimento}`);


