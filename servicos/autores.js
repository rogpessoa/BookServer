import {autor} from "../models/Autores.js"



async function getTodosAutoresFavoritos(){
    const listaAutoresFavoritos = await autor.find({});
    return listaAutoresFavoritos;
}


async function getAutorPorIdFavoritos(id){
    const listaAutorFavoritos = await autor.findById(id);
    return listaAutorFavoritos;
  
}

async function insereAutorFavorito(livroNovo){
    await autor.create(livroNovo);
}

async function deleteAutorFavorito(id) {
    await autor.findByIdAndDelete(id);

 
}


export {
    getTodosAutoresFavoritos,
    getAutorPorIdFavoritos,
    insereAutorFavorito,
    deleteAutorFavorito
}
