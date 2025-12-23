import React from "react";
import ReactDOM from "react-dom/client";
import { EashanApp } from "./EashanApp";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { registerWidget } from "./widgets/widgetRegistry";
import { TextWidget } from "./widgets/TextWidget";
import { TextWidgetPropsSchema } from "./widgets/widgetSchemas";

registerWidget("text", TextWidgetPropsSchema, (props) => (
  <TextWidget {...props} />
));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <EashanApp />
    </ErrorBoundary>
  </React.StrictMode>
);
