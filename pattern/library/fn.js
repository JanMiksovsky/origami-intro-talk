import { FunctionGraph } from "@graphorigami/origami";

const graph = new FunctionGraph(
  (key) => {
    if (key === undefined) {
      return graph;
    } else if (key.endsWith(".md")) {
      const name = key.slice(0, -3);
      return `Hello, **${name}**.`;
    }
  },
  ["Alice.md", "Bob.md", "Carol.md"]
);

export default graph;
