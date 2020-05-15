import { ensure } from '../deps.ts'
import { app } from "./app.ts";

ensure({
  denoVersion: "1.0.0"
})

const port = parseInt(Deno.env.get("PORT") ?? "3000");

console.log(`listening on port ${port}`);

await app.listen({ port });
