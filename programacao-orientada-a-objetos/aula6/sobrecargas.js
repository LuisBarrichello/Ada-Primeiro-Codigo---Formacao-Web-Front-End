/* uma sobrecarga de metodo - qnd vc define um metodo diversas mas com parametros de retorno diferente */

class A {
    constructor(a) {
        this.a = a;
        this.b = new B(this)//referencia circular
    }

    toString() {
        return 'xyz'
    }

    valueOf() {
        return 50
    }

    toJSON() {
        return {
            a: this.a
        }
    }
}

class B {
    constructor(a) {
        this.a = a 
    }

    meuMetodo() {
        this.a.b.a.b.a.b //...
    }
}

const a1 = new A();
const a2 = new A();

console.log('a' + a1)// a [object object] qnd metodo toString nao existia
console.log('a' + a1)// axyz, de certa forma criamos um sobrecarga de operadores e transformou em string obj

console.log(1 + a1)//51


console.log(JSON.stringify(a1));// erro pq nao suporta referencia circular. qnd nao tem metodo toJSON como no obj a
console.log(JSON.stringify(a1.toJSON()))//roda

