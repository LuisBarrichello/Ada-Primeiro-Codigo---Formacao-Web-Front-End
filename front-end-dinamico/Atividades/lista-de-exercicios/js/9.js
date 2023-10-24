/* 9. Crie uma função chamada `gerarNumeroAleatorio` que retorna uma promise com um número aleatório após um atraso de 2 segundos. */

function gerarNumeroAleatorio() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numeroAleatorio = Math.floor(Math.random() * 10);
            console.log(`Número gerado: ${numeroAleatorio} após 2s`);
            resolve(numeroAleatorio);
        }, 2000)
    })
}

gerarNumeroAleatorio()
    .then(numero => {
        console.log('Número gerado:', numero);
    })
    .catch(error => {
        console.error('Ocorreu um erro:', error);
    });