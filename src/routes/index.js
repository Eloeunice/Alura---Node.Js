// PONTO DE ENTRADA DAS ROTAS (precisamos referenciar todas as rotas aqui)
import express from "express"
import livros from "./livrosRoutes.js" // importando as rotas de livros
import autor from "./autoresRoutes.js"

// Função para agrupar todas as rotas que vamos receber

const routes = (app) => {
    app.route("/").get((req , res) => res.status(200).send("Curso Node.js"))
    app.use(express.json(), livros, autor) // rotas importadas
}

export default routes