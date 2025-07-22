import db from '../config/database.js'

async function inserirValorHora(valorHora){
        return new Promise((resolve, reject) => {
                const query = 'INSERT INTO configuracao_usuario (valor_hora) VALUES (?)';
                db.query(query, [valorHora], (err, results) => {
                        if(err) return reject(err);
                        resolve(results);
                })
        })
}

export default {
        inserirValorHora
}