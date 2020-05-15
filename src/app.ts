import { denv } from "../deps.ts";
import { Oak } from "../deps.ts";
import { router } from "./routes/main.ts";

await denv.load("./.env");

const app = new Oak();
app.use(router.routes());
app.use(router.allowedMethods());

export { app };
