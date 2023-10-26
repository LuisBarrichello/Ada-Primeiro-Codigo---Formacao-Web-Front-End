/* 23. Crie uma função chamada `somaNumeros` que aceita um número variável de argumentos. A função deve calcular a soma de todos os números passados como argumentos e retornar o resultado. */

function somaNumeros(...numeros) {
    return numeros.reduce((total, numero) => total + numero, 0);
}

const resultado = somaNumeros(1, 2, 3, 4, 5);
console.log(resultado);