import { z } from "zod";
import type { ReactNode } from "react";

type WidgetDefinition<Props> = {
  schema: z.ZodType<Props>;
  render: (props: Props) => ReactNode;
};

const widgetRegistry: Record<string, WidgetDefinition<unknown>> = Object.create(
  null
);

export function registerWidget<Props>(
  name: string,
  schema: z.ZodType<Props>,
  render: (props: Props) => ReactNode
): void {
  if (widgetRegistry[name]) {
    throw new Error(`Widget "${name}" is already registered`);
  }

  widgetRegistry[name] = {
    schema,
    render,
  } as WidgetDefinition<unknown>;
}

export function resolveWidget(name: string, rawProps: unknown): ReactNode {
  const widget = widgetRegistry[name];

  if (!widget) {
    throw new Error(`Widget "${name}" is not registered`);
  }

  const parsed = widget.schema.safeParse(rawProps ?? {});

  if (!parsed.success) {
    throw new Error(
      `Invalid props for widget "${name}": ${JSON.stringify(
        parsed.error.format(),
        null,
        2
      )}`
    );
  }

  return widget.render(parsed.data);
}
