/* Exercício 1.2. [deite] Crie uma classe chamada Invoice que possa ser utilizado por uma loja de suprimentos
de informática para representar uma fatura de um item vendido na loja. Uma fatura deve incluir as seguintes
informações como atributos:
• o número do item faturado,
• a descrição do item,
• a quantidade comprada do item e
• o preço unitário do item.
[x] - Sua classe deve ter um construtor que inicialize os quatro atributos. 
[x] - Se a quantidade não for positiva, ela deve ser configurada como 0. 
[x] - Se o preço por item não for positivo ele deve ser configurado como 0.0. 
[x] - Forneça um método set e um método get para cada variável de instância. 
[x] - Além disso, forneça um método chamado getInvoiceAmount que calcula o valor da fatura (isso é, multiplica a quantidade pelo preço por item) e depois retorna o valor como um double. 
[x] - Escreva um aplicativo de teste que demonstra as capacidades da classe Invoice.
 */

class Invoice {
    #codigoDoProduto;
    #descricaoDoProduto
    constructor(codigoDoProduto, descricaoDoProduto, quantidade, precoUnitario) {
        this.#codigoDoProduto = codigoDoProduto;
        this.#descricaoDoProduto = descricaoDoProduto;
        this.quantidade = quantidade < 0 ? 0 : quantidade;
        this.precoUnitario = precoUnitario < 0 ? 0.0 : precoUnitario;
    }

    get numeroProduto() {
        return this.#codigoDoProduto;
    }
    
    set numeroProduto(numeroProdututo) {
        throw new Error('Não é permitido alterar código do produto');
    }

    get descricaoDoItem() {
        return this.#descricaoDoProduto
    }

    set descricaoDoItem(descricaoDoItem) {
        throw new Error('Não é permitido alterar a descrição do produto');
    }

    get quantidadeVendida() {
        return this.quantidade
    }

    set quantidadeVendida(quantidade) {
        const quantidadeNova = quantidade < 0 ? 0 : quantidade;
        this.quantidade = quantidadeNova
        if(this.quantidade === 0) throw new Error(`Quantidade não pode ser zero`)
        return this.quantidade
    }

    get precoUnitarioProduto() {
        return this.precoUnitario
    }

    set precoUnitarioProduto(preco) {
        const precoNovo = preco < 0 ? 0 : preco;
        this.precoUnitario = preco;
        if(preco === 0) throw new Error('Preço não pode ser 0')
        return this.precoUnitario
    }

    getInvoiceAmount() {
        const valorFatura = this.quantidade * this.precoUnitario
        return parseFloat(valorFatura).toFixed(2)
    }
}

const invoice3 = new Invoice(5, 'produto', 2, 25)
console.log('codigo: ' + invoice3.numeroProduto)
//invoice3.numeroProduto = 1;

invoice3.getInvoiceAmount()


// Criando objetos Invoice e testando funcionalidades
const invoice1 = new Invoice(1, 'Produto A', 2, 25);
const invoice2 = new Invoice(2, 'Produto B', 3, 15.5);

console.log('Detalhes da Invoice 1:');
console.log('Código do produto:', invoice1.numeroProduto);
console.log('Descrição do produto:', invoice1.descricaoDoItem);
console.log('Quantidade vendida:', invoice1.quantidadeVendida);
console.log('Preço unitário:', invoice1.precoUnitarioProduto);
console.log('Valor da fatura:', invoice1.getInvoiceAmount());

console.log('\nDetalhes da Invoice 2:');
console.log('Código do produto:', invoice2.numeroProduto);
console.log('Descrição do produto:', invoice2.descricaoDoItem);
console.log('Quantidade vendida:', invoice2.quantidadeVendida);
console.log('Preço unitário:', invoice2.precoUnitarioProduto);
console.log('Valor da fatura:', invoice2.getInvoiceAmount());

// Teste de tentativa de alteração de propriedades protegidas
try {
    invoice1.numeroProduto = 10; // Tentar alterar o código (irá lançar um erro)
} catch (error) {
    console.log('\nErro ao tentar alterar o código do produto:', error.message);
}

try {
    invoice2.descricaoDoItem = 'Nova descrição'; // Tentar alterar a descrição (irá lançar um erro)
} catch (error) {
    console.log('Erro ao tentar alterar a descrição do produto:', error.message);
}