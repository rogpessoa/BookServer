import { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, removeLivro } from "../servicos/livros.js";

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

async function postLivro(req, res) {
    try {
        const livroNovo = req.body
        if (req.body.nome) {
            await insereLivro(livroNovo)
            res.status(201)
            res.send("Livro inserido com sucesso!")
        }
    } catch(error) {
        res.status(500);
        res.send("O campo nome é obrigatório!")
    }
}

async function patchLivro(req, res) {
    try {
        const id = req.params.id

        if(id) {
            const body = req.body
            await modificaLivro(body, id)
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
    postLivro,
    patchLivro,
    deleteLivro
}
