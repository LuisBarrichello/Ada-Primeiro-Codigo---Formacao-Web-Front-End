
/* .bind() - retorna uma copia da funcao, mas com um 'this'diferente
.call() - nao retorna, executa a funcao, ele executa na hora, mas com 'this' diferente
.apply()   - executa a minhaFuncao, mas com um 'this' diferente
São metodos da class funcao
para ver o tempo de execucao do this veja a imagem na pasta
*/

function minhaFuncao() {
    //...
}
//minhaFuncao. apply ou call ou bind

//.bind():
const obj = {
    abs: 10,
    metodo() {
        console.log(this, param1)
    }
}
const obj2 = {
    abs: 50,
}

const novoMetodo = obj.metodo.bind(obj2); //substituimos o valor de this do obj para obj 2 quando executado
//cria uma copia da funcao e modifica o valor de this

//.call() - nao retorna, executa a funcao, ele executa na hora, mas com 'this' diferente
obj.metodo.call(obj2); 

/* .apply() - executa a minhaFuncao, mas com um 'this' diferente, diferenca que ele recebe um array de parametros*/
obj.metodo.apply(obj2, [1,2,34]); 


class A {
    constructor() {
        this.a = 10;
    }

    metodo() {
        this.a
    }
}

class B {
    constructor() {
        this.b = 40;
    }

    outroMetodo() {
        //..
    }
}

const minhaInst = new A();
const minhaInst1 = new B();

minhaInst.metodo.call(minhaInst1)//pegar um metodo de uma classe e executa no contexto de outra classe



const a = [1,2,3,4]
Array.prototype.filter.call(a)

const minhaNodeList = document.querySelectorAll ( ".div" ) ;//retorna um nodeList, que nao tem todas funcoes de um array

Array.prototype.filter.call(minhaNodeList, (item) => {
    //..
})

Array.from(minhaNodeList).filter(() => {})




class ABC {
    constructor()  {
        this.a.map(() => {
            this
        })

        this.a.map((function() {

        }).bind(this))//assegura que retornara this corretamente ao obj instaciado
    }
}