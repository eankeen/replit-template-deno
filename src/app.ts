import { denv } from "../deps.ts";
import { Oak } from "../deps.ts";
import { rootRouter } from "./routes/rootRouter.ts";

await denv.load("./.env");

const app = new Oak();

app.use(rootRouter.routes());
app.use(rootRouter.allowedMethods());

export { app };
