"use client";

import React from "react";
import Link from "next/link";
import cn from "classnames";

import styles from "./index.module.scss";

import { Chat, LogoSmall, OpenSidebar, Telegram, X } from "@/shared/icons";

const Sidebar = () => {
    const [sidebarIsOpen, setSidebarIsOpen] = React.useState(false);

    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarTop}>
                <Link href="/" className={styles.sidebarLogo}>
                    <LogoSmall />
                </Link>

                <nav className={styles.sidebarNav}>
                    <button
                        className={cn(
                            styles.gradientButton,
                            styles.sidebarOpen,
                            {
                                [styles.active]: sidebarIsOpen,
                            },
                        )}
                        onClick={() => setSidebarIsOpen((prev) => !prev)}
                    >
                        <OpenSidebar />
                    </button>

                    <Link href="/" className={cn(styles.gradientButton, styles.sidebarNavLink)}>
                        
                    </Link>
                </nav>
            </div>

            <div className={styles.sidebarBottom}>
                <a
                    href="#"
                    target="_blank"
                    className={styles.sidebarSocialLink}
                >
                    <X />
                </a>

                <a
                    href="#"
                    target="_blank"
                    className={styles.sidebarSocialLink}
                >
                    <Telegram />
                </a>

                <button
                    className={cn(styles.gradientButton, styles.sidebarSupport)}
                >
                    <Chat />
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
