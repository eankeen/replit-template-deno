import type { Context } from "../deps.ts";
import { Template } from "../util/template.util.ts";

/**
 * @desc sets status code to 302 Found, and
 * redirects to root '/'
 * @info https://developer.mozilla.org/en-US/docs/Web/API/Headers
 */
export function rootController(ctx: Context) {
  const headers = new Headers();
  headers.append("location", "/home");

  ctx.response.status = 302;
  ctx.response.headers = headers;
}

export async function homeController(ctx: Context) {
  await Template.render(ctx, "home.ejs");
}

/**
 * @desc shows an about page
 */
export async function aboutController(ctx: Context) {
  await Template.render(ctx, "about.ejs");
}

/**
 * @desc shows the page that describes the api
 */
export async function aboutApiController(ctx: Context) {
  await Template.render(ctx, "api.ejs", {
    stringOfText: "There are the api routes. They are rather simple."
  });
}
