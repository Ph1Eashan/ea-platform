import { z } from "zod";
import { LayoutNodeSchema } from "./layout.schema";

export const PageSchema = z.object({
  page: z.object({
    title: z.string().min(1),
  }),
  layout: LayoutNodeSchema,
});

export type PageConfig = z.infer<typeof PageSchema>;
