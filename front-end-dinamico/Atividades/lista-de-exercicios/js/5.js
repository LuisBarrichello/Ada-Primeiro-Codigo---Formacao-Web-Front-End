/* 5. Crie uma função chamada `juntarObjetos` que recebe dois objetos e retorna um novo objeto que combina as propriedades de ambos. */

const pessoa = {
    nome: 'Luis',
    idade: 21,
}

const enderecao = {
    cidade: 'cidade',
    estado: 'SP'
}


/* function juntarObjetos(obj1, obj2) {
    const novoObjeto = {};

    for (let chave in obj1) {
    novoObjeto[chave] = obj1[chave];
    }

    for (let chave in obj2) {
    novoObjeto[chave] = obj2[chave];
    }

    return novoObjeto
} */


function juntarObjetos(obj1, obj2) {
    const novoObjeto = {...obj1, ...obj2}
    return novoObjeto
}

const resultado = juntarObjetos(pessoa, enderecao)
console.log(resultado)