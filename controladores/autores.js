import {getTodosAutoresFavoritos, getAutorPorIdFavoritos, insereAutorFavorito, deleteAutorFavorito} from "../servicos/autores.js"


async function getAutoresFavoritos(req, res) { //req = requisiçao res = response
    try{
        const AutoresFavoritos = await getTodosAutoresFavoritos()
        res.send(AutoresFavoritos)      
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
    
}

async function getAutorFavorito(req, res) { //req = requisiçao res = response
    try{

        const id = req.params.id
        if (id){
          const AutoresFavoritosId = await getAutorPorIdFavoritos(id)
            res.send(AutoresFavoritosId)
        } else{
            res.status(422)
            res.send("ID invalido!")
        }
             
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
    
}


async function postAutorFavorito(req, res){
    try{
        const AutorNovo = req.body
        
        if (req.body.nome){
            await insereAutorFavorito(AutorNovo)
            res.status(201)
            res.send("Autor inserido com sucesso")
        }else{
            res.status(422)
            res.send("O campo é obrigatório")
}
    }catch(error){
        res.send(500)
        res.send(error.message)
    }
}


async function delAutorFavorito(req, res){
    try{
        const id = req.params.id      
        if (id){
            await deleteAutorFavorito(id)
            res.send("Autor deletado com sucesso")
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
    getAutoresFavoritos,
    getAutorFavorito,
    postAutorFavorito,
    delAutorFavorito
    
}