import { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, removeLivro, listarLivrosPorEditora } from "../servicos/livros.js";
import { autor } from "../models/Autores.js";

async function getLivros(req, res) {
    try{
        const livros = await getTodosLivros();
        res.send(livros);
    } catch(error) {
        res.status(500);
        res.send(error.message)
    }
}


async function getLivro(req, res) {
    try{
        const id = req.params.id
        if(id) {
            const livro = await getLivroPorId(id);
            res.send(livro);
        }
    } catch(error) {
        res.status(422);
        res.send("Id inválido")
    }
}


async function getLivrosPorEditora(req, res) {
    const editora = req.query.editora
    try{
        const livrosPorEditora = await listarLivrosPorEditora(editora)
        res.send(livrosPorEditora)

    }catch(error){
        res.status(500)
        res.send(error.message)
    }
    
}



async function postLivro(req, res) {
    const livroNovo = req.body
    try {
        if (req.body.nome) {
            const autorEncontrado = await autor.findOne({nome:livroNovo.autor.nome})
            const livroCompleto = {...livroNovo, autor:{...autorEncontrado._doc}}
            await insereLivro(livroCompleto)
                
            res.status(201)
            res.send("Livro inserido com sucesso!")
        }
    } catch(error) {
        res.status(500);
        res.send("O campo nome é obrigatório!")
    }
}

async function patchLivro(req, res) {
    const id = req.params.id
   
    try {       
        if(id) {
            let body = req.body
            const autorEncontrado = await autor.findOne({nome:body.autor.nome})
            const livroCompleto = {...body, autor:{...autorEncontrado._doc}}
            
            await modificaLivro(livroCompleto, id)
            res.status(201)
            res.send("Livro editado com sucesso!")
        }
    } catch(error) {
        res.status(500)
        res.send("Id inválido")
    }
}

async function deleteLivro(req, res) {
    try {
        const id = req.params.id;
        if(id) {
            await removeLivro(id);
            res.status(200);
            res.send("Livro removido com sucesso!");
        }
    } catch(error) {
        res.status(500);
        res.send("Id inválido");
    }
}

export {
    getLivros,
    getLivro,
    getLivrosPorEditora,
    postLivro,
    patchLivro,
    deleteLivro
}
