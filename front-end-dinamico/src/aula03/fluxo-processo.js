
/* SINCRONA - uma tarefa só é executada depois que a anterior já tenha sido executada */
/* console.log('inicio')
for (let i = 0; i < 3; i++) {
    console.log(i)
}
console.log(fim) */

/* 
JavaScript; nele, não é possível fazer programação paralela.
*/

/* Utilizando funções assíncronas por callback: */
/* const delayedHello = function () {
    setTimeout(() => {
        console.log("Hello!");
    }, 1000);
}; */
/* setTimeout é usado para executar uma função uma vez após um atraso especificado, enquanto setInterval é usado para executar uma função repetidamente em intervalos regulares até que você o cancele explicitamente. Ambos são úteis em diferentes situações, dependendo dos requisitos do seu código. */
/* Não é possível usar o return na função assíncrona, portanto, não é possível pegar o resultado como faríamos normalmente. */


/* const fs = require('fs');
const path = require('path')
fs.readFile(path.join(__dirname, 'arquivo.txt'), 'utf-8', (erro, data) => {
    if(erro) {
        console.error('Erro ao ler arquivo', erro);
        return
    }

    console.log('Conteúdo do arquivo', data)
}) */


