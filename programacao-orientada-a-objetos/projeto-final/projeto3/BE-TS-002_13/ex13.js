class Animal {
    constructor(nome, som, onomatopeia) {
        this.nome = nome;
        this.som = som;
        this.onomatopeia = onomatopeia;
    }

    sobre() {
        return `O animal ${this.nome} faz o som de ${this.som} e sua onomatopeia é ${this.onomatopeia}`;
    }
}

class Vaca extends Animal {
    constructor() {
        super("vaca", "mugir", "muuuu");
    }
}

class Cavalo extends Animal {
    constructor() {
        super("cavalo", "relinchar", "iiirrrrí");
    }
}

class Ovelha extends Animal {
    constructor() {
        super("ovelha", "berrar", "méééé");
    }
}

const vaca = new Vaca();
const cavalo = new Cavalo();
const ovelha = new Ovelha();

console.log(vaca.sobre());
console.log(cavalo.sobre()); 
console.log(ovelha.sobre());