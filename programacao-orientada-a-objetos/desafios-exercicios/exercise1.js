/* 
1 - Identifique as classes, atributos e métodos necessários para modelar e implementar:

    a) Uma conta corrente que possui um número, um saldo, um status que informa
se ela é especial ou não, um limite e um conjunto de movimentações.

    b) Uma movimentação que possui uma descrição, um valor e uma informação
se ela é uma movimentação de crédito ou débito.

    c) Um banco que armazene um conjunto de contas e forneça métodos que
permitam que sejam feitos criações de conta, exclusão de contas, saques
(uma conta corrente só pode fazer saque desde que o saldo remanescente não
seja negativo), depósitos, emissão de saldo e extrato e transferência entre
contas.
Feita a modelagem, utilize as idéias de herança e encapsulamento para fazer a
implementação
*/

class ContaCorrente {
    constructor(numeroDaConta, saldo, status, limite) {
        this.numeroDaConta = numeroDaConta;
        this.saldo = saldo;
        this.status = status;
        this.limite = limite
    }

    sacar(valor, tipoDaMovimentacao) {
        if(tipoDaMovimentacao !== 'crédito' && tipoDaMovimentacao !== 'debito') throw new Error('Saldo da conta insuficiente');
        if(valor > this.saldo) throw new Error('Saldo da conta insuficiente');
        this.saldo -= valor
        console.log(`Você sacou ${valor} da sua conta, seu saldo atual é ${this.saldo}`)
        return this.saldo;
    }
}