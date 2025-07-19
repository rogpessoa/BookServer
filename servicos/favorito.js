import favoritos from "../models/favoritos.js"

async function getTodosLivrosFavoritos(){
    const listaLivrosFavoritos = await favoritos.find({});
    return listaLivrosFavoritos;
}


async function getLivroPorIdFavoritos(id){
    const listaLivrosFavoritos = await favoritos.findById(id);
    return listaLivrosFavoritos;
  
}

async function insereLivroFavorito(livroNovo){
    await favoritos.create(livroNovo);
}

async function deleteLivroFavorito(id) {
    await favoritos.findByIdAndDelete(id);

 
}


export {
    getLivroPorIdFavoritos,
    getTodosLivrosFavoritos,
    insereLivroFavorito,
    deleteLivroFavorito
}
