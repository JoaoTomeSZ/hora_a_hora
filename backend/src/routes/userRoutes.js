import express from 'express';
const router = express.Router();
import userController from '../controllers/userControllers.js'
import autenticarToken from '../middlewares/tokenAuth.js';
import valuePerHourController from '../controllers/valuePerHourController.js';

router.post('/registro', userController.register);
router.post('/login', userController.login)
router.post('/registrar-valor-hora', autenticarToken, valuePerHourController.registrarValorHora)
router.patch('/atualizar-valor-hora', autenticarToken, valuePerHourController.atualizarValorHora)

export default router;