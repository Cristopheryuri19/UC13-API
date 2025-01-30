import express  from "express";

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

// node app.js
// npx nodemon app.js