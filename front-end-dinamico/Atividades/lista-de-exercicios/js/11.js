/* 11. Crie uma função chamada cancelarExecucao que recebe um identificador de
timeout e o cancela. */

function cancelarExecucao(idTimeout) {
    clearTimeout(idTimeout);
}

const meuTimeout = setTimeout(() => {
    console.log('Este log será cancelado.')
}, 500)

cancelarExecucao(meuTimeout);