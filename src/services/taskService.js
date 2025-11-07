import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const getAllTasks = async () => {
    return await prisma.task.findMany();
};

export const createTask = async (taskData) => {
    return await prisma.task.create({
        data: {
            text: taskData.text,
            completed: taskData.completed || false,
        },
    });
};

export const updateTask = async (taskId, taskData) => {
    return await prisma.task.update({
        where: { 
            id: parseInt(taskId)
        }, 
        data: {
            completed: taskData.completed,
        },
    });
};

export const deleteTask = async (taskId) => {
    return await prisma.task.delete({
        where: { 
            id: parseInt(taskId)
        },
    });
};