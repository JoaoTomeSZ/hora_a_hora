import db from "../config/database.js";

async function adicionarHoraExtra(dados) {
  const { usuario_id, data_registro, horas, tipo_compensacao } = dados;

  return new Promise((resolve, reject) => {
    const query = `
        INSERT INTO horas_extras (usuario_id, data_registro, horas, tipo_compensacao) VALUES (?, ?, ?, ?)
        `;

    db.query(
      query,
      [usuario_id, data_registro, horas, tipo_compensacao],
      (err, results) => {
        if (err) return reject(err);
        resolve(results);
      }
    );
  });
}

export default {
  adicionarHoraExtra,
};
