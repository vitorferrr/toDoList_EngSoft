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

const router = express.Router();

router.get('/', listTasks);

router.post('/', addTask);

router.patch('/:id', updateTaskStatus); 

router.delete('/:id', removeTask); 

export default router;