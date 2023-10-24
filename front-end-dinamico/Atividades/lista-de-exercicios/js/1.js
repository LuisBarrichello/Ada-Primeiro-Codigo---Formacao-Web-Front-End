/* 1. Crie uma função chamada `somaArray` que recebe um array de números e retorna a soma de todos os elementos. */
const myArray = [5,7,9]

function somaArray(arr) {
    return arr.reduce((accumulator, number) => accumulator += number, 0)
}

console.log(somaArray(myArray))