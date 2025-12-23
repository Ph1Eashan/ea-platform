import { z } from "zod";

/**
 * Text widget props schema
 */
export const TextWidgetPropsSchema = z.object({
  value: z.string().min(1),
});

export type TextWidgetProps = z.infer<typeof TextWidgetPropsSchema>;
