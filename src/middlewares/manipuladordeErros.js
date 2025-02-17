import mongoose from "mongoose"
import ErroBase from "../errors/ErroBase.js"
import RequisicaoIncorreta from "../errors/RequisicaoIncorreta.js"

function manipuladorDeErros (req, res, erro, next) {
    console.log(erro)
    if (erro instanceof mongoose.Error.CastError) {
        new RequisicaoIncorreta().enviarResposta(res)
    } else if(erro instanceof mongoose.Error.ValidationError) {
        const messagensError = Object.values(erro.errors) //pega um array com os objetos de erro de cada campo
        .map(erro => erro.message) // pegar cada mensagem de erro
        .join(";") // e juntar

        res.status(400).send({message: `Erros encontrados: ${messagensError}`})
    }
    else { 
       new ErroBase().enviarResposta(res)
    }
}

export default manipuladorDeErros