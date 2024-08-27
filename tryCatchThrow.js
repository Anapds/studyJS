try {
    // quando não ha erros
} catch(e) {
    // quando tem erros
} finally {
// sempre
}

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando a instancia de date.');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try{
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(11);
    console.log(hora);
} catch(e) {
    // tratar erro
} finally {
    console.log('tenha um bom dia!');
}


try {
    console.log(naoExisto);
} catch(error) {
    console.log("naoExisto nao existr");
    console.log(error);
}

function soma(x,y) {
    if (
        typeof x !== 'number' || typeof y !== 'number'
    ) {
        throw new TypeError ('x e y precisam ser numeros');
    }
    return x + y;
}

try {
    console.log(soma(1, 3));
    console.log(soma('1', 2));
} catch(error) {
    console.log('Algo mais amigavel de se ler.');
}