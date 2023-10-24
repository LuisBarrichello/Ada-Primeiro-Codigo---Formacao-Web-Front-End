/* 10. Crie uma função chamada `executarAposTempo` que recebe uma função e um tempo em milissegundos e a executa após o tempo especificado. */

function executarAposTempo(funcao, tempoMs) {
    setTimeout(funcao, tempoMs)
}

const logHello = () => {
    console.log('Hello');
};

executarAposTempo(logHello, 4000);