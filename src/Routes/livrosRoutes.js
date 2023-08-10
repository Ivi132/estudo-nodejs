import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router()

router
    .get('/livros', LivroController.listarLivros)
    .get('/livros/busca', LivroController.listarLivrosPorEditora)
    .get('/livros/:id', LivroController.listarLivro)
    .post('/livros', LivroController.salvarLivro)
    .put('/livros/:id', LivroController.atualizarLivro)
    .delete('/livros/:id', LivroController.excluirLivro)

export default router