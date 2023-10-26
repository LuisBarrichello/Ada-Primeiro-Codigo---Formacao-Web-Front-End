/* 24. Crie uma função chamada `mesclarObjetos` que aceita dois ou mais objetos como argumentos. A função deve mesclar esses objetos em um único objeto usando o operador spread e retornar o objeto resultante. Em caso de conflito de propriedades, a última propriedade encontrada deve prevalecer. */

function mesclarObjetos(...objetos) {
    return objetos.reduce((resultado, objeto) => ({...resultado, ...objeto}), {})
};

const objeto1 = { a: 1, b: 2 };
const objeto2 = { b: 3, c: 4 };
const objeto3 = { c: 5, d: 6 };

const exemplo = mesclarObjetos(objeto1, objeto2, objeto3)
console.log(exemplo)