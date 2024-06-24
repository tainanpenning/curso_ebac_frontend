const form = document.getElementById('formulario');
const primeiroNumero = document.getElementById('primeiro-numero');
const segundoNumero = document.getElementById('segundo-numero');
const mensagemSucesso = document.querySelector('.success-message');
const mensagemErro = document.querySelector('.error-message');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorPrimeiroNumero = Number(primeiroNumero.value);
    const valorSegundoNumero = Number(segundoNumero.value);

    const mensagemErroTexto = `Incorreto! O ${valorPrimeiroNumero} é maior que o ${valorSegundoNumero}.`;
    const mensagemSucessoTexto = `Correto! O ${valorPrimeiroNumero} é menor que o ${valorSegundoNumero}.`;

    if (valorSegundoNumero <= valorPrimeiroNumero) {

        mensagemErro.innerHTML = mensagemErroTexto;
        mensagemErro.style.display = 'block';
        mensagemSucesso.style.display = 'none';

    }else {

        mensagemSucesso.innerHTML = mensagemSucessoTexto;
        mensagemSucesso.style.display = 'block';
        mensagemErro.style.display = 'none';

    }
})