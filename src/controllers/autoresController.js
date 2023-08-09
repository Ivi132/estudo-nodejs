import autores from "../models/Autor.js";

class AutorController {
    static listarAutores = async (req, res) => {
        try {
            const autoresResultado = await autores.find()
            res.status(200).json(autoresResultado)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static listarAutor = async (req, res) => {      
        const id = req.params.id
        
        try {
            const autorResultado = await autores.findById(id)
            res.status(200).json(autorResultado)
        } catch (error) {
            res.status(500).send({message: `${error.message} - id do autor não encontrado.`})
        }
    }

    static salvarAutor = async (req, res) => {      
        let autor = new autores(req.body)

        try {
            autor.save(autor)
            res.status(201).send(autor.toJSON())
        } catch (error) {
            res.status(500).send({message: `${error.message} - falha ao cadastrar autor.`})
        }
    }

    static atualizarAutor = async (req, res) => {      
        const id = req.params.id
        
        try {
            await autores.findByIdAndUpdate(id, {$set: req.body})
            res.status(200).send({message: 'O autor foi atualizado com sucesso.'})
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }

    static excluirAutor = async (req, res) => {      
        const id = req.params.id
        
        try {
            await autores.findByIdAndDelete(id)
            res.status(200).send({message: 'O autor foi excluido com sucesso.'})
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }
}

export default AutorController