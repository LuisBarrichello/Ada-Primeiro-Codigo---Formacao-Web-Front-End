class Usuario{
    #password
    constructor(email, password) {
        this.email = email;
        this.#password = password;
        this.tentativas = 0;
        this.statusDaConta = 'ativa'
    }


    login(email, password) {
        if(email === this.email && password === this.#password) {
            return "Login realizado com sucesso";
        } else if(!(email === this.email && password === this.#password)){
            this.tentativas++;
            if(this.tentativas >= 3) {
                this.statusDaConta = 'bloqueada'
                return 'Conta bloqueada, contate o suporte'
            }
            return "Falha na autenticação";
        }
    }
}


const js = new Usuario("j@vascript.com", "123ABC");
console.log(js.login("j@vascript.com", "123ABC")); // Login realizado com sucesso
console.log(js.login("j@vascript.com", "123")); // Falha na autenticação
console.log(js.login("j@vascript.com", "123")); // Falha na autenticação
console.log(js.login("j@vascript.com", "123")); // Conta bloqueada, contate o suporte