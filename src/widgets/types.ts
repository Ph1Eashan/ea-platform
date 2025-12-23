import type { ReactNode } from "react";
import type { WidgetConfig } from "../schema/widget.types";

/**
 * A WidgetComponent is a pure renderer.
 * It receives config and returns JSX.
 */
export type WidgetComponent = (props: WidgetConfig) => ReactNode;
