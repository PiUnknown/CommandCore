import { WidgetShell } from "./widget-shell";

export function DashboardGrid() {
    return (
        <main className="grid h-full grid-cols-12 grid-rows-6 gap-5 p-6">

            <WidgetShell
                title="AI Panel"
                className="col-span-3 row-span-2"
            />

            <WidgetShell
                title="Mail Summary"
                className="col-span-6 row-span-2"
            />

            <WidgetShell
                title="Calendar Timeline"
                className="col-span-3 row-span-3"
            />

            <WidgetShell
                title="Spotify Player"
                className="col-span-3 row-span-2"
            />

            <WidgetShell
                title="News Feed"
                className="col-span-6 row-span-2"
            />

            <WidgetShell
                title="Todo"
                className="col-span-3 row-span-3"
            />

            <WidgetShell
                title="Warp Command Terminal"
                className="col-span-9 row-span-1"
            />

        </main>
    );
}