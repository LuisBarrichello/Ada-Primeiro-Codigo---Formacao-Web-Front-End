const sqlite = require("sqlite3");
const path = require('path');

const db = new sqlite.Database(
    path.resolve(__dirname, "pedidos.db"), 
    (erro) => {
        if(!erro) {
            criarTabela(db);
            return;
        }
        console.log('Erro ao criar banco de dados')
})

const criarTabela = (db) => {
    db.exec(`
    CREATE TABLE pedidos(
        id int primay key not null,
        pedido text not null,
        data text not null,
        valor text not null,
        email  text not null,
        previsao  text not null,
    )
    `)
}