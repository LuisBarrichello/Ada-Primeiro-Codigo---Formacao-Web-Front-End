class Estoque { 
    constructor() {
        this.estoque = new Map()
    }
    adicionar(nome, quantidade) {
        if(this.estoque.has(nome)) {
            this.estoque.set(nome, this.estoque.get(nome) + quantidade )
            return `${quantidade} item(s) adicionado(s)`
        } else {
            this.estoque.set(nome, quantidade);
            return "Produto novo adicionado";
        }
    }

    remover(nome, quantidade) {
        if(this.estoque.has(nome)) {
            this.estoque.set(nome, this.estoque.get(nome) - quantidade)
            return `${quantidade} item(s) removido(s)`
        }
        if(!this.estoque.has(nome) || this.estoque.get(nome) === 0) {
            return `Produto não encontrado.` 
        }

        if(quantidade > this.estoque.get(nome)) {
            return "Não há quantidade suficiente para remoção";
        }
    }

    listar() {
        const lista = [];

        this.estoque.forEach((quantidade, nome) => {
            lista.push({nome, quantidade})
        })

        return lista
    }
}



const estoque = new Estoque();

console.log(estoque.adicionar("Uva", 1)); // Produto novo adicionado;
console.log(estoque.adicionar("Uva", 2)); // 2 item(s) foi adicionado;
console.log(estoque.listar()); // ([{ nome: "Uva", quantidade: 3 }]);
console.log(estoque.remover("Uva", 3)); // 3 item(s) removido(s)
console.log(estoque.listar()); // ([{ nome: "Uva", quantidade: 0 }]);
console.log(estoque.remover("Uva", 1)); // Não há quantidade suficiente para remoção
console.log(estoque.remover("Laranja", 1)); // Produto não encontrado