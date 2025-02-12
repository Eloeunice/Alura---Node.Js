import express from "express"
import LivroController from "../controllers/livroControllers.js" // importação do controlador

const routes = express.Router() // armazena todas as rotas relacionadas aos livros

// Precedência de rotas do express

routes.get("/livros", LivroController.listarLivros)
routes.get("/livros/busca", LivroController.listarLivrosporEditora)
routes.get("/livros/:id", LivroController.listarLivroPorId)
routes.post("/livros", LivroController.cadastrarLivro)
routes.put("/livros/:id", LivroController.atualizarLivro)
routes.delete("/livros/:id", LivroController.deletarLivro)


export default routes