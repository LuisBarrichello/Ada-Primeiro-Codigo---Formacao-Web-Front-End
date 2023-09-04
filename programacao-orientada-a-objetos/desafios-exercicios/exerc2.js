/* crie uma classe Calculadora, com métdos aritmeticos, por exemplo adicionar(), subtrair(), multiplicar(), etc... O construtor da classe deve receber um numero inicial, e depois os métodos devem modificar esse numero,  por fim um método resultado() para retornar o valor final.
exemplo de utilizaçao:
const calculadora = new Calculadora(52);
const resultado = calculadora.adicionar(50).subtrair(10).multiplicar(2).resultado() */

class Calculadora {
    constructor(numeroInicial) {
        this.numeroAtual = numeroInicial;
    }
0
    adicionar(numeroAdicional) {
        this.numeroAtual += numeroAdicional;
        return this; 
    }

    subtrair(numeroSubtrair) {
        this.numeroAtual -= numeroSubtrair;
        return this; 
    }

    multiplicar(numeroAdicional) {
        this.numeroAtual *= numeroAdicional;
        return this; 
    } 

    dividir(numeroAdicional) {
        this.numeroAtual /= numeroAdicional;
        return this; 
    }

    resultado() {
        return this.numeroAtual;
    }
}

const calculadora = new Calculadora(52);
const resultado = calculadora.adicionar(50).subtrair(10).multiplicar(2).dividir(2).resultado();
console.log(resultado); 
