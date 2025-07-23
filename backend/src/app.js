import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config();

import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(cors())
app.use(express.json());
app.use('/usuario', userRoutes);

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

console.log(process.env.DB_USER)

export default app;
