import livros from "../models/Livros.js";

async function getTodosLivros() {
    const listaLivros = await livros.find({});
    return listaLivros;
}

async function getLivroPorId(id) {
    const listaLivros = await livros.findById(id);
    return listaLivros;
}

async function insereLivro(livroNovo) {
    await livros.create(livroNovo);
}

async function modificaLivro(modificacoes, id) {
    await livros.findByIdAndUpdate(id, modificacoes);
}

async function removeLivro(id) {
    await livros.findByIdAndDelete(id);
}


export {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    removeLivro
}