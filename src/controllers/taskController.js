import * as taskService from '../services/taskService.js';

// Controller para LER (Listar) todas as tarefas
export const listTasks = async (req, res) => {
    try {
        // 2. Chama o Service para buscar os dados
        const tasks = await taskService.getAllTasks();
        // 3. Responde com os dados e o status 200 (OK)
        res.status(200).json(tasks);
    } catch (error) {
        // Em caso de erro, avisa o front-end
        res.status(500).json({ message: error.message });
    }
};

// Controller para CRIAR uma tarefa
export const addTask = async (req, res) => {
    try {
        // 1. Pega os dados (ex: { text: "..." }) do corpo da requisição
        const taskData = req.body;
        // 2. Chama o Service para criar no banco
        const newTask = await taskService.createTask(taskData);
        // 3. Responde com a tarefa criada e o status 201 (Created)
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller para ATUALIZAR uma tarefa
export const updateTaskStatus = async (req, res) => {
    try {
        // 1. Pega o ID da tarefa (da URL) e os dados (do corpo)
        const { id } = req.params;
        const taskData = req.body; // ex: { completed: true }
        
        // 2. Chama o Service para atualizar
        const updatedTask = await taskService.updateTask(id, taskData);
        // 3. Responde com a tarefa atualizada
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller para DELETAR uma tarefa
export const removeTask = async (req, res) => {
    try {
        // 1. Pega o ID da tarefa da URL
        const { id } = req.params;
        // 2. Chama o Service para deletar
        await taskService.deleteTask(id);
        // 3. Responde com sucesso, mas sem conteúdo (Status 204)
        res.status(204).send(); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};