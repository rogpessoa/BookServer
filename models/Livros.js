import mongoose from "mongoose";
import { autoresSchema } from "./Autores.js";

const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    editora: {type: String},
    preco: {type: Number},
    paginas: {type: Number},
    autor: autoresSchema
}, {versionKey: false}) 

const livros = mongoose.model("livros", livroSchema)


export default livros
    


