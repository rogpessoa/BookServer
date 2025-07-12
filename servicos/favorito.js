const fs = require("fs")

function getTodosLivrosFavoritos(){
    return JSON.parse(fs.readFileSync("favoritos.json"))
}


function getLivroPorIdFavoritos(id){
    const livros = JSON.parse(fs.readFileSync("favoritos.json"))
    const livroFiltrado = livros.filter(livro => livro.id ===id )[0]
return livroFiltrado
}

function insereLivroFavorito(livroNovo){
    const livros = JSON.parse(fs.readFileSync("favoritos.json"))
    const novaListaDeLivrosFavoritos = [...livros, livroNovo]

    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeLivrosFavoritos))
}

function deleteLivroFavorito(id) {

    const livrosAtuais = JSON.parse(fs.readFileSync("favoritos.json"));
    const livrosAtualizados = livrosAtuais.filter(livro => livro.id !== id);
    fs.writeFileSync("favoritos.json", JSON.stringify(livrosAtualizados));
    
}


module.exports = {
    getTodosLivrosFavoritos,
    getLivroPorIdFavoritos,
    insereLivroFavorito,
    deleteLivroFavorito
}