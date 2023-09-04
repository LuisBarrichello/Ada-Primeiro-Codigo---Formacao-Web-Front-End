
/* SUBCLASS */
//principio da herença

class ClassMae {
    #numero
    constructor(meuNumero) {
        if(this.constructor.name === 'ClassMae') throw Error('nao pode ser instanciada diretamente')
        this.#numero = meuNumero;
        this.string = 'abc'
    }

    meuMetodo() {
        return this.numero
    }
}

//tudo que tiver na class ClassMae, vai ter na class Filha, mas ClassMae nao tera as de Filha
//
class Filha extends ClassMae {
    constructor(meuNumero){
        super(meuNumero = 2);//2 funcoes, funcao principal é rodar a class da qual essa class esta sendo extendida, logo class A nesse exemplo.
        //super é uma copia do construtor da classMae
        this.nulo = null;
    }

    metodoFilha() {
        //posso alterar metodo extendente de uma class, polimorfismo
        // atributo ClassMae
        /* return this.string */


        return super.meuMetodo().toString() // retorna a funcionalidade do metodo original da class extendida, essa é a segunda funcao do super
    }
}
//primeiro vai buscar class ClassMae, instaciar ClassMae e dps ir para class Filha e fazer mesma coisa
const filha = new Filha();

class ClassNeta extends Filha {
    constructor() {
        super();
        this.array = [];
    }
}

const neta = new ClassNeta;
neta.array
neta.nulo
neta.numero
neta.string
neta.meuMetodo() // metodo tbm sao herdados


//POLIMORFISMO
//metodos das nossas class pode ser alterado pelas subclass para fazer determinada funcao
//altera um metode de cada subclass depende de cada tipo de necessidade



class FormaGeometrica {
    calcularArea() {
    }
}

class Retangulo extends FormaGeometrica {
    calcularArea(altura, largura) {
        return altura * largura
    }
}

class Triangulo extends FormaGeometrica {
    calcularArea() {
        return (base * altura) / 2
    }
}

const triangulo = new Triangulo();
const retangulo = new Retangulo();
triangulo.calcularArea();
retangulo.calcularArea();

//duvida? tem como verificar por exemplo num sistema grande, ver de qual class uma subclass esta sendo extendida?