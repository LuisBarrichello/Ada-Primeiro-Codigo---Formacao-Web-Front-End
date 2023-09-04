class Analisador {
    constructor() {
        this.dados = {
            name: "",
            email: ""
        };
    }

    adicionar(name, email) {
        this.dados.name = name;
        this.dados.email = email;
    }

    converterParaObjeto() {
        return { ...this.dados };
    }
}

// Exemplo de uso
const analisador = new Analisador();
analisador.adicionar("João", "joao@email.com");
console.log(analisador.converterParaObjeto()); // { email: "joao@email.com", name: "João" }
