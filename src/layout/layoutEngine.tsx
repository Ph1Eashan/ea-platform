import type { ReactNode } from "react";
import type { LayoutNode } from "../schema";
import { resolveWidget } from "../widgets/widgetRegistry";
import { StackLayout } from "./StackLayout";

export function renderLayout(node: LayoutNode): ReactNode {
  switch (node.type) {
    case "stack": {
      const children = node.children.map(renderLayout);
      return <StackLayout>{children}</StackLayout>;
    }

    case "widget": {
      return resolveWidget(node.widget, node.props);
    }

    default: {
      const _exhaustive: never = node;
      return _exhaustive;
    }
  }
}
