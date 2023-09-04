class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

class Cidadao extends Pessoa {
    constructor(nome, idade, cpf, rg){
        super(nome, idade)
        this.cpf = cpf;
        this.rg = rg;
    }
}

const pessoa = new Pessoa("João Neto", 18);
console.log(pessoa); // Deve imprimir: Pessoa { nome: 'João Neto', idade: 18 }

const cidadao = new Cidadao("João Neto", 18, "12345678900", "1234567");
console.log(cidadao); // Deve imprimir: Cidadao { nome: 'João Neto', idade: 18, cpf: '12345678900', rg: '1234567' }