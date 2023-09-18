// colocar a quantidade como atributo estático neste caso faz com que a classe não seja reutilizável, pois todas as instâncias que forem criadas vão compartilhar a mesma contagem
// com a quantidade como atributo normal ela fica mais independente e reutilizável:

class ListaDeMembros {
    constructor() {
        this.quantidade = 0
        this.membros = []
    }

    adicionar(nome){
        this.membros.push(nome)
        this.quantidade++
    }

    contar() {
        return this.quantidade
    }
}


const lista1 = new ListaDeMembros();

lista1.adicionar("Luis");
lista1.adicionar("Timotej");
lista1.adicionar("Pepita");

console.log(lista1.contar()); // Deve imprimir 3


const lista2 = new ListaDeMembros(); // não interfere mais na lista1

lista2.adicionar("Alan");

console.log(lista2.contar()); // Deve imprimir 1