import "./globals.css";

import type { Metadata } from "next";
import { GeistMono, GeistSans } from "next/font/google";
import type { ReactNode } from "react";

const sans = GeistSans({
    subsets: ["latin"],
    variable: "--font-sans"
});

const mono = GeistMono({
    subsets: ["latin"],
    variable: "--font-mono"
});

export const metadata: Metadata = {
    title: "CommandCore",
    description: "Your Personal Command Center"
};

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({
    children
}: RootLayoutProps) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
        >
            <body
                className={`${sans.variable} ${mono.variable}`}
            >
                {children}
            </body>
        </html>
    );
}