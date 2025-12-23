import { PageSchema } from "../schema";
import type { PageConfig } from "../schema";
import { ConfigValidationError } from "./errors";

export function loadPageConfig(raw: unknown): PageConfig {
  const result = PageSchema.safeParse(raw);

  if (!result.success) {
    throw new ConfigValidationError(
      "Invalid page configuration",
      result.error.format()
    );
  }

  return result.data;
}
