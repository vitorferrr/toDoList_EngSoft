import * as taskService from '../services/taskService.js';

export const listTasks = async (req, res) => {
    try {
        const tasks = await taskService.getAllTasks();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addTask = async (req, res) => {
    try {
        const taskData = req.body;
        const newTask = await taskService.createTask(taskData);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateTaskStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const taskData = req.body;

        const updatedTask = await taskService.updateTask(id, taskData);
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const removeTask = async (req, res) => {
    try {
        const { id } = req.params;
        await taskService.deleteTask(id);
        res.status(204).send(); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};