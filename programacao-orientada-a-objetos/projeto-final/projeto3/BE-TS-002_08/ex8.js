class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    saudacao() {
        return `Olá pessoa!`
    }
}

class Trabalhador extends Pessoa {
    constructor(nome, idade) {
        super(nome,idade)
    }

    saudacao() {
        return `Olá trabalhador!`
    }
}

class Aluno extends Pessoa {
    constructor(nome, idade) {
        super(nome,idade)
    }

    saudacao() {
        return `Olá aluno!`
    }
}

const pessoa = new Pessoa();
const trabalhador = new Trabalhador();
const aluno = new Aluno();

console.log(pessoa.saudacao()); 
console.log(trabalhador.saudacao()); 
console.log(aluno.saudacao()); 