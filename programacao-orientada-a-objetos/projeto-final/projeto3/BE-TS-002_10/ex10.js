class Animal {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
    }
    corre(velocidade) {
        this.velocidade = velocidade
    }

    pare() {
        return this.velocidade = 0
    }

    status(){
        if (this.velocidade > 0) {
            return `${this.nome} corre com velocidade ${this.velocidade}`;
        } else {
        return `${this.nome} está parado`;
        }
    }
}

class Coelho extends Animal {
    constructor() {
        super();
        this.nome = "Coelho";
    }
} 

const coelho = new Coelho();
coelho.corre(10);
console.log(coelho.status()); // Coelho corre com velocidade 10

coelho.pare();
console.log(coelho.status()); //Coelho está parado