class Usuario {
    usuarios = ["mario@luigi.com", "peach@apple.com"];

    constructor(email) {
        this.email = email;
    }

    esqueciSenha(email) {
        if (this.usuarios.includes(email)) {
            return EsqueciSenhaUtils.gerarToken(email);
        } else {
            return "E-mail não encontrado";
        }
    }

    validarToken(email, token) {
        return EsqueciSenhaUtils.validarToken(email, token);
    }
}

class EsqueciSenhaUtils {
    static tokens = {};

    static gerarToken(email) {
        const token = Math.floor(Math.random() * 10).toString();
        this.tokens[email] = Number(token)
        return token;
    }

    static validarToken(email, token) {
        return this.tokens[email] !== undefined && this.tokens[email] === Number(token);
    }
}

const usuario = new Usuario('email@email.com')
const usuario1 = new Usuario('mario@luigi.com')

console.log(usuario.esqueciSenha('email@email.com'))
console.log(usuario1.esqueciSenha('mario@luigi.com'))
console.log(usuario1.validarToken('mario@luigi.com', 5))
