import { getAutoresFavoritos, getAutorFavorito, postAutorFavorito, delAutorFavorito} from "../controladores/autores.js"
import { Router } from "express"
const router = Router()

router.get("/", getAutoresFavoritos)

router.get("/:id", getAutorFavorito) //consulta livros por id

router.post("/", postAutorFavorito)

router.delete("/:id", delAutorFavorito)


export default router