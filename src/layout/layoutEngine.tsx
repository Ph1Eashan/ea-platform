import type { ReactNode } from "react";
import type { LayoutNode } from "../schema/layout.schema";
import { getWidget } from "../widgets/widgetRegistry";
import { StackLayout } from "./StackLayout";

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
      // 👇 correct exhaustiveness check
      const _exhaustiveCheck: never = node;
      return _exhaustiveCheck;
    }
  }
}
