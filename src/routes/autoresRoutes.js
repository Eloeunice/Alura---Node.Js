import express from "express"
import AutorController from "../controllers/autorControllers.js" // importação do controlador

const routes = express.Router() // armazena todas as rotas relacionadas aos autor

routes.get("/autor", AutorController.listarAutores)
routes.get("/autor/:id", AutorController.listarAutorPorId)
routes.post("/autor", AutorController.cadastrarAutor)
routes.put("/autor/:id", AutorController.atualizarAutor)
routes.delete("/autor/:id", AutorController.deletarAutor)


export default routes