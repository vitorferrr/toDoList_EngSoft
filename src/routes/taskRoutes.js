import express from 'express';
import {
    listTasks,
    addTask,
    updateTaskStatus,
    removeTask
} from '../controllers/taskController.js';

const router = express.Router();

/**
 * @swagger
 * /api/v1/tasks:
 * get:
 * summary: Lista todas as tarefas
 * description: Retorna uma lista de todas as tarefas cadastradas.
 * responses:
 * '200':
 * description: Uma lista de tarefas.
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
 * text:
 * type: string
 * example: 'Lavar a louça'
 * completed:
 * type: boolean
 * example: false
 * createdAt:
 * type: string
 * format: date-time
 */
router.get('/', listTasks);

/**
 * @swagger
 * /api/v1/tasks:
 * post:
 * summary: Cria uma nova tarefa
 * description: Adiciona uma nova tarefa à lista.
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * text:
 * type: string
 * example: 'Passear com o cachorro'
 * responses:
 * '201':
 * description: A tarefa foi criada com sucesso.
 */
router.post('/', addTask);

// (O resto das rotas)
router.patch('/:id', updateTaskStatus); 
router.delete('/:id', removeTask); 

export default router;