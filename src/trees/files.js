import * as fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const moduleFolder = path.dirname(fileURLToPath(import.meta.url));
const dirname = path.resolve(moduleFolder, "markdown");

export default {
  get(key) {
    const filename = path.resolve(dirname, key);
    try {
      return fs.readFileSync(filename); // Return file contents
    } catch (error) {
      if (error.code === "ENOENT") {
        return undefined;
      }
      throw error;
    }
  },

  *keys() {
    yield* fs.readdirSync(dirname);
  },
};
