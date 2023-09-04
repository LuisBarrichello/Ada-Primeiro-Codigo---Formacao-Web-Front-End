class Animal {
    constructor(nome, velocidade) {
        this.nome = nome;
        this.velocidade = velocidade;
    }
}

class Corrida {
    constructor(animais) {
        animais.forEach(animal => {
            if(!(animal instanceof Animal)) throw new Error('Animal precisa ser instancia da class Animal')
        });
        this.animais = animais
    }

    resultado() {
        return this.animais
            .slice()
            .sort((animal1, animal2) => animal2.velocidade - animal1.velocidade)
            .slice(0, 3)
            .map((animal) => animal.nome)
    }
}


const coelho = new Animal("Coelho", 5);
const cavalo = new Animal("Cavalo", 15);
const cheetah = new Animal("Cheetah", 25);
const onca = new Animal("Onça", 12);
const cachorro = new Animal("cachorro", 9);

const corrida = new Corrida([coelho, cheetah, cavalo, onca, cachorro]);

console.log(corrida.resultado());