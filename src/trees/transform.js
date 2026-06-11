import { Origami } from "@weborigami/origami";

export default function transform(map) {
  return {
    get(htmlKey) {
      const mdKey = `${htmlKey.slice(0, -5)}.md`;
      const markdown = map.get(mdKey);
      return markdown ? Origami.mdHtml(markdown) : undefined;
    },

    *keys() {
      for (const mdKey of map.keys()) {
        const htmlKey = `${mdKey.slice(0, -3)}.html`;
        yield htmlKey;
      }
    },
  };
}
