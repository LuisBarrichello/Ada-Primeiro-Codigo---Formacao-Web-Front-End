/* 14. Crie uma função chamada `pararContador` que interrompe o contador iniciado na função anterior. */

const pararContador = (id) => {
    clearInterval(id)
}

function contadorInterval() {
    let contador = 1;
    const logInterval = setInterval(() => {
        console.log(contador++)
        if(contador > 10) {
            pararContador(logInterval)
        }
    }, 1000)
}

contadorInterval()