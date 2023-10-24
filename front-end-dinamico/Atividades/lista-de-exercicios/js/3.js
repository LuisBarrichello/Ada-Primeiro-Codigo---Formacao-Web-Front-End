/* 3. Crie uma função chamada `mediaArray` que recebe um array de números e retorna a média dos valores. */

const arrayNumeros = [1,2,3,4,5,6,7,8,9]

function mediaArray(arr) {
    const total = arr.reduce((accumulator, number) => accumulator + number, 0);
    return total / arr.length;
}

console.log(mediaArray(arrayNumeros))