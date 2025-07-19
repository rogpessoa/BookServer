import { getLivro, getLivros, postLivro, patchLivro, deleteLivro, getLivroPorEditora } from "../controladores/livro.js"
import { Router } from "express"
const router = Router()

router.get("/", getLivros)

router.get("/busca", getLivroPorEditora)
router.get("/:id", getLivro) //consulta livros por id


router.post("/", postLivro)

router.patch("/:id", patchLivro) //importa do controlador

router.delete("/:id", deleteLivro)


export default router