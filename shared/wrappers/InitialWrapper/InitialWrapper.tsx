"use client";

import React from "react";
import cn from "classnames";
import Link from "next/link";

import styles from "./index.module.scss";
import base from '@/shared/styles/base.module.scss';

import { Logo, Menu, UserLogin } from "@/shared/icons";
import { LiveTradeItem } from "@/shared/ui/TradeItem";
import { useSidebarContext } from "@/shared/context/SidebarProvider";


const InitialWrapper = ({ children }: { children: React.ReactNode }) => {
    const { sidebarIsOpen, setSidebarIsOpen } = useSidebarContext();

    return (
        <div
            className={cn(styles.mainPage, {
                [styles.sidebarOpen]: sidebarIsOpen,
            })}
        >
            <div className={base.container}>
                <div className={styles.mainPageInner}>
                    <header className={styles.header}>
                        <div className={styles.headerInfo}>
                            <p className={styles.liveTrades}>
                                <span></span>
                                Live Trades
                            </p>

                            <div className={styles.headerMobileLogo}>
                                <Logo />
                            </div>
                        </div>

                        <div className={styles.headerTrades}>
                            <div className={styles.headerTradesItem}>
                                <LiveTradeItem name="Semubam" />
                                <LiveTradeItem name="Vepaf17" />
                                <LiveTradeItem name="user_f78029" />
                                <LiveTradeItem name="Semubam" />
                                <LiveTradeItem name="Vepaf17" />
                                <LiveTradeItem name="user_f78029" />
                                <LiveTradeItem name="Semubam" />
                                <LiveTradeItem name="Vepaf17" />
                                <LiveTradeItem name="user_f78029" />
                                <LiveTradeItem name="Semubam" />
                                <LiveTradeItem name="Vepaf17" />
                                <LiveTradeItem name="user_f78029" />
                            </div>

                            <div className={styles.headerTradesItem}>
                                <LiveTradeItem name="Semubam" />
                                <LiveTradeItem name="Vepaf17" />
                                <LiveTradeItem name="user_f78029" />
                                <LiveTradeItem name="Semubam" />
                                <LiveTradeItem name="Vepaf17" />
                                <LiveTradeItem name="user_f78029" />
                                <LiveTradeItem name="Semubam" />
                                <LiveTradeItem name="Vepaf17" />
                                <LiveTradeItem name="user_f78029" />
                                <LiveTradeItem name="Semubam" />
                                <LiveTradeItem name="Vepaf17" />
                                <LiveTradeItem name="user_f78029" />
                            </div>
                        </div>

                        <div className={styles.headerCredentials}>
                            <Link href="/" className={styles.headerLogin}>
                                <UserLogin />
                                Log in / Sign up
                            </Link>

                            <button
                                className={styles.headerMenuButton}
                                onClick={() =>
                                    setSidebarIsOpen((prev) => !prev)
                                }
                            >
                                <Menu />
                            </button>
                        </div>
                    </header>

                    {children}

                    <footer className={styles.footer}>
                        <p className={styles.footerCopy}>
                            MoonLAb {new Date().getFullYear()} &copy;
                        </p>

                        <div className={styles.footerLinks}>
                            <Link href="#" className={styles.footerLink}>
                                Privacy Policy
                            </Link>
                            <Link href="#" className={styles.footerLink}>
                                Terms of Use
                            </Link>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default InitialWrapper;
