import type { Metadata } from "next";
import "./globals.scss";

import { Sidebar } from "@/widgets/Sidebar";
import { SidebarProvider } from "@/shared/context";

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
                <SidebarProvider>
                    <div className="mainContent">
                        <Sidebar />

                        {children}
                    </div>
                </SidebarProvider>
            </body>
        </html>
    );
}
