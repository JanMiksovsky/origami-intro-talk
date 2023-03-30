import { marked } from "marked";

export default function (markdownGraph) {
  const htmlGraph = {
    async get(key) {
      const markdownKey = key.replace(/\.html$/, ".md");
      const markdown = await markdownGraph.get(markdownKey);
      if (markdown) {
        return marked(markdown.toString());
      }
    },

    async keys() {
      const markdownKeys = Array.from(await markdownGraph.keys());
      const htmlKeys = markdownKeys.map((key) => key.replace(/\.md$/, ".html"));
      return htmlKeys;
    },
  };

  return htmlGraph;
}
