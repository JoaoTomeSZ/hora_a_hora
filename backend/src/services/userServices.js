import db from '../config/database.js';

async function criarUsuario(nome, email, senhaHash) {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO usuarios (nome, email, senha_hash) VALUES (?, ?, ?)';
    db.query(query, [nome, email, senhaHash], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
}

async function buscarUsuarioPorEmail(email) {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, results) => {
      if (err) return reject(err);
      resolve(results[0]);
    });
  });
}

export default {
  criarUsuario,
  buscarUsuarioPorEmail,
};
