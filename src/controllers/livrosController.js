import livros from "../models/Livro.js";

class LivroController {
    static listarLivros = async (req, res) => {
        try {
            const livrosResultado = await livros.find()
                .populate('autor')
                .populate('editora')
            res.status(200).json(livrosResultado)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static listarLivro = async (req, res) => {      
        const id = req.params.id
        
        try {
            const livroResultado = await livros.findById(id)
                .populate('autor', 'nome')
                .populate('editora', 'nome')
            res.status(200).json(livroResultado)
        } catch (error) {
            res.status(500).send({message: `${error.message} - id do livro não encontrado.`})
        }
    }

    static salvarLivro = async (req, res) => {      
        let livro = new livros(req.body)

        try {
            livro.save(livro)
            res.status(201).send(livro.toJSON())
        } catch (error) {
            res.status(500).send({message: `${error.message} - falha ao cadastrar livro.`})
        }
    }

    static atualizarLivro = async (req, res) => {      
        const id = req.params.id
        
        try {
            await livros.findByIdAndUpdate(id, {$set: req.body})
            res.status(200).send({message: 'O livro foi atualizado com sucesso.'})
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }

    static excluirLivro = async (req, res) => {      
        const id = req.params.id
        
        try {
            await livros.findByIdAndDelete(id)
            res.status(200).send({message: 'O livro foi excluido com sucesso.'})
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }

    static listarLivrosPorEditora = async (req, res) => {
        try {
            const editora = req.query.editora

            const livrosResultado = await livros.find({'editora': editora}, {})
            res.status(200).json(livrosResultado)
        } catch (error) {
            
        }
    }
}

export default LivroController