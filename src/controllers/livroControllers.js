import livro from "../models/Livro.js" // importação do modelo
import { autor } from "../models/Autor.js"

class LivroController {

    // static deixa eu usar os métodos de uma classe sem ter que instanciar ela
    static async listarLivros(req,res){
        try{
            const listaLivros = await livro.find({})
            res.status(200).json(listaLivros)
        }catch(error){
            res.status(500).json({message: `${error.message} - falha na requisição do livro`})
        }
       
    }

    static async listarLivroPorId(req,res){
        try{
            const id = req.params.id
            const livroEncontrado = await livro.findById(id)
            res.status(200).json(livroEncontrado)
        }catch(error){
            res.status(500).json({message: `${error.message} - falha na requisição do livro`})
        }
       
    }

    static async cadastrarLivro(req,res){
        const novoLivro = req.body
        try{
            const autorEncontrado = await autor.findById(novoLivro.autor) // id que passamos do autor na req
            const livroCompleto = {...novoLivro, autor: {...autorEncontrado._doc}}
            const livroCriado = await livro.create(livroCompleto)
            res.status(200).json({ message: "Livro cadastrado com sucesso", livro: novoLivro})

        }catch(error){
            res.status(500).json({message: `${error.message} - falha ao cadastrar o novo livro`})

        }
    }

    static async atualizarLivro(req,res) {
        try{
            const id = req.params.id
            await livro.findByIdAndUpdate(id, req.body)
            res.status(200).json({message: "livro atualizado com sucesso"})

        }catch(error) {
        res.status(500).json({message: `${error.message} - falha na atualização do livro`})
        }
        
        
    }

    static async deletarLivro(req,res) {
        try{
            const id = req.params.id
            await livro.findByIdAndDelete(id)
            res.status(200).json({message: "livro deletado com sucesso"})

        }catch(error){
            res.status(500).json({message: `${error.message} - falha ao excluir o livro`})
        }
        
    }
    static async listarLivrosporEditora(req,res){
        const editora = req.query.editora
        try{
            const livrosporEditora = await livro.find({editora: editora})
            res.status(200).json(livrosporEditora)

        }catch(error){
            res.status(500).json({message: `${error.message} - falha ao buscar a editora`})
        }
    }

}

export default LivroController