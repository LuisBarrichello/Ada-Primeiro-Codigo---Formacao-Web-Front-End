const fs = require('fs');
const path = require('path')
const ARQUIVO = path.join(__dirname, 'arquivo.txt')
try {
    const data = fs.readFileSync(ARQUIVO, 'UTF-8');
    console.log(data.toLowerCase())
} catch (error) {
    console.error(error)
}

try {
    const data = fs.writeFileSync(ARQUIVO, 'Escrito via node', 'UTF-8');
} catch (error) {
    console.error(error)
}

try {
    const pedido = {
        id: 1,
        pedido: 'teste',
        dataISO: new Date().toISOString(),
        data: new Date(),
        dataToString: new Date().toString()
    }
    console.log(pedido)
} catch (error) {
    
}