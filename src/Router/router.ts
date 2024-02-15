import { Router } from "express";
import path from "path";

const router = Router()


router.get('/', (req, res) => {
    const _p = path.join(__dirname, '..', 'build_client', 'index.html')
    res.sendFile(_p)
})

export { router }