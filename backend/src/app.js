import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(express.json());
app.use('/usuario', userRoutes);

console.log(process.env.DB_USER)

export default app;
