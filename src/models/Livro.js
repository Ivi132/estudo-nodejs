import mongoose, { Schema } from "mongoose";

const livroSchema = new Schema({
    id: {type: String},
    titulo: {type: String, required: true},
    autor: {type: String, required: true},
    editora: {type: String, required: true},
    numeroPaginas: {type: Number},
})

const livros = mongoose.model('livros', livroSchema)

export default livros;