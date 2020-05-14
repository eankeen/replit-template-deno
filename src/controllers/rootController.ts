import type { Context } from "../deps.ts";

export function rootController(ctx: Context) {
    ctx.response.body = "Haiiii"
}