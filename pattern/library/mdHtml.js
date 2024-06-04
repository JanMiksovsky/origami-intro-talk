import { marked } from "marked";

export default (value) => marked(String(value));
