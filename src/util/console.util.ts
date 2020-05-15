import { fmt } from "../deps.ts";

export function formatError(text: string): string {
  return fmt.getColorEnabled() ? fmt.red(fmt.bold(text)) : text;
}
