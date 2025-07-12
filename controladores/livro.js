const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deleteLivro} = require("../servicos/livro")

function getLivros(req, res) { //req = requisiçao res = response
    try{
        const livros = getTodosLivros()
        res.send(livros)      
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
    
}

function getLivro(req, res) { //req = requisiçao res = response
    try{

        const id = req.params.id
        if (id && Number(id)){
            const livros = getLivroPorId(id)
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

function postLivro(req, res){
    try{
        const livroNovo = req.body
        
        if (req.body.nome){
            insereLivro(livroNovo)
            res.status(201)
            res.send("Livro inserido com sucesso")
        }else{
            res.status(422)
            res.send("O campo é obrigatório")
}
    }catch(error){
        res.send(500)
        res.send(error.message)
    }
}


function patchLivro(req, res){
    try{
        const id = req.params.id
        if (id && Number(id)){
            const body = req.body
            modificaLivro(body, id) //importa a função de serviço
            res.send("Item modificado com sucesso")
        } else{
            res.send(422)
            res.send("ID invalido")
        }      
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function delLivro(req, res){
    try{
        const id = req.params.id      
        if (id && Number(id)){
            deleteLivro(id)
            res.send("Livro deletado com sucesso")
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
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    delLivro

}

