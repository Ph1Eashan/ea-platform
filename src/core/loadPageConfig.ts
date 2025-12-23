import { PageSchema } from "../schema/page.schema";
import type { PageConfig } from "../schema/page.schema";

export function loadPageConfig(raw: unknown): PageConfig {
  const result = PageSchema.safeParse(raw);

  if (!result.success) {
    console.error("Invalid page configuration", result.error.format());
    throw new Error("Page config validation failed");
  }

  return result.data;
}
