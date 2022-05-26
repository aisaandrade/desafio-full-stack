import { Router } from "express";
import { sqliteConnection, testAutentication } from "../core/db/connection";
import { authRouter } from "./auth.routes";
import { produtoRouter } from "./produtos.routes";

const router = Router()

sqliteConnection.sync().then(() => {
    console.log("Banco pronto")
})

router.get('/', async (req, res) =>{
    const connection = await testAutentication()
    return res.json({
        sqliteConnection: connection
    })
})

router.use('/produto',produtoRouter)
router.use('/auth',authRouter)
export {router}