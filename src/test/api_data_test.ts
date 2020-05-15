import { assert } from "https://deno.land/std@0.51.0/testing/asserts.ts"
// TODO: fix misleading imports
import * as fs from "https://deno.land/std@0.51.0/fs/exists.ts"
// TODO: fix import statements
import { readJson } from "https://deno.land/std@0.51.0/fs/read_json.ts"

// TODO: fix mixleading impoarts
import * as path from "https://deno.land/std@0.51.0/path/mod.ts"
import { join } from "https://deno.land/std@0.51.0/path/mod.ts"
import type { IAnimalDataPath } from "../@types/animalData.d.ts"

const _dirname = path.dirname(new URL(import.meta.url).pathname);
const animalDataPath = join(_dirname, "../data//animalData.json")

Deno.test({
  name: 'animalData.json exists',
  async fn(): Promise<void> {
    try {
      await fs.exists(animalDataPath)
      assert(true)
    } catch {
      assert(false)
    }
  }
})

const isObject = (value: any): boolean => typeof value === 'object' && !Array.isArray(value)
const isArray = (value: any): boolean => Array.isArray(value)

Deno.test({
  name: 'keys of animalData.json are correct',
  async fn(): Promise<void> {
    const animalData: IAnimalDataPath = await readJson(animalDataPath) as IAnimalDataPath

    assert(isObject(animalData))
    assert(isArray(animalData.foxes))
    assert(isArray(animalData.wolves))
    assert(isArray(animalData.dogs))
  }
})
