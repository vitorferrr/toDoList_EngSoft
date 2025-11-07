import express from 'express';

const router = express.Router();

// import { listUsers, addUser } from '../controllers/userController.js';
// router.get('/', listUsers);
// router.post('/', addUser);


// Rota GET: Responde a requisições GET em /api/v1/users/
router.get('/', (req, res) => {
    // (No futuro, aqui você chamará seu 'service' para buscar usuários no banco)
    console.log('Requisição GET recebida em /users');
    res.status(200).json([
        { id: 1, name: 'Usuário Teste 1' },
        { id: 2, name: 'Usuário Teste 2' }
    ]);
});

router.post('/', (req, res) => {
    // (No futuro, aqui você chamará seu 'service' para criar um usuário)
    const novoUsuario = req.body;
    console.log('Requisição POST recebida em /users com dados:', novoUsuario);

    res.status(201).json({
        message: 'Usuário criado com sucesso!',
        user: novoUsuario
    });
});

export default router;