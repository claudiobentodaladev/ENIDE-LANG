import { ExamplesIdentifier } from "../interfaces/examples.interface.js";
import { exemplesEntry } from "../utils/transforms.js";

export function mapExemples(exemples: ExamplesIdentifier) {
  return {
    __number: exemplesEntry(exemples.__number),
    __string: exemplesEntry(exemples.__string),
    __boolean: exemplesEntry(exemples.__boolean),
    __object: exemplesEntry(exemples.__object),
    __void: exemplesEntry(exemples.__void),
    __array: exemplesEntry(exemples.__array),
    __function: exemplesEntry(exemples.__function),
  };
}
