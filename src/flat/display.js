import path from "node:path";
import process from "node:process";
import { pathToFileURL } from "node:url";

// Get a file name from the command line.
const [node, display, moduleName] = process.argv;
const modulePath = path.resolve(process.cwd(), moduleName);

// Load the module.
// On Windows, import paths must be valid file:// URLs.
const moduleUrl = pathToFileURL(modulePath);
const module = await import(moduleUrl);

// Take the module's default export as a graph.
const graph = module.default;

// Display the graph in the console.
for (const key of await graph.keys()) {
  const value = await graph.get(key);
  console.log(`${key}: ${value}`);
}
