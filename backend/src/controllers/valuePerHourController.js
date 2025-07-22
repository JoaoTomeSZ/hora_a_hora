import valuePerHourService from "../services/valuePerHourService";

async function registrarValorHora(req, res){
        try{
                const {valorHora} = req.body;
                await valuePerHourService.inserirValorHora(valorHora)
        }
        catch(err){
                res.status(500).json({message: 'Erro ao registrar valor por hora.', error: err.message})
        }
}