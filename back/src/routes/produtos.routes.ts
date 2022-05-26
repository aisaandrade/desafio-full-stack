import express from 'express'
import { createprodutoControler } from '../modules/produtos/useCases/CreateProdutoUseCase'
import { deleteprodutoControler } from '../modules/produtos/useCases/DeleteProdutoUseCase'
import { readprodutoControler } from '../modules/produtos/useCases/ReadProdutoUseCase'
import { updateprodutoControler } from '../modules/produtos/useCases/UpdateProdutoUseCase'

const produtoRouter = express.Router()

produtoRouter.post('/create', (req, res) => {
    createprodutoControler.handle(req, res)
})

produtoRouter.get('/read',(req, res) => {
    readprodutoControler.handle(req, res)
})

produtoRouter.put('/update/:id', (req, res) => {
    updateprodutoControler.handle(req, res)
})

produtoRouter.delete('/delete/:id', (req, res) => {
    deleteprodutoControler.handle(req, res)
})

export {produtoRouter}
