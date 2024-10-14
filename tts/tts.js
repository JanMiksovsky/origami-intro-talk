import { toString } from "@weborigami/async-tree";

// Function to call the OpenAI Text-to-Speech API
export default async function textToSpeech(text) {
  let creds = await this.get("creds.json");
  if (creds.unpack) {
    creds = await creds.unpack();
  }
  const apiKey = creds.apiKey;

  const input = toString(text);
  const body = {
    input,
    model: "tts-1",
    voice: "shimmer",
  };

  const response = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  return response.arrayBuffer();
}
