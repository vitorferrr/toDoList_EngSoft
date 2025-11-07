import express from 'express';

const router = express.Router();

/**
 * @swagger
 * /api/v1/users:
 * get:
 * summary: Lista todos os usuários
 * description: Retorna uma lista de todos os usuários cadastrados.
 * responses:
 * '200':
 * description: Uma lista de usuários.
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * type: object
 * properties:
 * id:
 * type: integer
 * example: 1
 * name:
 * type: string
 * example: 'João da Silva'
 */

import { listUsers, addUser } from '../controllers/userController.js';
router.get('/', listUsers);
router.post('/', addUser);


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