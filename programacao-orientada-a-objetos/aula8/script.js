class MinhaClass {
    static retornar2Mais2() {
        return "static";
    }
    retornar3Mais2() {
        return "static";
    }
}

const minhaclass = new MinhaClass();

minhaclass.retornar3Mais2();
MinhaClass.retornar2Mais2(); //qnd static, somente a class tem acesso ao atributo ou metodos

class Carro {
    static carrosCriados = 0;
    constructor(cor) {
        this.cor = cor;
        Carro.carrosCriados++;
    }
}

const carro1 = new Carro("prata");
const carro2 = new Carro("preto");

Carro.carrosCriados; // 2

//static se torna uma propriedade do objeto

class MinhaClasse {
  // Este é um método estático
    static metodoEstatico() {
        console.log("Este é um método estático.");
    }
}

// Você pode chamar o método estático diretamente na classe, sem criar uma instância
MinhaClasse.metodoEstatico(); // Saída: "Este é um método estático."

// Você não pode chamar o método estático em uma instância da classe
const instancia = new MinhaClasse();
instancia.metodoEstatico(); // Isso geraria um erro, pois o método é estático
