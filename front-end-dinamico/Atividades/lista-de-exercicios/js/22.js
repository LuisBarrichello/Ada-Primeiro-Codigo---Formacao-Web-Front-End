/* 22. Crie uma função chamada `concatenarArrays` que recebe dois ou mais arrays e os concatena em um único array usando o operador de spread. */

function concatenarArrays(...arrays) {
    return [].concat(...arrays)
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const resultado = concatenarArrays(array1, array2, array3);
console.log(resultado); 