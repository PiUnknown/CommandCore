import type { WidgetDefinition } from "@commandcore/widget-sdk";
import { MailWidget } from "./mail-widget";

export const mailWidget: WidgetDefinition = {
    id: "mail",
    title: "Mail Summary",
    component: MailWidget,
    defaultState: "normal",
    gridClassName: "col-span-6 row-span-2",
};