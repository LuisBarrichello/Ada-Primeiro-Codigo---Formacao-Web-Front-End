class Extrato {
    constructor() {
        this.relatorioInfos = [];
    }

    transacao(tipo, valor) {
        if(tipo === 'D') {
            return this.relatorioInfos.push({D: valor})
        } else {
            return this.relatorioInfos.push({C: valor})
        }
    }

    relatorio() {
        return this.relatorioInfos
    }
}

class CaixaEletronico extends Extrato {
    saldo = 0;

    depositar(value) {
        this.saldo += Number(value);
        this.transacao("C", value);
    }

    retirar(value) {
        this.saldo -= Number(value);
        this.transacao("D", value);
    }

    extrato() {
        return this.relatorio();
    }
}


const caixa = new CaixaEletronico();
caixa.depositar(100);
caixa.depositar(200);
caixa.retirar(200);
console.log(caixa.extrato());