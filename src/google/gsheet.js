import { StringWithGraph } from "@graphorigami/origami";
import { google } from "googleapis";
const sheets = google.sheets("v4");

// If `range` is omitted, this gets the entire sheet.
// From https://webapps.stackexchange.com/a/107282
export default async function sheet(auth, spreadsheetId, range = "A1:ZZ") {
  const request = { spreadsheetId, range, auth };
  let data;
  try {
    const response = (await sheets.spreadsheets.values.get(request)).data;
    data = response.values;
  } catch (err) {
    console.error(err);
    return undefined;
  }

  const text = JSON.stringify(data, null, 2);
  const result = new StringWithGraph(text, data);
  return result;
}
