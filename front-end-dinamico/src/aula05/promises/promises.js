/* Promise, como diz o nome, é uma promessa
    Temos que passar duas funções para a promise, uma no caso de tudo ter dado certo (igual ao callback que vimos antes), e uma outra para o caso da promessa não poder ser cumprida (quando tivermos erros).

    Elas são uma maneira de lidar com tarefas que podem levar algum tempo para serem concluídas, como a leitura de um arquivo, uma requisição HTTP ou qualquer outra operação que não seja imediata

    As promises geram novas promises, ou seja, elas criam novas promises com o resultado da aplicação de seu callback, o que permite encadeamento.

    O método then() é por onde passamos o callback, e o método catch() é por onde passamos a função para o caso de erro.

    then() retorna uma nova promise com o resultado da aplicação de nossa função. Na prática, podemos encadear novos then() ou um catch()

    somarAsync(10, 20)
        .then((res) => console.log(res))
        .catch((err) => console.error(err));

    Lendo em português, seria: faça a soma de 10 e 20, então (then) mostre na tela (console.log); ou, se der errado, capture o erro (catch) e mostre o erro no console (console.error).
*/

/**
 * Realiza uma operação utilizando a função fornecida.
 *
 * @param {number} a - O primeiro operando.
 * @param {number} b - O segundo operando.
 * @param {function} op - A função que realizará a operação.
 * @returns {number} - O resultado da operação.
 */
const operacao = (a, b, op) => op(a, b)

/**
 * Soma dois números.
 *
 * @param {number} a - O primeiro número a ser somado.
 * @param {number} b - O segundo número a ser somado.
 * @returns {number} - A soma dos dois números.
 */
const soma = (a, b) => a  + b;

/**
 * Executa uma promessa após um certo período de tempo.
 *
 * @param {function} callback - O callback a ser executado antes da resolução da promessa.
 * @param {number} tempo - O tempo em milissegundos antes da resolução da promessa.
 * @returns {Promise} - Uma promessa que resolve após o período de tempo especificado.
 */
const minhaPromise = (callback, tempo) => new Promise((resolve, reject) => { //Executor --> callback; reject callback de erro
    /**
     * Código assíncrono.
     * 1. Executa o callback.
     * 2. Se for bem-sucedido, resolve a promessa com o resultado após o tempo especificado.
     * 3. Se der errado, rejeita a promessa com um erro.
     */

    if(callback && typeof callback === 'function') {
        const resultado = callback();
        setTimeout(() => {
            if(resultado) {
                resolve(resultado)
            } else {
                reject(new Error(`Falha resultado${resultado}`))
            }
        }, tempo)
    } else {
        reject(new Error(`Falha callback = ${typeof callback}`))
    }

}) 

console.log('inicio')
minhaPromise(() => operacao(2,3, soma), 3000)
    .then((resultado) => {
        console.log("resultado", resultado)
    })
    .catch((error) => {
        if(error instanceof Error) { //boa pratica checar isntancia do erro
            console.log(error)
        }
    }
)

minhaPromise(() => operacao(10,5, soma), 6000)
    .then((resultado) => {
        console.log("resultado", resultado)
    })
    .catch((error) => {
        if(error instanceof Error) { //boa pratica checar isntancia do erro
            console.log(error)
        }
    }
)

minhaPromise(() => operacao(20,5, soma), 9000)
    .then((resultado) => {
        console.log("resultado", resultado)
    })
    .catch((error) => {
        if(error instanceof Error) { //boa pratica checar isntancia do erro
            console.log(error)
        }
    }
)

    console.log('fim')