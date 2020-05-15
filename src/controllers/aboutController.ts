import type { Context } from "../deps.ts";

/**
 * @desc shows an about page
 */
export function aboutController(ctx: Context) {
  const body = "thing";

  ctx.response.status = 200;
  ctx.response.body = body;
}
