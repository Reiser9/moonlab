"use client";

import React from "react";
import cn from "classnames";

import "./index.scss";
import "@/shared/styles/base.scss";

import { useSidebarContext } from "@/shared/context/SidebarProvider";
import { Footer } from "@/widgets/Footer";
import { Header } from "@/widgets/Header";

const InitialWrapper = ({ children }: { children: React.ReactNode }) => {
    const { sidebarIsOpen } = useSidebarContext();

    return (
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
    );
};

export default InitialWrapper;
