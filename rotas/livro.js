import { getLivro, getLivros, postLivro, patchLivro, deleteLivro, getLivrosPorEditora } from "../controladores/livro.js"
import { Router } from "express"

const router = Router()

router.get("/", getLivros)

router.get("/busca", getLivrosPorEditora)

router.get("/:id", getLivro) //consulta livros por id


router.post("/", postLivro)

router.patch("/:id", patchLivro) //importa do controlador

router.delete("/:id", deleteLivro)


export default router