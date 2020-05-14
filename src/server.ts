import { app } from './app.ts'

const port = parseInt(Deno.env.get("PORT") ?? "3000");

console.log(`listening on port ${port}`)

await app.listen({ port });
