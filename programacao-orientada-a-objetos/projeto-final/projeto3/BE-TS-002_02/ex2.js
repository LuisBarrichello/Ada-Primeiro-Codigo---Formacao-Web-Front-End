class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

const pessoa = new Pessoa("Luís", "Gabriel");
console.log(pessoa.nomeCompleto()); // Deve imprimir 'Luís Gabriel'