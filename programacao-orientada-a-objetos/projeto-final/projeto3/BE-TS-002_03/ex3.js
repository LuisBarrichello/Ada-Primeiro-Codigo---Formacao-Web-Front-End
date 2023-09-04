class Pessoa {
    constructor(nome, age) {
        this.nome = nome;
        this.age = age;
    }

    sobre() {
        return `${this.nome} tem ${this.age} anos`;
    }
}

// Criar uma instância da classe Pessoa
const pessoa = new Pessoa("Luís", 21);

console.log(pessoa.sobre()); // Deve imprimir 'Luís tem 21 anos'
