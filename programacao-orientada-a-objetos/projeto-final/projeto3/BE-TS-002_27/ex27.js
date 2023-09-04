class Post {
    constructor(titulo, dataPublicacao) {
    this.titulo = titulo;
    this.dataPublicacao = dataPublicacao;
    }
}

class Blog {
    constructor(post) {
        if(post instanceof Post) this.post = post;
        this.listaDePublicacoes = []
    }

    publicar(post) {
        return this.listaDePublicacoes.push(post)
    }
    antigos() {
        return this.listaDePublicacoes
            .slice()
            .sort((post1, post2) => post1.dataPublicacao - post2.dataPublicacao)
            .map((post) => post.titulo)
    }
    novos() {
        return this.listaDePublicacoes
            .slice()
            .sort((post1, post2) => post2.dataPublicacao - post1.dataPublicacao)
            .map((post) => post.titulo)
    }
}


const post1 = new Post("Como aprender mais rápido!", new Date(1988, 11, 24));
const post2 = new Post("Como desaprender mais rápido!", new Date(2006, 1, 4));
const blog = new Blog();

blog.publicar(post1);
blog.publicar(post2);

console.log(blog.antigos());
// [
//   "Como aprender mais rápido!",
//   "Como desaprender mais rápido!"
// ]

console.log(blog.novos());
// [
//   "Como desaprender mais rápido!",
//   "Como aprender mais rápido!"
// ]



