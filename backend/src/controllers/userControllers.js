import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import userService from '../services/userServices.js';
import dotenv from 'dotenv'
dotenv.config()

async function register(req, res) {
        try{
                const {nome, email, senha} = req.body;
                const usuarioExistente = await userService.buscarUsuarioPorEmail(email);
                if(usuarioExistente){
                        return res.status(400).json({message: 'Email já registrado.'});
                }
                const senhaHashed = await bcrypt.hash(senha, 16);
        await userService.criarUsuario(nome, email, senhaHashed);

        res.status(201).json({message: 'Usuário criado com sucesso.'});
        }
        catch(err){
                res.status(500).json({message: 'Erro ao criar usuário.', error: err.message})
        }

}

async function login(req, res){
        try{
                const{email, senha} = req.body;
                if(email.includes('@')){
                }
                else{
                        console.error("E-mail inválido. insira o '@'.")
                }
                const usuario = await userService.buscarUsuarioPorEmail(email);
                if(!usuario){
                        return res.status(401).json({message: 'Informações inválidas.'});
                }
                const senhaCorreta = await bcrypt.compare(senha, usuario.senha_hash);
                if(!senhaCorreta){
                        return res.status(401).json({message: 'Informações inválidas.'});
                }

                const token = jwt.sign(
                        {id: usuario.id, email: usuario.email},
                        process.env.JWT_SECRET,
                        {expiresIn: '30d'}
                )
                res.status(200).json({message: 'Login bem-sucedido', token});
        } catch(err){
                res.status(500).json({message: 'Erro no login.', error: err.message})
        }
}

export default {
        register,
        login,
}

