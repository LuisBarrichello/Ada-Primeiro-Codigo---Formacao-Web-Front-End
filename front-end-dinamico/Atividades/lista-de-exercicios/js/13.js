/* 13. Crie uma função chamada `contadorInterval` que inicia um contador de 1 a 10 a cada segundo e exibe o valor no console. */

function contadorInterval() {
    let contador = 1;
    const logInterval = setInterval(() => {
        console.log(contador++)
        if(contador > 10) {
            clearInterval(logInterval)
        }
    }, 1000)
}

contadorInterval()