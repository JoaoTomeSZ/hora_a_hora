import express from 'express';
const router = express.Router();
import userController from '../controllers/userControllers.js'
import autenticarToken from '../middlewares/tokenAuth.js';

router.post('/registro', autenticarToken, userController.register);
router.post('/login', autenticarToken, userController.login)

export default router;