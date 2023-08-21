// forma mais simples de objeto, tipo de chave e valor e pode armazenar todos tipos dados
// 

/* const conta1 = {
    nome: 'meu nome',
    cpf: '12354658779',
    saldo: 4645,
    "saldo 2": 151616, // para funcionar com notacao de ponto (objt.chave) precisa esta entre "" caso tenha espaço
} */

/* conta1["nome"]; // meu nome
conta1.nome; */ // meu nome

//Convencao class tem que começar com maiuscula
// class é uma forma de criar objeto e ajuda a criar estrutara mais completa para obejtos
/* class Conta {
    //constructor funcao da class que vai gerar e retornar objeto
    //possui todas funcoes de um  objeto, coisa que nao ocorre no objt literal
    //uma forma de criar um valor predefinido no cosntrutor
    constructor(nome, cpf, saldo = 0) {
        if(typeof saldo !== 'number') throw new Error('saldo precisa ser um numero');
        this.saldo = saldo
    }
} */

/* const conta2 = new Conta('me nome', '161816816', 76485); */

/* ------------------------------ */

class Conta {
    static #incremento = 0

    #senha;
    #cpf;

    constructor(nome, 
        cpf, 
        saldo, 
        telefone, 
        identidade, 
        senha, 
        agencia
    ) {

        const saldoNumber = Number(saldo);
        if(isNaN(saldoNumber)) {
            throw new Error('saldo precisa ser um number');
        } 
        if(saldoNumber < 0) throw new Error('saldo precisa ser maior que 0');

        this.rg = Conta.incremento++;
        this._nome = nome, // é uma convenção que sugere que a propriedade é considerada privada, ou seja, não deve ser acessada diretamente fora da classe ou do objeto que a contém. No entanto, é importante ressaltar que o JavaScript não possui um mecanismo real de encapsulamento de dados como algumas outras linguagens de programação.
        this.#cpf = cpf,
        this.saldo = saldoNumber,
        this.telefone = telefone,
        this.identidade = identidade,
        //Recursos privados em classes JavaScript referem-se a propriedades e métodos que são destinados a serem acessados apenas dentro da própria classe, mantendo-os "privados" e ocultos do código externo. Isso é útil para encapsular lógica interna e dados sensíveis, garantindo que apenas o próprio objeto possa interagir com eles.  você pode usar a sintaxe de # 
        this.#senha = senha,
        this.agencia = agencia;
    }

    /* GETTERS E SETTERS */
    //getter, sintaxe igual funcao, mas é chamada como atributo
    //pode ser util quando você precisa executar alguma lógica antes de retornar o valor de uma propriedade
    //get e set funcionando junto, mas nao precisa necessariamente usar 2
    //Em resumo, "getters" são como janelas especiais para ver valores dentro de um objeto, enquanto "setters" são como sistemas de controle para definir valores em propriedades do objeto. Eles nos ajudam a manter as coisas organizadas e seguras em nosso código.
    //get– uma função sem argumentos, que funciona quando uma propriedade é lida,
    //set– uma função com um argumento, que é chamada quando a propriedade é definida,
    //nao pode mudar propriedade caso nao exista um setter, somente ler, e nao é possivel ler se existir setter e nao um getter
    get cpf() {
        return this.#nome
    }

    validaSenha(senha) {
        if(this.#senha === senha) {
            console.log('acesso a senha')
        } else {
            throw new Error('a senha está incorreta')
        }
    }

    sacar(valor) {
        if(valor > this.saldo) {
            throw new Error('voce nao possui esse valor na conta')
        }
        if(typeof valor !== 'number') throw new Error('o valor precisa ser um numero');

        this.saldo -= valor
        return {
            novoSaldo: this.saldo,
            valorSacado: valor
        }
    }

    depositar(valor) {
        if(typeof valor !== 'number') throw new Error('o valor precisa ser um numero');

        this.saldo += valor;
        return {
            novoSaldo: this.saldo,
            valorDepositado: valor
        }
    }

    pix(contaDestino, valor) {
        if(typeof valor !== 'number') throw new Error('o valor precisa ser um numero');

        contaDestino.depositar(valor)
        this.sacar(valor)
        this.saldo -= valor;

        return `a conta ${contaDestino.nome} recebeu ${valor}`;
    }
}

/* encapsulamento --> nao deve acessar a prop de outro obj diretamente, nesse exemplo usamos metodo depositar e sacar para fazer pix, para nao acessar diretamente o obj,
abstração --> funciona junto com encapsulamento, aquilo que deve ser exposto, deve ser apenas o mais simples possivel, por exemplo esconder processos como validacoes, erros, para fornecer apenas funcao para usuario,
herança,
polimorfismo */

module.export = Conta 

const conta1 = new Conta('luis', '123.123.123-00', 404, 40028922, '0000001', 'senha123admin0', '2578/x')
const conta2 = new Conta('luis2', '123.123.123-00', 404, 40028922, '0000001', 'senha123admin0', '2578/x')

Conta.incremento


/* preview sub-class */
class A {

}

class B extends A {

}
