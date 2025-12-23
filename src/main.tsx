import React from "react";
import ReactDOM from "react-dom/client";
import { EashanApp } from "./EashanApp";
import { registerWidget } from "./widgets/widgetRegistry";
import { TextWidget } from "./widgets/TextWidget";

// explicit registration (engine rule)
registerWidget("text", TextWidget);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <EashanApp />
  </React.StrictMode>
);
