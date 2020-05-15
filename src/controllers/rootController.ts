import type { Context } from "../deps.ts";
import { Template } from "../util/template.util.ts";

export async function rootController(ctx: Context) {
  // ctx.response.body = "Haiiii";
  const headers = new Headers();
  headers.append("content-type", "text/html");

  ctx.response.headers = headers;
  ctx.response.body = await Template.render("home.ejs", {
    name: "thing",
  });
}
