import type { PageConfig } from "../../schema/page.types";

export const demoPage: PageConfig = {
  page: {
    title: "EA Platform Demo",
  },
  layout: {
    type: "stack",
    children: [
      {
        type: "widget",
        widget: "text",
      },
    ],
  },
};
