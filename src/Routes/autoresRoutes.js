import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router()

router
    .get('/autores', AutorController.listarAutores)
    .get('/autores/:id', AutorController.listarAutor)
    .post('/autores', AutorController.salvarAutor)
    .put('/autores/:id', AutorController.atualizarAutor)
    .delete('/autores/:id', AutorController.excluirAutor)

export default router