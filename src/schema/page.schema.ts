import { z } from "zod";
import { LayoutNodeSchema } from "./layout.schema";
import { DataMapSchema } from "../data/data.schema";

export const PageSchema = z.object({
  page: z.object({
    title: z.string(),
  }),
  data: DataMapSchema.optional(), // 👈 NEW
  layout: LayoutNodeSchema,
});

export type PageConfig = z.infer<typeof PageSchema>;
