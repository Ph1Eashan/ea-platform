import type { PageConfig } from "../schema/page.types";

/**
 * Loads a page config from untrusted input.
 * Validation will be added in Phase 2.2.
 */
export function loadPageConfig(raw: unknown): PageConfig {
  // ❗ Temporary unsafe cast — intentional for Phase 2.1
  return raw as PageConfig;
}
