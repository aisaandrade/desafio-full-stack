import express from 'express'
import { auth } from '../config/auth'
import { loginControler } from '../modules/auth/useCases/LoginUseCase'

const authRouter = express.Router()

authRouter.post('/login', (req, res) => {
    loginControler.handle(req,res)
})

export {authRouter}