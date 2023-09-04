class Triangulo {
    constructor(lado1, lado2, lado3) {
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    ladosValidos() {
        if (this.lado1 <= 0 || this.lado2 <= 0 || this.lado3 <= 0) {
        throw new Error("Digite um valor maior que zero");
        }
        if (
        this.lado1 + this.lado2 <= this.lado3 ||
        this.lado1 + this.lado3 <= this.lado2 ||
        this.lado2 + this.lado3 <= this.lado1
        ) {
        throw new Error("Digite valores que formem um triângulo válido");
        }
    }

    tipo() {
        try {
        this.ladosValidos();
        if (this.lado1 !== this.lado2 && this.lado2 !== this.lado3) {
            return "escaleno";
        } else if (
            (this.lado1 === this.lado2 && this.lado2 !== this.lado3) ||
            (this.lado2 === this.lado3 && this.lado1 !== this.lado2)
        ) {
            return "isosceles";
        } else if (this.lado1 === this.lado2 && this.lado2 === this.lado3) {
            return "equilatero";
        }
        } catch (error) {
        return error.message;
        }
    }
}

// Exemplo de uso:
const triangulo1 = new Triangulo(1, 2, 3);
console.log(triangulo1.tipo()); // Deve imprimir 'Digite valores que formem um triângulo válido'

const triangulo2 = new Triangulo(3, 3, 3);
console.log(triangulo2.tipo()); // Deve imprimir 'equilatero'

const triangulo3 = new Triangulo(3, 4, 4);
console.log(triangulo3.tipo()); // Deve imprimir 'isosceles'

const triangulo4 = new Triangulo(4, 5, 6);
console.log(triangulo4.tipo()); // Deve imprimir 'escaleno'
