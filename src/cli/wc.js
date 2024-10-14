export default function wordCount(input) {
  const text =
    input instanceof Uint8Array ? new TextDecoder().decode(input) : input;
  const words = text.split(/\s+/).filter((word) => word);
  return words.length;
}
