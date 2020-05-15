# Deno Oak Template

Template for starting an Oak web server. Oak runs on Deno, an alternative Typescript and Javascript runtime. The following contain some helpful resources for Deno, Oak, and ecosystem tools this template uses.

## Usefull Resources

- [Deno Manual](https://deno.land/manual)
- [Deno Standard Library](https://deno.land/std)
- [Deno 3rd Party Modules](https://deno.land)
- [Oak Site](https://oakserver.github.io/oak)
- [Awesome Deno](https://github.com/denolib/awesome-deno)
- [Awesome Oak](https://github.com/eankeen/awesome-oak)

## How to use

We use [Velociraptor](###velociraptor) for run scripts.

### Commands

#### `vr start`

Start app normally

#### `vr serve`

Use [denon](###denon) to start the app and restart is on file changes

#### `vr test`

Run all tests (located in `./src/tests`)

## Modules Used

Deno is stil fairly new, so you might want to take some time to familiarize yourself with the following modules that we use

### [velociraptor](https://github.com/umbopepato/velociraptor)

Velociraptor is a script runner for Deno. Roughly equivalent to Node's `npm run` commands using defined `package.json` scripts. Velociraptor's config is at `velociraptor.yaml`

### [denon](https://github.com/eliassjogreen/denon)

Denon is a file watcher; equivalent to Nodemon. Config at `.denorc.json`

### [oak](https://github.com/oakserver/oak)

Oak is a popular web server framework (that includes router middleware). It's modeled after Node's Koa.

### [dejs](https://github.com/syumai/dejs)

Dejs is an ejs templating engine for Deno. It's features are a stipped subset of Node's `ejs` package

### [denv](https://github.com/crowlKats/denv)

Load environment variables from a file at runtime. Mostly the same as Node's `dotenv` package

## Common Errors

Hopefully these stanzas help you save at least a little time debugging

### 1. Not passing the Oak context to `Template.render()`

```txt
error: TS2345 [ERROR]: Argument of type '"fileName.ejs"' is not assignable to parameter of type 'Context<Record<string, any>>'.
  ctx.response.body = await Template.render("fileName.ejs", {
                                            ~~~~~~~~~~
    at file:///path/src/controllers/rootController.ts
```

`Template.render()` is not specific to Oak. It's something I made to make working with this template easier.

The correct syntax is

```ts
ctx.response.body = await Template.render(ctx, "fileName.ejs", {})
```

### 2. Uncaught ReferenceError: 'identifierName' is not defined

```txt
error: Uncaught ReferenceError: name is not defined
    at eval (eval at <anonymous> (https://deno.land/x/dejs@0.6.0/mod.ts:56:58), <anonymous>:13:13)
    at eval (eval at <anonymous> (https://deno.land/x/dejs@0.6.0/mod.ts:56:58), <anonymous>:19:9)
    at https://deno.land/x/dejs@0.6.0/mod.ts:72:7
    at new Promise (<anonymous>)
    at https://deno.land/x/dejs@0.6.0/mod.ts:59:11
    at renderFileToString (https://deno.land/x/dejs@0.6.0/mod.ts:187:10)
    at async renderFile (https://deno.land/x/dejs@0.6.0/mod.ts:199:18)
    at async include (https://deno.land/x/dejs@0.6.0/mod.ts:35:18)
    at async eval (eval at <anonymous> (https://deno.land/x/dejs@0.6.0/mod.ts:56:58), <anonymous>:4:44)
```

If you forget to look at the stack trace thinking it's a problem with your Typescript code, remember thats this shows that we are not passing all the necessary varibles when creating our dejs templates.

It occurs when we don't pass in the value when creating a template

```ts
await Template.render(ctx, "templateFile.ejs", {
  // identifierName: "value",
});
```

And also occurs when we don't pass it when including partials

```ejs
<%- await include('templateFile.ejs', { }) %>
```

Sorry if the stack trace doesn't lead all the way back to the `Template.render()` call, if applicable. Not sure what to do to fix that 😕
