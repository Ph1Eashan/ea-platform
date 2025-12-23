import { z } from "zod";
import type { ReactNode } from "react";
import { getAllData } from "../data/dataStore";

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

  const boundProps =
    typeof rawProps === "object" && rawProps !== null
      ? Object.fromEntries(
          Object.entries(rawProps).map(([k, v]) => [k, resolveBindings(v)])
        )
      : rawProps;

  const parsed = widget.schema.safeParse(boundProps ?? {});

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

function resolveBindings(value: unknown): unknown {
  if (typeof value !== "string") return value;

  const match = value.match(/^\{\{\s*(.+?)\s*\}\}$/);
  if (!match) return value;

  const expression = match[1]; // e.g. users[0].name
  const data = getAllData();

  try {
    return expression
      .split(/[.[\]]+/)
      .filter(Boolean)
      .reduce((acc: unknown, key) => {
        if (acc && typeof acc === "object" && key in acc) {
          return (acc as Record<string, unknown>)[key];
        }
        return undefined;
      }, data);
  } catch {
    return undefined;
  }
}
