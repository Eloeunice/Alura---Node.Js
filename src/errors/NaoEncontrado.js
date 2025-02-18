import ErroBase from "./ErroBase.js";

class NaoEncontrado extends ErroBase{
    constructor(mensagem = "Página Não encontrada") {
        super(mensagem,404) // recebe mensagens e status
    }
 
} // TODA VEZ QUE UM NOVO 404 ACONTECE UMA INSTANCIA DA CLASSE É CRIADA

export default NaoEncontrado