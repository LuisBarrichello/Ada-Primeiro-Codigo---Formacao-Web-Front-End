/* 2. Crie uma função chamada `maiorNumero` que recebe um array de números e retorna o maior número. */
const log = console.log;
const arrayNumeros = [5,1,5,76,3];

/* primeira implementação
function maiorNumero(arr) {
    const teste = arr.sort((a, b) => b - a);
    return teste[0];
}; */

function maiorNumero(arr) {
    return Math.max(...arr)
}

log(maiorNumero(arrayNumeros))