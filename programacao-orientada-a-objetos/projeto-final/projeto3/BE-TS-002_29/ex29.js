class Newsletter {
    #email;
    constructor(email) {
        this.#email = email;
        this.listaDeInscritos = new Set()
    }
    
    inscrever(email) {
        if(this.listaDeInscritos.has(email)) {
            return "E-mail já se encontra cadastrado"
        }

        this.listaDeInscritos.add(email);
            return "E-mail cadastrado com sucesso";
    }

    cancelar(email) {
        if(this.listaDeInscritos.has(email)) {
            this.listaDeInscritos.delete(email)
            return `E-mail removido`
        }

        return `Email não encontrado`
    }
}


const js = new Newsletter();
console.log(js.inscrever("javascripto@js.com")); // E-mail cadastrado com sucesso
console.log(js.inscrever("javascripto@js.com")); // E-mail já se encontra cadastrado
console.log(js.cancelar("javascripto@js.com")); // E-mail removido
console.log(js.cancelar("javascripto@js.com")); // Email não encontrado
console.log(js.inscrever("javascripto@js.com")); // E-mail cadastrado com sucesso