import { useEffect, useState } from "react";
import { loadPageConfig } from "./core/loadPageConfig";
import { renderLayout } from "./layout/layoutEngine";
import { runDataEngine } from "./data/dataEngine";

import rawConfig from "./pages/demo/config.json";

export function EashanApp() {
  const [ready, setReady] = useState(false);
  const pageConfig = loadPageConfig(rawConfig);

  useEffect(() => {
    runDataEngine(pageConfig.data)
      .then(() => setReady(true))
      .catch((e) => {
        throw e;
      });
  }, [pageConfig]);

  if (!ready) {
    return <div>Loading data...</div>;
  }

  return (
    <div>
      <h1>{pageConfig.page.title}</h1>
      {renderLayout(pageConfig.layout)}
    </div>
  );
}
