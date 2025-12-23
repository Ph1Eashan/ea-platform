import type { LayoutNode } from "./layout.types";

export type PageMeta = {
  title: string;
};

export type PageConfig = {
  page: PageMeta;
  layout: LayoutNode;
};
