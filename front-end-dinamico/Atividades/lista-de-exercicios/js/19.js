/* 19. Crie uma função chamada `infoPessoa` que recebe um objeto com as propriedades nome, idade e cidade. A função deve retornar uma string formatada, como "Nome: [nome], Idade: [idade], Cidade: [cidade]". */

const pessoa = {
    nome: 'Luis',
    idade: 21,
    cidade: 'Cidade'
}

function infoPessoa(pessoa) {
    const { nome, idade, cidade } = pessoa;
    return `Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`;
}

const info = infoPessoa(pessoa);
console.log(info);