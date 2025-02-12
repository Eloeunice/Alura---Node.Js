import { autor } from "../models/Autor.js"
// importação do modelo

class AutorController {

    // static deixa eu usar os métodos de uma classe sem ter que instanciar ela
    static async listarAutores(req,res){
        try{
            const listaAutors = await autor.find({})
            res.status(200).json(listaAutors)
        }catch(error){
            res.status(500).json({message: `${error.message} - falha na requisição do Autor`})
        }
       
    }

    static async listarAutorPorId(req,res){
        try{
            const id = req.params.id
            const AutorEncontrado = await autor.findById(id)
            res.status(200).json(AutorEncontrado)
        }catch(error){
            res.status(500).json({message: `${error.message} - falha na requisição do Autor`})
        }
       
    }

    static async cadastrarAutor(req,res){
        try{
            const novoAutor = await autor.create(req.body)
            res.status(200).json({ message: "Autor cadastrado com sucesso", Autor: novoAutor})

        }catch(error){
            res.status(500).json({message: `${error.message} - falha ao cadastrar o novo Autor`})

        }
    }

    static async atualizarAutor(req,res) {
        try{
            const id = req.params.id
            await autor.findByIdAndUpdate(id, req.body)
            res.status(200).json({message: "Autor atualizado com sucesso"})

        }catch(error) {
        res.status(500).json({message: `${error.message} - falha na atualização do Autor`})
        }
        
        
    }

    static async deletarAutor(req,res) {
        try{
            const id = req.params.id
            await autor.findByIdAndDelete(id)
            res.status(200).json({message: "Autor deletado com sucesso"})

        }catch(error){
            res.status(500).json({message: `${error.message} - falha ao excluir o Autor`})
        }
        
    }

}

export default AutorController