const fs = require("fs")

function getTodosLivros(){
    return JSON.parse(fs.readFileSync("livros.json"))
}


function getLivroPorId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livroFiltrado = livros.filter(livro => livro.id ===id )[0]
return livroFiltrado
}

function insereLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novaListaDeLivros = [...livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificacoes, id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceMoficado = livrosAtuais.findIndex(livro => livro.id === id)
    const conteudoModificado = {... livrosAtuais[indiceMoficado], ...modificacoes}
    livrosAtuais[indiceMoficado] = conteudoModificado
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}


function deleteLivro(id) {

    const livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
    const livrosAtualizados = livrosAtuais.filter(livro => livro.id !== id);
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtualizados));
    
}


module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deleteLivro
}