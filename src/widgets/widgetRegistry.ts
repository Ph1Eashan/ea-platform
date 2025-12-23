import type { WidgetComponent } from "./types";

const widgetRegistry: Record<string, WidgetComponent> = Object.create(null);

/**
 * Register a widget with a unique name.
 */
export function registerWidget(name: string, component: WidgetComponent): void {
  if (widgetRegistry[name]) {
    throw new Error(`Widget "${name}" is already registered`);
  }

  widgetRegistry[name] = component;
}

/**
 * Resolve a widget by name.
 * Crashes if not found — intentionally.
 */
export function getWidget(name: string): WidgetComponent {
  const widget = widgetRegistry[name];

  if (!widget) {
    throw new Error(`Widget "${name}" is not registered`);
  }

  return widget;
}
