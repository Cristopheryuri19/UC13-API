import carros2025 from "./tabelaCarros";


import express from "express";

const app = express();

app.use(express.json());


// define a porta do servidor
app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
});

// Executa o app
// node app.js