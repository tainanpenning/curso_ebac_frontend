function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return 'par';
    } else {
        return 'ímpar';
    }
}

for (let i = 0; i < 5; i++) {
    let numero = gerarNumeroAleatorio();
    let resultado = verificarParOuImpar(numero);
    console.log(`O número ${numero} é ${resultado}.`);
}