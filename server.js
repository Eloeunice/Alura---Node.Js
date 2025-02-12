import app from "./src/app.js"
import "dotenv/config"

const PORT = 3000 // PORTA DE COMUNICAÇÃO
const rotas = {
    "/": "Curso Node.js"
}

app.listen(PORT, () => {
    console.log("servidor escutando!")
})

