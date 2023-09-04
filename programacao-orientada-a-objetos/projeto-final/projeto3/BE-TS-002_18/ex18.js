class Escola {
    constructor() {
        this.listaAlunos = []
    }

    adicionar(nome, nota) {
        return this.listaAlunos.push({nome: nome, nota: nota})
    }

    notasBaixas() {
        const notaMinima = 5
        return this.listaAlunos.filter((aluno) => {
            return aluno.nota <= notaMinima
        })
    }
}

const escola = new Escola();
escola.adicionar("João", 10);
escola.adicionar("Maria", 5);
console.log(escola.notasBaixas()); //[{ nome: "Maria", nota: 5 }];