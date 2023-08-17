/*  paradigma de uma linguagem de programação uma forma de pensar no codigo, de estruturar ou modelar um certo programa
    Esse paradigma tente associar os codigos mais proximo da vida real
    
    Estes objetos no programa correspondem diretamente aos objetos atuais, tais como pessoas, máquinas, departamentos, documentos e assim por diante

    Os 4 pilares da Programação Orientada a Objetos: Abstração, Encapsulamento, Herança, Polimorfismo
*/

const conta1 = {
    titular: 'Luis',
    cpf: '111.222.333-44',
    saldo: 2000,
    sacar(valor) {
        this.saldo -= valor;
        return this; // mas nao é necessario
        /* return valor; */
    }
}

conta1.saldo
conta1.sacar(50);
conta1.sacar(50).sacar(50).sacar(50);

const conta2 = {
    titular: 'pepita',
    cpf: '321.344.918-22',
    saldo: 777,
    sacar(valor) {
        this.saldo -= valor;
        return this;
    }
}

//Forma antiga de criar objetos
/* function criarconta(titular, cpf, saldo) {
    this.titular = titular;
    this.cpf = cpf;
    saldo = saldo;
} */

// Class é forma mais usada e nova de criar objetos modelos
class Conta {
    constructor(titular, cpf, saldo) {
        this.titular = titular,
        this.cpf = cpf,
        this.saldo = saldo
    }
    sacar(valor) {
        this.saldo -= valor;
        return this;
    }
}

let conta3 = new Conta('pepita', '321.344.918-22', 777)
let conta4 = new Conta('pepita2', '321.344.918-22', 777)
let conta5 = new Conta('pepita3', '321.344.918-22', 777)
let conta6 = new Conta('pepita4', '321.344.918-22', 777)

//funcao sacar existe uma vez e esta sendo compartilha entre os objetos
// é uma estrutura reutilizavel