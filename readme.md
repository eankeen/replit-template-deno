# Deno Oak Template

Template for starting an Oak web server. Oak runs on Deno, an alternative Typescript and Javascript runtime that's different compared to Node. The following contain some helpful resources to Deno, Oak, and ecosystem tools this boilerpalte template uses.

## Usefull Resources

- [Deno Manual](https://deno.land/manual)
- [Deno Standard Library](https://deno.land/std)
- [Deno 3rd Party Modules](https://deno.land)
- [Awesome Deno](https://github.com/denolib/awesome-deno)
- [Awesome Oak](https://github.com/eankeen/awesome-oak)

## Modules Used

Deno is stil fairly new, so you might want to take some time to familiarize yourself with the following modules that we use in this template

### [velociraptor](https://github.com/umbopepato/velociraptor)

Velociraptor is a script runner for Deno. Roughly equivalent to Node's `npm run` command using defined `package.json` scripts. Located at `velociraptor.yaml`

### [denon](https://github.com/eliassjogreen/denon)

Denon is a file watcher; equivalent to Nodemon. Config at `.denorc.json`

### [oak](https://github.com/oakserver/oak)

Oak is a popular web server framework (that includes router middleware). It's modeled after Node's Koa. Also check the [docs](https://oakserver.github.io/oak) and [awesome-oak](https://github.com/eankeen/awesome-oak) page

### [dejs](https://github.com/syumai/dejs)

Dejs is an ejs templating engine for Deno. It's features are a stipped subset of Node's `ejs` package

### [denv](https://github.com/crowlKats/denv)

Load environment variables from a file at runtime. Mostly the same as Node's `dotenv` package

## Common Errors

### 1. Not passing the Oak context to `Template.render()`

```txt
error: TS2345 [ERROR]: Argument of type '"fileName.ejs"' is not assignable to parameter of type 'Context<Record<string, any>>'.
  ctx.response.body = await Template.render("fileName.ejs", {
                                            ~~~~~~~~~~
    at file:///path/src/controllers/rootController.ts
```

The correct syntax is

```ts
ctx.response.body = await Template.render(ctx, "fileName.ejs", {})
```
