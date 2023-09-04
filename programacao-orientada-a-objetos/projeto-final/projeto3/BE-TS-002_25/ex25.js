class Categoria {
    constructor(nome) {
        this.nome = nome;
    }
}

class Artigo {
    constructor(titulo) {
        this.titulo = titulo;
        this.categoria = null;
    }

    setCategoria(categoria) {
        if(categoria instanceof Categoria) {
            this.categoria = categoria
        } else {
            throw new Error("O parâmetro deve ser uma instância da classe Categoria");
        }

        return categoria.nome
    }
}


const categoria = new Categoria("Javascript");
const artigo = new Artigo("Orientação a Objetos");

artigo.setCategoria(categoria);

console.log(categoria.nome); // Javascript
console.log(artigo.categoria.nome); // Javascript
console.log(artigo.titulo); // Orientação a Objetos