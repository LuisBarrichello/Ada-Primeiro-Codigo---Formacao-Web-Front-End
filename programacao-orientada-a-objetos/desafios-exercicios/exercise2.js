/* 
Escreva uma classe cujos objetos representam alunos matriculados em uma disciplina. Cada objeto
dessa classe deve guardar os seguintes dados do aluno: matrícula, nome, 2 notas de prova e 1 nota de
trabalho. 
Escreva os seguintes métodos para esta classe:
media calcula a média final do aluno (cada prova tem peso 2,5 e o trabalho tem peso 2)
final calcula quanto o aluno precisa para a prova final (retorna zero se ele não for para a final)
*/
class Aluno {
    constructor(matricula, nome, notasProvas = [], notaTrabalho) {
        this.matricula = matricula;
        this.nome = nome;
        this.notasProvas = notasProvas;
        this.notaTrabalho = notaTrabalho;
    }

    media() {
        const somaProvas = this.notasProvas.reduce((acumulador, nota) => acumulador + nota, 0);
        const mediaProvas = (somaProvas / this.notasProvas.length) * 2.5;
        const mediaTrabalho = this.notaTrabalho * 2;
        const mediaFinal = (mediaProvas + mediaTrabalho) / 3;
        return mediaFinal;
    }

    final() {
        const mediaMinima = 6;
        const mediaAtingida = this.media();
        const notaProvaFinal = Math.max(0, mediaMinima * 3 - mediaAtingida);
        return notaProvaFinal;
    }
}

// Exemplo de uso
const aluno1 = new Aluno(1, "João", [8, 7], 7);
console.log(`Média do aluno ${aluno1.nome}: ${aluno1.media()}`);
console.log(`Nota necessária na prova final para o aluno ${aluno1.nome}: ${aluno1.final()}`);

const aluno2 = new Aluno(2, "Maria", [6, 8, 7], 5);
console.log(`Média do aluno ${aluno2.nome}: ${aluno2.media()}`);
console.log(`Nota necessária na prova final para o aluno ${aluno2.nome}: ${aluno2.final()}`);
