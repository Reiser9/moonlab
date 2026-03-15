"use client";

import Link from "next/link";
import cn from "classnames";
import { usePathname } from "next/navigation";

import { Candles2, Dashboard, DocsArrows, Rocket } from "@/shared/icons";

const DashboardTabs = () => {
    const pathname = usePathname();

    return (
        <div className="dashboardTabs">
            <Link
                href="/dashboard"
                className={cn("dashboardTab", {
                    ["active"]: pathname === "/dashboard",
                })}
            >
                <Dashboard />
                Overview
            </Link>

            <Link
                href="/dashboard/lauched"
                className={cn("dashboardTab", {
                    ["active"]: pathname === "/dashboard/lauched",
                })}
            >
                <Rocket />
                Launched Tokens
            </Link>

            <Link
                href="/dashboard/closed"
                className={cn("dashboardTab", {
                    ["active"]: pathname === "/dashboard/closed",
                })}
            >
                <Candles2 />
                Closed Trades
            </Link>

            <Link
                href="/dashboard/transactions"
                className={cn("dashboardTab", {
                    ["active"]: pathname === "/dashboard/transactions",
                })}
            >
                <DocsArrows />
                Transactions
            </Link>
        </div>
    );
};

export default DashboardTabs;
