function criarPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const eu = criarPessoa('ana', 'Santos', '20');

console.log(eu.nome);

const pessoa2 = {
    nome:'ana',
    sobrenome: 'paula',
    idade: 20,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa2.fala();
pessoa2.incrementaIdade();