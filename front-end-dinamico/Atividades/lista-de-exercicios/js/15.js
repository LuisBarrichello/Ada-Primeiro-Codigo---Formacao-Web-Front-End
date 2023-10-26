/* 15. Crie uma função chamada `gerarNumerosAleatorios` que gera números aleatórios a cada 500 milissegundos e os exibe no console. */

function gerarNumerosAleatorios() {
    setInterval(() => {
        const numeroAleatorio = Math.floor(Math.random() * 10);
        console.log(numeroAleatorio)
    }, 500)
}

gerarNumerosAleatorios()