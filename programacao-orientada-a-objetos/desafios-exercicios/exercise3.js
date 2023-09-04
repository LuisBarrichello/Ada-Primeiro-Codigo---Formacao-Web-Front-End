/* 
Escreva uma classe Data cuja instância (objeto) represente uma data. Esta classe deverá dispor dos seguintes métodos:
construtor -> define a data que determinado objeto (através de parâmetro), este método verifica se a data está correta, caso não esteja a data é configurada como 01/01/0001
compara ->  recebe como parâmetro um outro objeto da Classe data, compare com a data corrente e
retorne:
0 se as datas forem iguais;
1 se a data corrente for maior que a do parâmetro;
-1 se a data do parâmetro for maior que a corrente.
getDia ->           retorna o dia da data
getMes ->           retorna o mês da data
getMesExtenso ->    retorna o mês da data corrente por extenso
getAno ->           retorna o ano da data
isBissexto ->       retorna verdadeiro se o ano da data corrente for bissexto e falso caso contrário
clone ->            o objeto clona a si próprio, para isto, ele cria um novo objeto da classe Data com os
mesmos valores de atributos e retorna sua referência pelo método 
*/

class Data {
    constructor(dia, mes, ano) {
        if(this.validaData(dia, mes, ano)) {
            this.dia = dia;
            this.mes = mes;
            this.ano = ano;
        } else {
            this.dia = 1;
            this.mes = 1;
            this.ano = 1;
        }
    }

    validaData(dia, mes, ano) {
        if(dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano < 1) {
            return false
        }
        return true
    }

    comparar(outraData) {
        if(this.ano === outraData.ano && this.mes === outraData.mes && this.dia === outraData.dia) {
            return 0;
        } else if(this.ano > outraData.ano || (this.ano === outraData.ano && this.mes > outraData.mes) || (this.ano === outraData.ano && this.mes === outraData.mes && this.dia > outraData.dia)) {
            return 1
        } else {
            return -1
        }
    }

    getDia() {
        return this.dia
    }

    getMes() {
        return this.mes
    }

    getMesExtenso() {
        const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        return meses[this.mes - 1]
    }

    getAno() {
        return this.ano
    }

    isBissexto() {
        if((this.ano % 4 === 0 && this.ano % 100 !== 0) || this.ano % 400 === 0) {
            return true;
        } else {
            return false;
        }
    }

    clone() {
        return new Data(this.dia, this.mes, this.ano)
    }
}

// Exemplo de uso
const minhaData = new Data(29, 8, 2023);
const outraData = new Data(15, 6, 2023);

console.log(minhaData.getMesExtenso()); // Saída: Agosto
console.log(outraData.isBissexto()); // Saída: false


const comparacao = minhaData.comparar(outraData);
if (comparacao === 0) {
    console.log("As datas são iguais.");
} else if (comparacao === 1) {
    console.log("A primeira data é maior.");
} else {
    console.log("A segunda data é maior.");
} //A primeira data é maior.

const cloneData = minhaData.clone();
console.log(cloneData.getAno()); // Saída: 2023