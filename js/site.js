import { cachedKeyFunctions, map } from "@weborigami/async-tree";
import { OrigamiFiles } from "@weborigami/language";
import path from "node:path";
import { fileURLToPath } from "node:url";
import thumbnail from "./thumbnail.js";

export default async function () {
  const parent = this;
  const dirname = path.dirname(fileURLToPath(import.meta.url));
  const files = new OrigamiFiles(dirname);
  files.parent = parent;

  const assets = await files.get("assets");
  const images = await files.get("images");
  const indexTemplate = await (await files.get("index.ori")).unpack();
  const personTemplate = await (await files.get("person.ori")).unpack();
  const teamData = await (await files.get("teamData.yaml")).unpack();

  const indexHtml = await indexTemplate(teamData);
  const thumbnails = map(images, thumbnail);
  const team = map(teamData, {
    ...cachedKeyFunctions((index) => `${teamData[index].name}.html`),
    value: (person) => personTemplate(person),
  });

  return {
    assets,
    images,
    "index.html": indexHtml,
    team,
    thumbnails,
  };
}
