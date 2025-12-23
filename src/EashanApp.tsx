import { renderLayout } from "./layout/layoutEngine";
import { loadPageConfig } from "./core/loadPageConfig";
import rawConfig from "./pages/demo/config.json";

export function EashanApp() {
  const pageConfig = loadPageConfig(rawConfig);

  return (
    <div>
      <h1>{pageConfig.page.title}</h1>
      {renderLayout(pageConfig.layout)}
    </div>
  );
}
