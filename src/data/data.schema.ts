import { z } from "zod";

export const GetDataSourceSchema = z.object({
  type: z.literal("get"),
  url: z.string().url(),
});

export const DataSourceSchema = z.union([GetDataSourceSchema]);

export type DataSource = z.infer<typeof DataSourceSchema>;

export const DataMapSchema = z.record(z.string(), DataSourceSchema);

export type DataMap = z.infer<typeof DataMapSchema>;
