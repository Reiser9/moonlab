import type { Metadata } from "next";
import "./globals.scss";

import { Sidebar } from "@/widgets/Sidebar";

export const metadata: Metadata = {
    title: "Moonlab",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="mainContent">
                    <Sidebar />

                    {children}
                </div>
            </body>
        </html>
    );
}
