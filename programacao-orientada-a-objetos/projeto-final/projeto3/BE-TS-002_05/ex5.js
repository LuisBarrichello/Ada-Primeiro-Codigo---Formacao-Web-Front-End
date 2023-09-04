class ListaDeMembros {
    static quantidade = 0
    constructor() {
        this.membros = []
    }

    adicionar(nome){
        this.membros.push(nome)
        ListaDeMembros.quantidade++;
    }

    contar() {
        return ListaDeMembros.quantidade
    }
}


const lista = new ListaDeMembros();

lista.adicionar("Luis");
lista.adicionar("Timotej");
lista.adicionar("Pepita");

console.log(lista.contar()); // Deve imprimir 3
