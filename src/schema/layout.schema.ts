import { z } from "zod";

/**
 * Discriminated layout node types
 */
export type StackLayoutNode = {
  type: "stack";
  children: LayoutNode[];
};

export type WidgetLayoutNode = {
  type: "widget";
  widget: string;
};

export type LayoutNode = StackLayoutNode | WidgetLayoutNode;

/**
 * Zod schemas
 */

// We must explicitly annotate recursive schemas
export const LayoutNodeSchema: z.ZodType<LayoutNode> = z.lazy(() =>
  z.union([
    z.object({
      type: z.literal("stack"),
      children: z.array(LayoutNodeSchema),
    }),
    z.object({
      type: z.literal("widget"),
      widget: z.string().min(1),
    }),
  ])
);
