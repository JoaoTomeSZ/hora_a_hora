import db from '../config/database.js'

async function inserirValorHora(idUsuario, valorHora){
        return new Promise((resolve, reject) => {
                const query = 'INSERT INTO configuracao_usuarios (usuario_id, valor_hora) VALUES (?, ?)';
                db.query(query, [idUsuario, valorHora], (err, results) => {
                        if(err) return reject(err);
                        resolve(results);
                })
        })
}

async function novoValorHora(idUsuario, valorHora){
        return new Promise((resolve, reject) => {
                const query = 'UPDATE configuracao_usuarios SET valor_hora = ? WHERE usuario_id = ?';
                db.query(query, [valorHora, idUsuario], (err, results) => {
                        if(err) return reject(err);
                        resolve(results);
                })
        })
}

export default {
        inserirValorHora,
        novoValorHora
}