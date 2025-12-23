import React from "react";
import ReactDOM from "react-dom/client";
import { EashanApp } from "./EashanApp";
import { ErrorBoundary } from "./components/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <EashanApp />
    </ErrorBoundary>
  </React.StrictMode>
);
