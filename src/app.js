import express from 'express'
import db from './config/dbConnect.js'
import livros from './models/Livro.js'
import routes from './Routes/index.js'

db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once('open', () => {
    console.log('A conexão com o banco foi um sucesso')
})

const app = express()

app.use(express.json())

routes(app)

// const livros = [
//     {id: 1, 'titulo': 'Sr das alianças'},
//     {id: 2, 'titulo': 'Harry Burra'},
// ]

// app.get('/', (req, res) => {
//     res.status(200).send('A aplicação esta sendo executada!!!')
// })

// app.get('/livros', async (req, res) => {
//     try {
//         const livrosResultado = await livros.find();
//         res.status(200).json(livrosResultado)
//     } catch (error) {
//         res.status(500).json(error);
//     }    
// })

// app.get('/livros/:id', (req, res) => {
//     let index = buscarLivro(req.params.id)
//     res.json(livros[index])
// })

// app.post('/livros', (req, res) => {
//     livros.push(req.body)
//     res.status(201).send('Um livros foi cadastrado com sucesso!!!')
// })

// app.put('/livros/:id', (req, res) => {
//     let index = buscarLivro(req.params.id)
//     livros[index].titulo = req.body.titulo
//     res.json(livros)
// })

// app.delete('/livros/:id', (req, res) => {
//     let { id } = req.params
//     let index = buscarLivro(id)
//     livros.splice(index, 1)
//     res.send(`O livros ${id} foi removido com sucesso!!!`)
// })

// function buscarLivro(id) {
//     return livros.findIndex(livro => livro.id == id)
// }

export default app