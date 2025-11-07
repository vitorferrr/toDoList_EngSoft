import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/v1/users', userRoutes); 

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});