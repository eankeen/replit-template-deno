import type { Context } from "../deps.ts";

/**
 * @desc sets status code to 302 Found, and
 * redirects to root '/'
 * @info https://developer.mozilla.org/en-US/docs/Web/API/Headers
 */
export function homeController(ctx: Context) {
  const headers = new Headers();
  headers.append("Location", "/");

  ctx.response.status = 302;
  ctx.response.headers = headers;
}
