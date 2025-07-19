import {getTodosLivrosFavoritos, getLivroPorIdFavoritos, insereLivroFavorito, deleteLivroFavorito} from "../servicos/favorito.js"


async function getLivrosFavoritos(req, res) { //req = requisiçao res = response
    try{
        const livrosFavoritos = await getTodosLivrosFavoritos()
        res.send(livrosFavoritos)      
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
    
}

async function getLivroFavorito(req, res) { //req = requisiçao res = response
    try{

        const id = req.params.id
        if (id){
            const livrosFavoritosId = await getLivroPorIdFavoritos(id)
            res.send(livrosFavoritosId)
        } else{
            res.status(422)
            res.send("ID invalido!")
        }
             
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
    
}


async function postLivroFavorito(req, res){
    try{
        const livroNovo = req.body
        
        if (req.body.nome){
            await insereLivroFavorito(livroNovo)
            res.status(201)
            res.send("Livro favorito inserido com sucesso")
        }else{
            res.status(422)
            res.send("O campo é obrigatório")
}
    }catch(error){
        res.send(500)
        res.send(error.message)
    }
}


async function delLivroFavorito(req, res){
    try{
        const id = req.params.id      
        if (id){
            await deleteLivroFavorito(id)
            res.send("Livro favorito deletado com sucesso")
        }else{
            res.status(422)
            res.send("ID invalido")
        }
        

    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}


export{
    getLivrosFavoritos,
    getLivroFavorito,
    postLivroFavorito,
    delLivroFavorito
}