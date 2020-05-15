import { Router } from "../deps.ts";
import { rootController, homeController, aboutController } from "../controllers/rootController.ts";
import * as apiController from "../controllers/apiController.ts"

const rootRouter = new Router()
  .get("/", rootController)
  .get("/home", homeController)
  .get("/about", aboutController)
  .get("/api/fox", apiController.foxRandom)
  .get("/api/wolf", apiController.wolfRandom)
  .get("/api/dog", apiController.dogRandom)

export { rootRouter };
