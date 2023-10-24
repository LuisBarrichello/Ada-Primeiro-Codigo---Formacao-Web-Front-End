/* 4. Crie uma função chamada `contarPropriedades` que recebe um objeto e retorna o número de propriedades no objeto. */

const pessoa = {
    nome: "Luís",
    idade: 30,
    cidade: "São Paulo"
};

function contarPropriedades(objeto) {
    let contador = 0;
    for (const propriedade in objeto) {
        contador++;
    };
    return contador
}

const numeroDePropriedades = contarPropriedades(pessoa);
console.log(numeroDePropriedades); // Saída: 3