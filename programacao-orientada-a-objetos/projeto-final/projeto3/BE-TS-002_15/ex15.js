class Newsletter {
    #email
    #emailList = new Set();
    constructor(email) {
        this.#email = email;
    }


    signup(email) {
        if(this.#emailList.has(email)) {
            return `E-mail já cadastrado`
        } else {
            this.#emailList.add(email);
            return `E-mail cadastrado com sucesso`
        }
    }
}


const js = new Newsletter();
console.log(js.signup("javascripto@js.com")); // Deve imprimir 'E-mail cadastrado com sucesso'
console.log(js.signup("javascripto@js.com"));