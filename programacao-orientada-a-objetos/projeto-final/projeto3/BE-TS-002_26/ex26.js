class Cargo {
    constructor (nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
}
class Trabalhador {
    constructor (nome, cargo) {
        this.nome = nome;
        if(cargo instanceof Cargo) {
            this.cargo = cargo
        }
    }
}
class Empresa {
    constructor(trabalhadores) {
        if(trabalhadores instanceof Trabalhador) {
            this.trabalhadores = trabalhadores;
        }
        this.listaDefuncionarios = []
    }

    contratar(trabalhador) {
        this.listaDefuncionarios.push(trabalhador)
    }

    listarFuncionarios() {
        return this.listaDefuncionarios
    }
}


const cargo = new Cargo("Programador Javascript jr", 8000);
const trabalhador1 = new Trabalhador("Mark", cargo);
const trabalhador2 = new Trabalhador("Jeff", cargo);
const empresa = new Empresa();

empresa.contratar(trabalhador1);
empresa.contratar(trabalhador2);

console.log(cargo.nome); // Programador Javascript jr
console.log(trabalhador1.cargo.nome); // Programador Javascript jr
console.log(trabalhador1.nome); // Mark
console.log(trabalhador2.cargo.nome); // Programador Javascript jr
console.log(trabalhador2.nome); // Jeff

console.log(empresa.listarFuncionarios());
// [
//   {
//     cargo: { nome: "Programador Javascript jr", salario: 8000 },
//     nome: "Mark",
//   },
//   {
//     cargo: { nome: "Programador Javascript jr", salario: 8000 },
//     nome: "Jeff",
//   },
// ]