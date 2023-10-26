/* 17. Crie uma função chamada `extrairInfo` que recebe um array de objetos, onde cada objeto contém as propriedades nome e idade. A função deve retornar um novo array contendo apenas as idades dos objetos. */
const arrayDePessoas = [
    { nome: 'João', idade: 30 },
    { nome: 'Maria', idade: 25 },
    { nome: 'Pedro', idade: 40 }
];

function extrairInfo(objetos) {
    const idades = objetos.map(objeto => objeto.idade)

    return idades
}

const infoIdades = extrairInfo(arrayDePessoas)
console.log(infoIdades)