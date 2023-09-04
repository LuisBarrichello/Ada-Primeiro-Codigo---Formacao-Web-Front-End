//estrutura para salvar dados

const map = new Map();
map.set('chave1, 10');
map.set('chave2, 20');

map.get('chave1') //10
map.delete('chave1')
map.has('chave1') //verifica se existe ou nao chave, return true or false
map.forEach((valor, chave) =>{
    //...
})
map.size()//leitura de quantidade, tipo length

new Map([
    ['chave1', 10],
    ['chave2', 20]
])
//recoemndado para funcionalidade para longo do tempo, é dinamico

const set = new Set(); //um array mais complexo, mas nao faz tudo que um array faz, uma lista
set.add('valor1');
set.add('valor2');
set.add(1)
set.has(1)
set.delete('valor1')
set.forEach(() => {
})
set.clear() //limpa lista
set.size()//leitura de quantidade, tipo length
//set nao pode conter valores duplicados

const obj = {
    chave1: 10,
    chave2: 20,
}


/* acomplamento: 
interdependencia
injecao de interdependencia

evsitar criar class dentro de outra class, e sim passar a class ja criada*/

/* REVER AULA DE  */

class Biblioteca {
    constructor(internet) {
        this.livros = new Map();
        this.internet = internet;
    }

    adicionarLivro(livro) {
        if(!(livro instanceof Livro)) {
            throw new Error('livro precisa ser uma instancia de Livro')
        }
        if(this.livroExiste(livro.nome)) {

        }

        this.livros.set(livro.nome, livro,)
    }

    livroExiste() {
        return this.livro.has(nome)
    }
} 

class Internet {
    constructor(biblioteca) {
        this.biblioteca = biblioteca
    }

    abrirSite(url) {

    }

    verificarLivroNaInternet(livro) {
        this.biblioteca.livroExiste(livro)
    }
}

class Livro {
    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
    }
}

const internet = new Internet();

const biblioteca = new Biblioteca(internet);

const meuLivro = new Livro('Harry Potter e código filosofal', 'livro magico para aprender codigos')

biblioteca.adicionarLivro(meuLivro);
biblioteca.livroExiste('Harry Potter e código filosofal 2')