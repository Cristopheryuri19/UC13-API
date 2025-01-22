import carros2025 from "./tabelaCarros.js";


import express from "express";

const app = express();

app.use(express.json());

app.get('/', (requisicao, resposta) => {
    resposta.status(200).send(carros2025); // Retorna lista de carros com status 200 
});

// define a porta do servidor
app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
});

// Executa o app
// node app.js