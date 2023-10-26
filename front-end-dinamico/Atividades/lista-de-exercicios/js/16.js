/* 16. Crie uma função chamada `primeiroEUltimo` que recebe um array com pelo menos dois elementos e retorna um novo array contendo apenas o primeiro e o último elementos do array original. */

const arr = [1,5,4]

function primeiroEUltimo(arr) {
    if(arr.length < 2) {
        console.error('array invalido');
        return null;
    }

    const newArray = [arr[0], arr[arr.length - 1]]
    return newArray
}

const arrayPrimeiroEUltimo = primeiroEUltimo(arr)

console.log(arrayPrimeiroEUltimo)