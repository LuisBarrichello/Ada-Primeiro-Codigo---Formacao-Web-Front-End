/* 6. Crie uma função chamada `encontrarPropriedade` que recebe um objeto e uma chave e retorna o valor da propriedade correspondente. */

const objeto = {
    nome: 'Luis',
    idade: 21,
    cidade: 'cidade',
    estado: 'SP',
}

function encontrarPropriedade(objeto, chave) {
    return objeto[chave]
}

const result = encontrarPropriedade(objeto, 'estado')
console.log(result)