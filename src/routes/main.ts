import { Router } from '../deps.ts';
import { rootController } from "../controllers/rootController.ts"
import { homeController } from "../controllers/homeController.ts"
import { aboutController } from "../controllers/aboutController.ts"

const router = new Router()
router
    .get("/", rootController)
    .get("/home", homeController)
    .get("/about", aboutController)

export { router }