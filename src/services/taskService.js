import { PrismaClient } from '@prisma/client';

// Inicia o cliente Prisma para se conectar ao banco
const prisma = new PrismaClient();

/**
 * Service para LER todas as tarefas do banco
 */
export const getAllTasks = async () => {
    return await prisma.task.findMany();
};

/**
 * Service para CRIAR uma nova tarefa no banco
 * @param {object} taskData - Contém os dados da tarefa (ex: { text: "..." })
 */
export const createTask = async (taskData) => {
    return await prisma.task.create({
        data: {
            text: taskData.text,
            completed: taskData.completed || false, // Garante que 'completed' seja false se não for enviado
        },
    });
};

/**
 * Service para ATUALIZAR uma tarefa existente no banco
 * @param {string} taskId - O ID da tarefa a ser atualizada
 * @param {object} taskData - Os campos a serem atualizados (ex: { completed: true })
 */
export const updateTask = async (taskId, taskData) => {
    return await prisma.task.update({
        where: { 
            id: parseInt(taskId) // Converte o ID da URL (que é string) para número
        }, 
        data: {
            completed: taskData.completed, // Atualiza o status
        },
    });
};

/**
 * Service para DELETAR uma tarefa do banco
 * @param {string} taskId - O ID da tarefa a ser deletada
 */
export const deleteTask = async (taskId) => {
    return await prisma.task.delete({
        where: { 
            id: parseInt(taskId) // Converte o ID para número
        },
    });
};