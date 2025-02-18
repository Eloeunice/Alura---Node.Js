import mongoose from "mongoose"
import ErroBase from "../errors/ErroBase.js"
import RequisicaoIncorreta from "../errors/RequisicaoIncorreta.js"
import ErroValidacao from "../errors/ErroValidacao.js"
import NaoEncontrado from "../errors/NaoEncontrado.js"

function manipuladorDeErros (req, res, erro, next) {
    console.log(erro)
    if (erro instanceof mongoose.Error.CastError) {
        new RequisicaoIncorreta().enviarResposta(res)
    } else if(erro instanceof mongoose.Error.ValidationError) {
        new ErroValidacao().enviarResposta(res)

        res.status(400).send({message: `Erros encontrados: ${messagensError}`})
    } else if(erro instanceof NaoEncontrado){
        erro.enviarResposta(res)
    }
    else { 
       new ErroBase().enviarResposta(res)
    }
}

export default manipuladorDeErros