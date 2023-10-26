/* 12. Crie uma função chamada `intervaloPersonalizado` que executa uma função a cada intervalo de tempo especificado em milissegundos. */


function intervaloPersonalizado(runFunction, time) {
    return setInterval(runFunction, time)
};

function minhaFuncao() {
    console.log('Minha função foi executada.');
}

const example = intervaloPersonalizado(minhaFuncao, 2000);

/* clearInterval(example) */
