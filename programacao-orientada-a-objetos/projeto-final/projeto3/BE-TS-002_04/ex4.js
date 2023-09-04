class Roupa {
    constructor(tamanho, cor) {
        this.tamanho = tamanho;
        this.cor = undefined;
    }

    sobre() {
        return `Camisa tamanho ${this.tamanho} tem a cor ${this.cor}`;
    }
}

const roupa1 = new Roupa("M");
roupa1.cor = 'azul'
console.log(roupa1.sobre()); // Deve imprimir 'Camisa tamanho M tem a cor azul'
