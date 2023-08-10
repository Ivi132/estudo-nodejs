import editoras from "../models/Editora.js"

class EditoraController {
    static listarEditoras = async (req, res) => {
        try {
            const editorasResultado = await editoras.find()
            res.status(200).json(editorasResultado)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static listarEditora = async (req, res) => {      
        const id = req.params.id
        
        try {
            const editoraResultado = await editoras.findById(id)
            res.status(200).json(editoraResultado)
        } catch (error) {
            res.status(500).send({message: `${error.message} - id da editora não encontrado.`})
        }
    }

    static salvarEditora = async (req, res) => {      
        let editora = new editoras(req.body)

        try {
            editora.save(editora)
            res.status(201).send(editora.toJSON())
        } catch (error) {
            res.status(500).send({message: `${error.message} - falha ao cadastrar editora.`})
        }
    }

    static atualizarEditora = async (req, res) => {      
        const id = req.params.id
        
        try {
            await editoras.findByIdAndUpdate(id, {$set: req.body})
            res.status(200).send({message: 'A editora foi atualizada com sucesso.'})
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }

    static excluirEditora = async (req, res) => {      
        const id = req.params.id
        
        try {
            await editoras.findByIdAndDelete(id)
            res.status(200).send({message: 'A editora foi excluida com sucesso.'})
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }
}

export default EditoraController