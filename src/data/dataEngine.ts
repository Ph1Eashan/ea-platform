import type { DataMap } from "./data.schema";
import { setData } from "./dataStore";

export async function runDataEngine(data?: DataMap) {
  if (!data) return;

  const entries = Object.entries(data);

  for (const [key, source] of entries) {
    if (source.type === "get") {
      const response = await fetch(source.url);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${key}`);
      }

      const json = await response.json();
      setData(key, json);
    }
  }
}
