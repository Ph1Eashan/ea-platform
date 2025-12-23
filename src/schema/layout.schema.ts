import { z } from "zod";

/**
 * Layout node types
 */
export type StackLayoutNode = {
  type: "stack";
  children: LayoutNode[];
};

export type WidgetLayoutNode = {
  type: "widget";
  widget: string;
  props?: unknown; // ⬅ untrusted until validated by widget
};

export type LayoutNode = StackLayoutNode | WidgetLayoutNode;

/**
 * Recursive Zod schema
 */
export const LayoutNodeSchema: z.ZodType<LayoutNode> = z.lazy(() =>
  z.union([
    z.object({
      type: z.literal("stack"),
      children: z.array(LayoutNodeSchema),
    }),
    z.object({
      type: z.literal("widget"),
      widget: z.string().min(1),
      props: z.unknown().optional(),
    }),
  ])
);
