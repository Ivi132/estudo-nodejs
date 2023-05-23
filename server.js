const http = require('http')
const port = 3000

const rotas = {
    '/': 'Home',
    '/livros': 'Chamou pagina de livros',
    '/autores': 'Chamou pagina de autores',
    '/editoras': 'Chamou pagina de editoras',
    '/sobre': 'Chamou a pagina de sobre'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/plain'})
    res.end(rotas[req.url])
})

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})