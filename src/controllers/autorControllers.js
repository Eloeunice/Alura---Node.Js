import NaoEncontrado from "../errors/NaoEncontrado.js"
import { autor } from "../models/Autor.js"
// importação do modelo

class AutorController {

    // static deixa eu usar os métodos de uma classe sem ter que instanciar ela
    static async listarAutores(req,res,next){
        try{
            const listaAutors = await autor.find({})
            res.status(200).json(listaAutors)
        }catch(error){
           next(error)
        }
       
    }

    static async listarAutorPorId(req,res, next){
        try{
            const id = req.params.id
            const AutorEncontrado = await autor.findById(id)
            if(AutorEncontrado =! null){
                res.status(200).json(AutorEncontrado)
            } else{
                next(new NaoEncontrado("ID do autor não localizado")) // nova instancia do erro
            }
        }catch(error){
            next(error) // o next vai encaminhar o erro obtido no controlador para o middleware de trataento de erros em app.js
        }
       
    }

    static async cadastrarAutor(req,res, next){
        try{
            const novoAutor = await autor.create(req.body)
            res.status(200).json({ message: "Autor cadastrado com sucesso", Autor: novoAutor})

        }catch(error){
            next(error)

        }
    }

    static async atualizarAutor(req,res, next) {
        try{
            const id = req.params.id
            const autorEncontrado = await autor.findByIdAndUpdate(id, req.body)
            if(autorEncontrado != null) {
                res.status(200).json({message: "Autor atualizado com sucesso"})
            } else { 
                next(new NaoEncontrado("ID do autor nao localizado")) }
        }catch(error) {
            next(error)
                   }
        
        
    }

    static async deletarAutor(req,res) {
        try{
            const id = req.params.id
            const autorEncontrado = await autor.findByIdAndDelete(id)
            if (autorEncontrado != null){
                res.status(200).json({message: "Autor deletado com sucesso"})
            } else (next(new NaoEncontrado("Id do autor nao localizado")))
           

        }catch(error){
            next(error)
        }
        
    }

}

export default AutorController