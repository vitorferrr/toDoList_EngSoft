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

import express from 'express';
import {
    listTasks,
    addTask,
    updateTaskStatus,
    removeTask
} from '../controllers/taskController.js';

// Cria o roteador
const router = express.Router();

// Mapeia os verbos HTTP e rotas para as funções do Controller

// GET /api/v1/tasks - Listar todas as tarefas
router.get('/', listTasks);

// POST /api/v1/tasks - Criar uma nova tarefa
router.post('/', addTask);

// PATCH /api/v1/tasks/:id - Atualizar uma tarefa (ex: marcar como completa)
router.patch('/:id', updateTaskStatus); 

// DELETE /api/v1/tasks/:id - Deletar uma tarefa
router.delete('/:id', removeTask); 

// Exporta o roteador para ser usado no server.js
export default router;