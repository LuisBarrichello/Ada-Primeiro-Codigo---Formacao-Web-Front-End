/*
Escreva uma classe em que cada objeto representa um vôo que acontece em determinada data e em determinado horário. 
Cada vôo possui no máximo 100 passageiros, e a classe permite controlar a ocupação das vagas. A classe deve ter os seguintes métodos:

- construtor: configura os dados do vôo (recebidos como parâmetro): número do vôo, data (para armazenar a data utilize um objeto da classe Data, criada na questão anterior);
- proximoLivre: retorna o número da próxima cadeira livre;
- verifica: verifica se o número da cadeira recebido como parâmetro está ocupada;
- ocupa: ocupa determinada cadeira do vôo, cujo número é recebido como parâmetro, e retorna verdadeiro se a cadeira ainda não estiver ocupada (operação foi bem sucedida) e falso caso contrário;
- vagas: retorna o número de cadeirasOcupadas vagas disponíveis (não ocupadas) no vôo;
- getVoo: retorna o número do vôo;
- getData: retorna a data do vôo (na forma de objeto);
- clone: o objeto clona a si próprio, para isto, ele cria um novo objeto da mesma classe e faz uma
    cópia dos valores de seus atributos.
*/
class Voo {
    constructor(numeroDoVoo, dataDoVoo = new Data, cadeirasOcupadas  = []) {
        this.numeroDoVoo = numeroDoVoo;
        this.dataDoVoo = dataDoVoo;
        this.cadeirasOcupadas = cadeirasOcupadas;
    }

    proximoLivre() {
        for (let i = 0; i < 100; i++) {
            if(!this.cadeirasOcupadas.includes(i)) {
                return i
            }  
        }
        return -1; // Todas as cadeiras estão ocupadas
    }

    verificaNumeroDaCadeira(numeroDaCadeira) {
        if(this.cadeirasOcupadas.includes(numeroDaCadeira)) {
            return true; // Cadeira ocupada
        } else {
            return false; // Cadeira livre
        }
    }

    ocupar(numeroDaCadeira) {
        if(this.cadeirasOcupadas.includes(numeroDaCadeira) || this.cadeirasOcupadas.length > 100) {
            return false; // Cadeira ocupada ou inválida
        } else {
            this.cadeirasOcupadas.push(numeroDaCadeira);
            return true; // Cadeira ocupada com sucesso
        }
    }

    vagas() {
        return 100 - this.cadeirasOcupadas.length;
    }

    getVoo() {
        return this.numeroDoVoo;
    }

    getData() {
        return this.dataDoVoo;
    }

    clone() {
        return new Voo(this.numeroDoVoo, this.dataDoVoo, this.cadeirasOcupadas)
    }
}

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

const data1 = new Data(30, 8, 2023);
const voo1 = new Voo(123, data1);

console.log("Número do voo:", voo1.getVoo());
console.log("Data do voo:", voo1.getData());

const data2 = new Data(15, 9, 2023);

voo1.ocupar(10);
voo1.ocupar(25);
voo1.ocupar(0);
voo1.ocupar(1);

console.log("Próxima cadeira livre:", voo1.proximoLivre());
console.log("A cadeira 10 está ocupada?", voo1.verificaNumeroDaCadeira(10));
console.log("A cadeira 15 está ocupada?", voo1.verificaNumeroDaCadeira(15));

console.log("Número de vagas disponíveis:", voo1.vagas());

const vooClone = voo1.clone();
console.log("Número do voo clonado:", vooClone.getVoo());
console.log("Data do voo clonado:", vooClone.getData());
