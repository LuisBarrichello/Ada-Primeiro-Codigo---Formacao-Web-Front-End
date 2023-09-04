class Escola {
    constructor() {
        this.listaAlunos = []
    }

    adicionar(nome, nota) {
        return this.listaAlunos.push({nome: nome, nota: nota})
    }

    media() {
        const somaNotas = this.listaAlunos.reduce((total, aluno) => total + aluno.nota, 0);
        return somaNotas / this.listaAlunos.length;
    }

    ranking() {
        return this.listaAlunos.slice().sort((a, b) => {
            b.nota - a.nota
        })
    }
}



const escola = new Escola();
escola.adicionar("João", 10);
escola.adicionar("Maria", 5);
escola.adicionar("Maurício", 7);
escola.adicionar("Alice", 7);
console.log(escola.media()); //  7.5
console.log(escola.ranking());
/* [
    { nome: 'João', nota: 10 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Maurício', nota: 7 },
    { nome: 'Alice', nota: 7 }
] */