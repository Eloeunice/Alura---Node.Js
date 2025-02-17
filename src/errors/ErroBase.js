class ErroBase extends Error  {
    constructor (mensagem = "Erro interno do servidor", status = 500){    
        super() // obrigatorio quando uma classe herda a outra
        this.message = mensagem
        this.status = status}
    
        enviarResposta(res){
            res.status = this.status
            res.send({
                mensagem: this.message, 
                status: this.status})

        }
}

export default ErroBase