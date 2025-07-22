import servicoValorPorHora from "../services/valuePerHourService.js";

async function registrarValorHora(req, res){
        try{
                const {valorHora} = req.body;
                const idUsuario = req.user.id
                await servicoValorPorHora.inserirValorHora(idUsuario, valorHora)

                res.status(201).json({message: 'Valor por hora registrado com sucesso.'})
        }
        catch(err){
                res.status(500).json({message: 'Erro ao registrar valor por hora.', error: err.message})
        }
}

async function atualizarValorHora(req, res){
        try{
                const {valorHora} = req.body;
                const idUsuario = req.user.id;
                await servicoValorPorHora.novoValorHora(idUsuario, valorHora)

                res.status(201).json({message: 'Valor por hora atualizado com sucesso.'});
        }
        catch(err){
                res.status(500).json({message: 'Erro ao atualizar valor por hora.', error: err.message})
        }
}

export default {
        registrarValorHora,
        atualizarValorHora
}