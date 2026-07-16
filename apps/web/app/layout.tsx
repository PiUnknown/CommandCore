import "./globals.css";

import type { Metadata } from "next";
import { GeistMono, GeistSans } from "next/font/google";
import type { ReactNode } from "react";

const geistSans = GeistSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

const geistMono = GeistMono({
    subsets: ["latin"],
    variable: "--font-mono",
});

export const metadata: Metadata = {
    title: {
        default: "CommandCore",
        template: "%s | CommandCore",
    },
    description: "Your Personal Command Center",
};

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({
    children,
}: Readonly<RootLayoutProps>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}