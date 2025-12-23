import { renderLayout } from "./layout/layoutEngine";
import { demoPage } from "./pages/demo/page";

export function EashanApp() {
  return (
    <div>
      <h1>{demoPage.page.title}</h1>
      {renderLayout(demoPage.layout)}
    </div>
  );
}
