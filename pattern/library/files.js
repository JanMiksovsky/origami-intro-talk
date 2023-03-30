import { FilesGraph } from "@graphorigami/origami";
import path from "node:path";
import { fileURLToPath } from "node:url";

const moduleFolder = path.dirname(fileURLToPath(import.meta.url));
const dirname = path.resolve(moduleFolder, "markdown");

export default new FilesGraph(dirname);
