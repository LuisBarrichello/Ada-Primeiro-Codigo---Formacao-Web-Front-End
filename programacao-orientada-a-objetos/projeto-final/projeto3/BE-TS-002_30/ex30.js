class Aluno {
    nome;
    constructor(nome) {
    this.nome = nome;
    }
}

class Professor {
    nome;
    constructor(nome) {
    this.nome = nome;
    }
}

class Escola {
    pessoas = [];

    add(pessoa) {
    this.pessoas.push(pessoa);
    }

    listarProfessores() {
    return UtilsFiltrar.porTipoDeClasse(this.pessoas, Professor);
    }

    listarAlunos() {
    return UtilsFiltrar.porTipoDeClasse(this.pessoas, Aluno);
    }
}


class UtilsFiltrar {
    static porTipoDeClasse(pessoas, classe) {
        return pessoas.filter(pessoa => pessoa instanceof classe);
    }
}


const escola = new Escola();
escola.add(new Professor("João Prof"));
escola.add(new Professor("Maria Profa"));
escola.add(new Aluno("João"));
escola.add(new Aluno("Maria"));

console.log(escola.listarProfessores());
// [
//   { nome: "João Prof" },
//   { nome: "Maria Profa" },
// ]

console.log(escola.listarAlunos());
/* [ Aluno { nome: 'João' }, Aluno { nome: 'Maria' } ] */