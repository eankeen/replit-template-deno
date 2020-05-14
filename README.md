# Deno Oak Template

Template for starting a pure-Deno web server using Oak.

# deno info

note `deno cache ${url}`

## Modules Used

Deno is stil fairly new, so you might want to take some time to familiarize yourself with the following modules that we use in this template

### [velociraptor](https://github.com/umbopepato/velociraptor)

Velociraptor is a script runner for Deno. Roughly equivalent to Node's `npm run` command using defined `package.json` scripts. Located at `scripts.yaml`

### [denon](https://github.com/eliassjogreen/denon)

Denon is a file watcher; equivalent to Nodemon. Config at `.denorc.json`

### [oak](https://github.com/oakserver/oak)

Oak is a popular web server framework (that includes router middleware). It's modeled after Node's Koa.

## [dejs](https://github.com/syumai/dejs)

Dejs is an ejs templating engine for Deno. It's features are a stipped subset of Node's `ejs` package

### [denv](https://github.com/crowlKats/denv)

Load environment variables from a file at runtime. Mostly the same as Node's `dotenv` package
