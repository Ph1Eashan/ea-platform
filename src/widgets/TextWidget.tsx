import type { TextWidgetProps } from "./widgetSchemas";

export function TextWidget(props: TextWidgetProps) {
  return <p>{props.value}</p>;
}
