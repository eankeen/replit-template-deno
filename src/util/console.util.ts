import { fmt } from "../deps.ts";

export class Color {
  error(text: string): string {
    return fmt.getColorEnabled() ? fmt.red(fmt.bold(text)) : text;
  }
}
