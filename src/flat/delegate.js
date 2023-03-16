export default function (graph) {
  return {
    async get(key) {
      return graph.get(key);
    },

    async keys() {
      return graph.keys();
    },
  };
}
