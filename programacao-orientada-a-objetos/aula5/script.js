class MapComFilter extends Map {
    filter(callback) {
        const novoMap = new MapComFilter();
        this.forEach((valor, chave) => {
            const resultado = callback(valor, chave);
            if(resultado) {
                novoMap.set(chave, valor)
            }
        });
        return novoMap;
    }
}

class Biblioteca extends MapComFilter{

    set(chave, valor){
        if(!(valor instanceof Livro)) {
            throw new Error('livro precisa ser uma instancia de Livro')
        }
        return super.set(chave, valor)
    }

    carregarLivro(livro) {
        const novoLivro = new Livro(livro.nome, livro.descricao, livro.autor, this);
        this.set(novoLivro.nome, novoLivro.descricao);
    }
}

class Autores extends Map {
    criarAutor(nome) {
        const autor = new Autor(nome)
        return this.set(autor.nome)
    }
}

class Autor {
    constructor(nome) {
        this.nome = nome;
    }
}

class Livro {
    #autor
    #autorclasse
    constructor(nome, descricao, autor, biblioteca) {
        this.nome = nome;
        this.descricao = descricao;
        this.#autor = autor;
        this.#autorclasse;
        this.biblioteca = biblioteca;
    }

    get autor() {
        if(!this.#autorclasse) {
            this.#autorclasse = new Autor(this.#autor);
        }
        return this.#autorclasse
    }

    buscarDoMesmoAutor(livro) {
        return this.biblioteca.filter(item => item.autor.nome === this.autor.nome);
    }
}


const minhaBiblioteca = new Biblioteca();
const json = require("./biblioteca.json") //require para importar com node.js

for(const item of json) {
    minhaBiblioteca.carregarLivro(item)
}

const livro123 = minhaBiblioteca.get('harry')

minhaBiblioteca.set(meuLivro.nome, meuLivro.descricao);
console.log(livro123)


//dependencia circular, uma coisa esta dentro da outra, e essa outra tem um link para primeira coisa que estavamos, um circulo de dependencia, o caso uma coisa seria um livro, dentro da biblioteca onde essa biblioteca tem o livro que estavamos