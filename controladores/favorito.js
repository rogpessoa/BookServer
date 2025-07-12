const { getTodosLivrosFavoritos, getLivroPorIdFavoritos, insereLivroFavorito, deleteLivroFavorito } = require("../servicos/favorito")


function getLivrosFavoritos(req, res) { //req = requisiçao res = response
    try{
        const livros = getTodosLivrosFavoritos()
        res.send(livros)      
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
    
}

function getLivroFavorito(req, res) { //req = requisiçao res = response
    try{

        const id = req.params.id
        if (id && Number(id)){
            const livros = getLivroPorIdFavoritos(id)
            res.send(livros)
        } else{
            res.status(422)
            res.send("ID invalido!")
        }
             
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
    
}

function postLivroFavorito(req, res){
    try{
        const livroNovo = req.body
        
        if (req.body.nome){
            insereLivroFavorito(livroNovo)
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


function delLivroFavorito(req, res){
    try{
        const id = req.params.id      
        if (id && Number(id)){
            deleteLivroFavorito(id)
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

module.exports = {
    getLivrosFavoritos,
    getLivroFavorito,
    postLivroFavorito,
    delLivroFavorito

}

