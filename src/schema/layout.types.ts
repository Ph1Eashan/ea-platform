// A layout node defines STRUCTURE, not behavior

export type StackLayoutNode = {
  type: "stack";
  children: LayoutNode[];
};

export type WidgetLayoutNode = {
  type: "widget";
  widget: string; // reference to widget registry
};

export type LayoutNode = StackLayoutNode | WidgetLayoutNode;
