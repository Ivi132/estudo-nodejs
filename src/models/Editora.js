import mongoose, { Schema } from "mongoose";

const editoraSchema = new Schema(
    {
        id: { type: String },
        nome: { type: String, required: true },
        fundacao: { type: Date }
    },
    {
        versionKey: false
    }
)

const editoras = mongoose.model('editoras', editoraSchema)

export default editoras