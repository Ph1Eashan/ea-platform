import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { EashanApp } from "./EashanApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <EashanApp />
  </StrictMode>
);
