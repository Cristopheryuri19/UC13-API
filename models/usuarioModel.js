// Módulo bcrypt para criptografar senhas
import bcrypt from 'bcrypt';

//(EM cenário real seria o cando de dados)
let usuarios = [
    {
        id: 1,
        nome: 'Cristopher Bassualdo', 
        email: 'Cristopher@exemplos.com',
        senha: bcrypt.hashSync('senha123', 10),
    },
];

// Função para obter todos os usuários
export const getALLUsuarios = () => usuarios;

// Função para obter todos os usuários
export const getUsuariosBYEmail = (email) => {
    return usuarios.find((usuarios) => usuarios.email === email);
};

// Função para criar um novo usuário
export const createUsuario = (novoUsuario) => {
    const novoId = usuarios.length + 1;

    // Cria o novo usuario com dados fornecidos e senha criptografada
    const usuario = {
        ...novoUsuario,
        id: novoId,
        senha: bcrypt.hashSync(novoUsuario.senha, 10),
    };

    //adiciona o usuario
    usuario.push(usuario);

    // Retorna o usuario criado
    return usuario;
};


// Função para atualizar os dados de um usuario existente
export const updateUsuario = (id, dadosAtualizados) => {
    const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === id);

    if (usuarioIndex === -1) return null;

    usuarios[usuarioIndex] = { ...usuarios[usuarioIndex], ...dadosAtualizados };

    return usuarios[usuarioIndex];
};


// Função para excluir um usuario peli ID
export const deleUsuario = (id) => {
    const usuarioIndex = usuarios.findIndex((usuario) => usuario.id === id);

    if (usuarioIndex === -1) return null;

    const [usuarioRemovido] = usuarios.splice(usuarioIndex, 1);

    return usuarioRemovido;
};