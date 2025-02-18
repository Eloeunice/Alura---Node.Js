import RequisicaoIncorreta from "./RequisicaoIncorreta.js"

class ErroValidacao extends RequisicaoIncorreta {
    constructor(erro){
        const mensagensErro = Object.values(erro.errors) //pega um array com os objetos de erro de cada campo
        .map(erro => erro.message) // pegar cada mensagem de erro
        .join(";") // e juntar

        super(`Os seguintes erros foram encontrados: ${mensagensErro}`)
    }
}

export default ErroValidacao