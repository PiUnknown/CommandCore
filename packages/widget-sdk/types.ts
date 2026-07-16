import { ComponentType } from "react";

export type WidgetState =
  | "normal"
  | "expanded"
  | "minimized";

export interface WidgetDefinition {
  id: string;

  title: string;

  component: ComponentType;

  defaultState: WidgetState;

  gridClassName: string;
}