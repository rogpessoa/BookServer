import { getLivrosFavoritos, getLivroFavorito, postLivroFavorito, delLivroFavorito } from "../controladores/favorito.js"
import { Router } from "express"
const router = Router()

router.get("/", getLivrosFavoritos)

router.get("/:id", getLivroFavorito) //consulta livros por id

router.post("/", postLivroFavorito)

router.delete("/:id", delLivroFavorito)


export default router