import { path } from "../deps.ts"
// TODO: fix mistleading imports
import * as fs from "https://deno.land/std@0.51.0/fs/read_json.ts"
import type { Context } from "../deps.ts";
import { IAnimalDataPath } from '../@types/animalData.d.ts';

const _dirname = path.dirname(new URL(import.meta.url).pathname);
const animalDataPath = path.join(_dirname, "../data/animalData.json")
const animalData: Readonly<IAnimalDataPath> = await fs.readJson(animalDataPath) as IAnimalDataPath

/**
 * @desc generates random number
 */
const rand = (n: number): number => Math.floor(Math.random() * n)

/**
 * @desc sends the animalVariant in the form of a json document
 */
function send(ctx: Context, animalVariant: string) {
  const headers = new Headers()
  headers.append('content-type', 'application/json')

  const json = JSON.stringify({
    data: {
      name: animalVariant
    }
  })
  ctx.response.headers = headers
  ctx.response.body = json
}

/**
 * @desc get a random fox
 */
export async function foxRandom(ctx: Context) {
  const foxes = animalData.foxes

  const fox = foxes[rand(foxes.length)]
  send(ctx, fox)
}

/**
 * @desc get a random wolf
 */
export async function wolfRandom(ctx: Context) {
  const wolves = animalData.wolves

  const wolf = wolves[rand(wolves.length)]
  send(ctx, wolf)
}

/**
 * @desc get a random dog
 */
export async function dogRandom(ctx: Context) {
  const dogs = animalData.dogs

  const dog = dogs[rand(dogs.length)]
  send(ctx, dog)
}
