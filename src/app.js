import express from "express"
import conectaNaDatabase from "./config/dbConnect.js"
import routes from "./routes/index.js"

const conexao = await conectaNaDatabase()

conexao.on("error", (error) => {console.log("erro de conexao", error)})

conexao.once("open", () => {console.log("Banco conectado com sucesso")})

const app = express()
routes(app)

export default app

