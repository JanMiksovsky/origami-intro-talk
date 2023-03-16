import { MapExtensionsGraph } from "@graphorigami/origami";
import { marked } from "marked";

export default function (graph) {
  return new MapExtensionsGraph(graph, (value) => marked(String(value)), {
    extension: "md->html",
  });
}
