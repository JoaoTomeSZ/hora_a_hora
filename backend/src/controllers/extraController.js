import servicoExtras from '../services/extraService.js'

async function registrarHoraExtra(req, res) {
  try {
    const { usuario_id, data_registro, horas, tipo_compensacao } = req.body;

    if (
      !usuario_id ||
      !data_hora_extra ||
      !duracao_horas ||
      !tipo_compensacao
    ) {
      return res.status(400).json({ message: "Dados obrigatórios ausentes." });
    }

    const resultado = await servicoExtras.adicionarHoraExtra({
      usuario_id,
      data_registro,
      horas,
      tipo_compensacao,
    });

    res.status(201).json({
      message: "Hora extra registrada com sucesso.", id: resultado.insertId,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao registrar hora extra.", error: error.message,
    });
  }
}

export default {
        registrarHoraExtra
}
