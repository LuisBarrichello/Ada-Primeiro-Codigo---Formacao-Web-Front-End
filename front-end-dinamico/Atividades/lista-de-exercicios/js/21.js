/* 21. Crie uma função chamada `informacoesLivro` que recebe um objeto representando as informações de um livro com as propriedades titulo, autor e ano. A função deve desestruturar o objeto para extrair essas informações e retorná-las em uma string formatada como "O livro [titulo] foi escrito por [autor] em [ano]". */

function informacoesLivro(livro) {
    const { titulo, autor, ano } = livro;

    return `O livro ${titulo} foi escrito por ${autor} em ${ano}`
}

const livro = {
    titulo: 'Aventuras de Sherlock Holmes',
    autor: 'Arthur Conan Doyle',
    ano: 1892
};

const infoLivro = informacoesLivro(livro);
console.log(infoLivro); 