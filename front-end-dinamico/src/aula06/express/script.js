const express = require('express');
const db = require("./db")
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Olá, mundo!');

    return res.status(200).json([
        {
            "id": "",
            "pedido": "",
            "data": "",
            "valor": "",
            "email": "",
            "previsao": ""
        }
    ])
});

app.listen(port, () => {
    console.log(`Servidor Express está rodando na porta ${port}`);
});
