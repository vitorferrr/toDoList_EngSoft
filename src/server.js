import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import taskRoutes from './routes/taskRoutes.js';

import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/v1/tasks', taskRoutes);

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Documentação da Minha API',
            version: '1.0.0',
            description: 'API para o projeto de lista de tarefas',
        },
        servers: [
            {
                url: 'https://todolist-engsoft.onrender.com/api/v1/tasks', 
            },
        ],
    },
    apis: ['./src/routes/*.js'], 
};

const swaggerSpecs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});