import express from "express";
import { getUsuario, loginUsuario } from "../controllers/usuarioController";
import { authenticate } from "../middlewares/authMiddleware";

const router = express.Router();

// Rota para obter todos os usuários (Necessita de autenticação)
router.get('/',authenticate, getUsuario);

/* Abaixo teria todas as outras rotas (Códigos) que são necessárias para uma API,
também sendo necessário incluir o controller (POST, PUT, DELETE),
porém na de usuário é somente um "Escopo" de como poderia ser feito.  */

export default router;