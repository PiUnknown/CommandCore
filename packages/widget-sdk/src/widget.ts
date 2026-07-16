import type { ReactNode } from "react";
import type { WidgetManifest } from "./manifest";

export interface WidgetProps {
  expanded: boolean;
}

export interface WidgetComponent {
  (props: WidgetProps): ReactNode;
}

export interface WidgetModule {
  manifest: WidgetManifest;
  component: WidgetComponent;
}