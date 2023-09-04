class Analisador {
    constructor() {
        this.baseDeDados = []
    }

    mesclar(names, emails) {
        if (names.length !== emails.length) {
            throw new Error("Os arrays de nomes e e-mails devem ter o mesmo tamanho");
        }

        this.baseDeDados = names.map((name, index) => ({
            name,
            email: emails[index]
        }))
    }

    listarMesclados() {
        return [...this.baseDeDados]
    }
}

const names = ["João", "Mário"];
const emails = ["joao@gmail.com", "mario@msn.com"];

const analisador = new Analisador();
analisador.mesclar(names, emails);
console.log(analisador.listarMesclados());; // [ { email: "joao@gmail.com", name: "João" }, { email: "mario@msn.com", name: "Mário" }]
