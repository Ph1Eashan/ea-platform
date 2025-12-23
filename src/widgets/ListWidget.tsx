import { renderLayout } from "../layout/layoutEngine";
import { pushContext, popContext } from "../data/dataStore";
import type { ListWidgetProps } from "./widgetSchemas";

export function ListWidget(props: ListWidgetProps) {
  return (
    <>
      {props.items.map((item, index) => {
        pushContext({ item, index });

        const node = renderLayout(props.render);

        popContext();

        return <div key={index}>{node}</div>;
      })}
    </>
  );
}
