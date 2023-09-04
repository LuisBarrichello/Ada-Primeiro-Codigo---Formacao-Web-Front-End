class MeuArray extends Array{
    soma() {
        return this.reduce((acumulador, valor) => acumulador + valor, 0)
    }
}   

const array = Array(5)
array.push(5,5,5,5)

const meuArray = new MeuArray(5);
meuArray.push(5,5,5,5);
const soma = meuArray.soma()
console.log(soma) //20

class MeuMap extends Map {
    map(callback) {
        const novoMap = new MeuMap();
        this.forEach((valor, chave) => {
            const resultado = callback(valor, chave);
            novoMap.set(chave, resultado);
        });
        return novoMap;
    }
}

const meuMap = new MeuMap();
meuMap.set('chave1', 10)
meuMap.set('chave2', 10)

const novomap = meuMap.map((valor, chave) => {
    return valor + 1;
})

console.log(novomap)

//podemos usar para alterar:
/* Map
Set
Array
Object
Date 
Proxy
String
Number
Function
bigInt
*/