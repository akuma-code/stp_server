import { Router } from "express";

import { StpController } from "../Controllers/StpMainController";


const routerTab = Router()

routerTab.get('/', StpController.getAll)
routerTab.post('/', StpController.create)
routerTab.post('/preset', StpController.createPreset)
routerTab.delete('/', StpController.deleteAll)

export { routerTab }