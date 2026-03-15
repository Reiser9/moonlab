import type { Metadata } from "next";
import "./globals.scss";
import "@/shared/styles/base.scss";

import { Sidebar } from "@/widgets/Sidebar";
import { SidebarProvider } from "@/shared/context";
import { InitialWrapper } from "@/shared/wrappers/InitialWrapper";

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

                        <InitialWrapper>
                            {children}
                        </InitialWrapper>
                    </div>
                </SidebarProvider>
            </body>
        </html>
    );
}
