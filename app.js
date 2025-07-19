import express from "express"
//import {rotaLivro, rotaFavorito} from "./rotas/livro.js"
import rotaLivro from "./rotas/livro.js"
import rotaFavorito from "./rotas/favorito.js"
import pool from "./config/dbConnect.js"
import cors from "cors"
import "dotenv/config"

const conexao = await pool()
const app = express()
const port = 8000
app.use(express.json())
app.use("/livros", rotaLivro)
app.use("/favoritos", rotaFavorito)
app.use(cors({origin: "*"}))

conexao.on("error", (erro) =>{
    console.error("Erro de conexão", erro);
});


conexao.once("open", () =>{
    console.log("Conexão com o banco feita com sucesso")
})



app.listen(port, () =>{
    console.log(`Escutando a porta ${port}`)
})


