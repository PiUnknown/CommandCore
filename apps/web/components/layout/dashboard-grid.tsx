import { widgetRegistry } from "@/widgets/registry";
import { WidgetRenderer } from "./widget-renderer";

export function DashboardGrid() {
    return (
        <main className="grid h-full grid-cols-12 grid-rows-6 gap-5 p-6">
            {widgetRegistry.map((widget) => (
                <WidgetRenderer
                    key={widget.id}
                    widget={widget}
                />
            ))}
        </main>
    );
}