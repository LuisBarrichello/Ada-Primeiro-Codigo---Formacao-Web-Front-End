class Usuario {
    #password
    constructor(name, username, password) {
        this.name = name;
        this.username = username;
        this.#password = password;
    }


    login(username, password) {
        if(username === this.username && password === this.#password) {
            return "Login realizado com sucesso";
        } else {
            return "Falha na autenticação";
        }
    }
}


const js = new Usuario("JavaScript", "js", "myPassw0rd!");
console.log(js.login("js", "myPassw0rd!")); // Login realizado com sucesso