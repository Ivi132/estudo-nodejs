import mongoose, { Schema } from "mongoose";

const livroSchema = new Schema({
    id: {type: String},
    titulo: {type: String, required: true},
    autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
    editora: {type: mongoose.Schema.Types.ObjectId, ref: 'editoras', required: true},
    numeroPaginas: {type: Number},
})

const livros = mongoose.model('livros', livroSchema)

export default livros;