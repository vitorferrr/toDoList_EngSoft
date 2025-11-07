import express from 'express';
import {
    listTasks,
    addTask,
    updateTaskStatus,
    removeTask
} from '../controllers/taskController.js';

const router = express.Router();

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