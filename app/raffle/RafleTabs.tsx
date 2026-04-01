"use client";

import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RafleTabs = () => {
    const pathname = usePathname();

    return (
        <div className="rafleTabs">
            <Link
                href="/raffle"
                className={cn("rafleTab", {
                    ["active"]: pathname === "/raffle",
                })}
            >
                Rafle
            </Link>

            <Link
                href="/raffle/weekly"
                className={cn("rafleTab", {
                    ["active"]: pathname === "/raffle/weekly",
                })}
            >
                Weekly race
            </Link>

            <Link
                href="/raffle/monthly"
                className={cn("rafleTab", {
                    ["active"]: pathname === "/raffle/monthly",
                })}
            >
                Monthly race
            </Link>
        </div>
    );
};

export default RafleTabs;
