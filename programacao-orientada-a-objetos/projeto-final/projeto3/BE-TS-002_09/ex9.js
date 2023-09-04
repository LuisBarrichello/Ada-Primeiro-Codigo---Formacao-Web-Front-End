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

const animal = new Animal("Cachorro");
animal.corre(10);
console.log(animal.status()); 

animal.pare();
console.log(animal.status()); 