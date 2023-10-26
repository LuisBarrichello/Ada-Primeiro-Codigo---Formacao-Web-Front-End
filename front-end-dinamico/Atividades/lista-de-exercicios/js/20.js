/* 20. Crie uma função chamada `desestruturarUsuario` que recebe um objeto com as propriedades id, nome e email e retorna um novo objeto contendo apenas as propriedades id e email. */

function desestruturarUsuario(usuario) {
    const { id, email } = usuario;
    return { id, email };
}

const usuario = {
    id: 1,
    nome: 'João',
    email: 'joao@example.com'
};

const novoUsuario = desestruturarUsuario(usuario);
console.log(novoUsuario); 