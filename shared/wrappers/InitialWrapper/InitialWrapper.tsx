"use client";

import React from "react";
import cn from "classnames";
import ruRU from "antd/locale/ru_RU";
import { ConfigProvider } from "antd";

import "./index.scss";

import { useSidebarContext } from "@/shared/context/SidebarProvider";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";

const InitialWrapper = ({ children }: { children: React.ReactNode }) => {
    const { sidebarIsOpen } = useSidebarContext();

    return (
        <ConfigProvider
            locale={ruRU}
            theme={{
                token: {
                    colorPrimary: "#1FAD4F",
                    fontFamily: "Rubik, sans-serif",
                },
            }}
        >
            <div
                className={cn("mainPage", {
                    ["sidebarOpen"]: sidebarIsOpen,
                })}
            >
                <div className="container">
                    <div className="mainPageInner">
                        <Header />

                        {children}

                        <Footer />
                    </div>
                </div>
            </div>
        </ConfigProvider>
    );
};

export default InitialWrapper;
