"use client";

import React from "react";
import Link from "next/link";
import cn from "classnames";
import { usePathname } from "next/navigation";

import "./index.scss";

import { Crown2 } from "@/shared/icons";

const HallOfFameLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    return (
        <>
            <div className="hallTop">
                <div className="hallTopIcon">
                    <Crown2 />
                </div>

                <div className="hallTopTexts">
                    <p className="hallTopTitle">Trading Hall of Fame</p>

                    <p className="hallTopText">
                        Top traders by PnL performance
                    </p>
                </div>
            </div>

            <div className="hallTabs">
                <Link
                    href="/hall-of-fame"
                    className={cn("hallTab", {
                        ["active"]: pathname === "/hall-of-fame",
                    })}
                >
                    Traders
                </Link>

                <Link
                    href="/hall-of-fame/creators"
                    className={cn("hallTab", {
                        ["active"]: pathname === "/hall-of-fame/creators",
                    })}
                >
                    Creators
                </Link>

                <Link
                    href="/hall-of-fame/referral"
                    className={cn("hallTab", {
                        ["active"]: pathname === "/hall-of-fame/referral",
                    })}
                >
                    Top referral
                </Link>
            </div>

            {children}
        </>
    );
};

export default HallOfFameLayout;
