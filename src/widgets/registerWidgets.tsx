import { registerWidget } from "./widgetRegistry";
import { TextWidget } from "./TextWidget";
import { ListWidget } from "./ListWidget";
import { TextWidgetPropsSchema, ListWidgetPropsSchema } from "./widgetSchemas";

registerWidget("text", TextWidgetPropsSchema, (props) => (
  <TextWidget {...props} />
));

registerWidget("list", ListWidgetPropsSchema, (props) => (
  <ListWidget {...props} />
));
