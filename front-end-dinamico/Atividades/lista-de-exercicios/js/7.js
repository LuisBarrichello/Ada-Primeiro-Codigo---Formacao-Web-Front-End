/* 7. Crie uma função chamada `delayedPromise` que retorna uma promise que é resolvida após um atraso de 1 segundo. */


function delayedPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('1s');
            resolve();
        }, 1000)
    })
}


delayedPromise()
    .then(() => {
        console.log('Promise resolvida após 1 segundo.');
    })
    .catch((error) => {
        console.error('Ocorreu um erro:', error);
    })