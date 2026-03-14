"use client";

import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RafleTabs = () => {
    const pathname = usePathname();

    return (
        <div className="rafleTabs">
            <Link
                href="/rafle"
                className={cn("rafleTab", {
                    ["active"]: pathname === "/rafle",
                })}
            >
                Rafle
            </Link>

            <Link
                href="/rafle/weekly"
                className={cn("rafleTab", {
                    ["active"]: pathname === "/rafle/weekly",
                })}
            >
                Weekly race
            </Link>

            <Link
                href="/rafle/monthly"
                className={cn("rafleTab", {
                    ["active"]: pathname === "/rafle/monthly",
                })}
            >
                Monthly race
            </Link>
        </div>
    );
};

export default RafleTabs;
