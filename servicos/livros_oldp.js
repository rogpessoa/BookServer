import livro from "../models/Livros.js"
import livros from "../models/Livros.js"
import fs from "fs"

// function getTodosLivros(){
//     return JSON.parse(fs.readFileSync("livros.json"))
// }

async function getTodosLivros() { 
    const listaLivros = await livros.find({})
    return listaLivros
        
}

async function getLivroPorId(id){
    const listaLivros = await livros.findById(id)
    return listaLivros
}

async function insereLivro(livroNovo){
    await livros.create(livroNovo)
    
}

async function modificaLivro(modificacoes, id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceMoficado = livrosAtuais.findIndex(livro => livro.id === id)
    const conteudoModificado = {... livrosAtuais[indiceMoficado], ...modificacoes}
    livrosAtuais[indiceMoficado] = conteudoModificado
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}


async function deleteLivro(id) {
    await livros.findByIdAndDelete(id)
        
}

export{
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deleteLivro
}