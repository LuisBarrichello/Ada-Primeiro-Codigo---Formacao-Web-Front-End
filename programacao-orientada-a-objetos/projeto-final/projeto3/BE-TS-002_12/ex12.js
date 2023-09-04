class Relatorio {
    static mediaSalarial(listaDeEmpregados) {
        const total = listaDeEmpregados.reduce((acc, empregado) => acc + empregado.salario, 0);
        const mediaSalarial = total / listaDeEmpregados.length
        return mediaSalarial
    }

    static menorSalario(listaDeEmpregados) {
        return listaDeEmpregados.reduce((menor, empregado) => empregado.salario < menor.salario ? empregado : menor)
    }

    static maiorSalario(listaDeEmpregados) {
        return listaDeEmpregados.reduce((maior, empregado) => (empregado.salario > maior.salario ? empregado : maior));
    }
}



class Empresa {
    listaDeEmpregados = [
    {
        nome: "João Silva",
        salario: 1500,
    },
    {
        nome: "Maria José",
        salario: 2500,
    },
    {
        nome: "Simplício Simplório",
        salario: 2400,
    },
    {
        nome: "Mario João",
        salario: 2100,
    },
    ];

    mediaSalarial() {
    return Relatorio.mediaSalarial(this.listaDeEmpregados);
    }

    menorSalario() {
    return Relatorio.menorSalario(this.listaDeEmpregados);
    }
    maiorSalario() {
    return Relatorio.maiorSalario(this.listaDeEmpregados);
    }
}


const empresa = new Empresa();

console.log(empresa.mediaSalarial());
console.log(empresa.menorSalario()); 
console.log(empresa.maiorSalario());