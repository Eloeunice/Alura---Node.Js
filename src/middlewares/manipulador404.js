import NaoEncontrado from "../errors/NaoEncontrado"

function manipulador404(req, res, next){
    const erro404 = new NaoEncontrado() // NOVA INSTANCIA DO ERRO
    next(erro404) // aqui mandamos para o manipulador de erros tratar o 404

}

export default manipulador404