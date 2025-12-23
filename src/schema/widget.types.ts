// Widget config describes WHAT to render, not HOW

export type WidgetConfig = {
  id: string;
  type: string; // resolved via widget registry
};
