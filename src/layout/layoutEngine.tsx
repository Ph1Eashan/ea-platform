import type { ReactNode } from "react";
import type { LayoutNode } from "../schema";
import { getWidget } from "../widgets/widgetRegistry";
import { StackLayout } from "./StackLayout";

/**
 * Recursively renders a LayoutNode tree.
 */
export function renderLayout(node: LayoutNode): ReactNode {
  switch (node.type) {
    case "stack": {
      const children = node.children.map(renderLayout);
      return <StackLayout>{children}</StackLayout>;
    }

    case "widget": {
      const Widget = getWidget(node.widget);
      return <Widget id={node.widget} type={node.widget} />;
    }

    default: {
      // Exhaustiveness check
      const _exhaustive: never = node;
      throw new Error(`Unhandled layout node: ${_exhaustive}`);
    }
  }
}
