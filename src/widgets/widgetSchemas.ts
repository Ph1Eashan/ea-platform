import { z } from "zod";

export const TextWidgetPropsSchema = z.object({
  value: z.string(),
});

export const ListWidgetPropsSchema = z.object({
  items: z.array(z.unknown()),
  render: z.any(), // validated at layout level
});

export type TextWidgetProps = z.infer<typeof TextWidgetPropsSchema>;
export type ListWidgetProps = z.infer<typeof ListWidgetPropsSchema>;
