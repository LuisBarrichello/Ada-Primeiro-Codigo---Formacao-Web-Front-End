/* 18. Crie uma função chamada `separarArrays` que recebe um array contendo números e o desestrutura em dois arrays: um contendo os números pares e outro contendo os números ímpares. */

const numeros = [2,4,5,76,1,8,4,1,54,98,46,1,31,86,4,5,2]

function separarArrays(arr) {
    const pares = arr.filter(num => num % 2 === 0);
    const impares = arr.filter(num => num % 2 !== 0); 

    return { impares, pares}
}

console.log(separarArrays(numeros))