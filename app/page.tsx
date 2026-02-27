"use client";

import React from "react";
import Link from "next/link";
import cn from "classnames";
import Image from "next/image";

import styles from "./index.module.scss";

import {
    ArrowDown,
    ArrowFall,
    ArrowLeft,
    ArrowRight,
    BlockView,
    CheckCircle,
    ListView,
    UserLogin,
} from "@/shared/icons";
import { Search } from "@/shared/icons/Search";
import { Token } from "@/shared/ui/Token";

const MainPage = () => {
    const [view, setView] = React.useState<"block" | "list">("block");
    const [time, setTime] = React.useState<
        "all" | "4h" | "1h" | "15m" | "3m" | "1m"
    >("all");
    const [isHighVolume, setIsHighVolume] = React.useState(false);

    return (
        <div className={styles.mainPage}>
            <div className={styles.container}>
                <div className={styles.mainPageInner}>
                    <div className={styles.mainPoints}>
                        <div
                            className={cn(styles.mainPoint, styles.tokenBlock)}
                        >
                            <Image
                                src="/img/mainpoint-bg.png"
                                alt="Grid"
                                fill
                                className={styles.mainPointBg}
                            />

                            <div className={styles.mainPointTextBlock}>
                                <p className={styles.mainPointTitle}>
                                    Launch tokens on Turbo
                                </p>
                                <p className={styles.mainPointText}>
                                    No insiders, no rugpulls - pure math bullet
                                    point icon
                                </p>
                            </div>

                            <div className={styles.mainPointImage}>
                                <Image
                                    src="/img/main1.png"
                                    alt="Launch tokens"
                                    fill
                                />
                            </div>

                            <button className={styles.mainPointButton}>
                                <UserLogin />
                                Sign up
                            </button>
                        </div>

                        <div className={cn(styles.mainPoint, styles.paidBlock)}>
                            <Image
                                src="/img/mainpoint-bg.png"
                                alt="Grid"
                                fill
                                className={styles.mainPointBg}
                            />

                            <div className={styles.mainPointTextBlock}>
                                <p className={styles.mainPointTitle}>
                                    $483.2K paid to creators today
                                </p>
                                <p className={styles.mainPointText}>
                                    Get 0.5% from volume
                                </p>
                            </div>

                            <div className={styles.mainPointImage}>
                                <Image
                                    src="/img/main2.png"
                                    alt="Launch tokens"
                                    fill
                                />
                            </div>

                            <button className={styles.mainPointButton}>
                                Go in
                            </button>
                        </div>

                        <div
                            className={cn(styles.mainPoint, styles.prizeBlock)}
                        >
                            <Image
                                src="/img/mainpoint-bg.png"
                                alt="Grid"
                                fill
                                className={styles.mainPointBg}
                            />

                            <div className={styles.mainPointTextBlock}>
                                <p className={styles.mainPointTitle}>
                                    prize drawing Launch for just $1
                                </p>
                                <p className={styles.mainPointText}>
                                    Earn unlimited fees
                                </p>
                            </div>

                            <div className={styles.mainPointImage}>
                                <Image
                                    src="/img/main3.png"
                                    alt="Launch tokens"
                                    fill
                                />
                            </div>

                            <button className={styles.mainPointButton}>
                                Go in
                            </button>
                        </div>
                    </div>

                    <div className={styles.mainContent}>
                        <div className={styles.mainContentTop}>
                            <div className={styles.mainContentWrapper}>
                                <p className={styles.blockTitle}>
                                    Traiding now
                                </p>

                                <p className={styles.blockCount}>209 / 350</p>

                                <div className={styles.blockView}>
                                    <button
                                        className={cn(styles.blockViewButton, {
                                            [styles.active]: view === "block",
                                        })}
                                        onClick={() => setView("block")}
                                    >
                                        <BlockView />
                                    </button>

                                    <button
                                        className={cn(styles.blockViewButton, {
                                            [styles.active]: view === "list",
                                        })}
                                        onClick={() => setView("list")}
                                    >
                                        <ListView />
                                    </button>
                                </div>

                                <button
                                    className={cn(styles.pressedButton, {
                                        [styles.active]: isHighVolume,
                                    })}
                                    onClick={() =>
                                        setIsHighVolume((prev) => !prev)
                                    }
                                >
                                    <span>
                                        <CheckCircle />
                                    </span>
                                    High volume
                                </button>
                            </div>

                            <div className={styles.searchInputInner}>
                                <input
                                    className={styles.searchInput}
                                    placeholder="Search token"
                                />

                                <Search />
                            </div>

                            <div className={styles.mainContentFilters}>
                                <div className={styles.filtersBlockTabs}>
                                    <button
                                        className={cn(styles.filtersBlockTab, {
                                            [styles.active]: time === "all",
                                        })}
                                        onClick={() => setTime("all")}
                                    >
                                        All
                                    </button>

                                    <button
                                        className={cn(styles.filtersBlockTab, {
                                            [styles.active]: time === "4h",
                                        })}
                                        onClick={() => setTime("4h")}
                                    >
                                        4h
                                    </button>

                                    <button
                                        className={cn(styles.filtersBlockTab, {
                                            [styles.active]: time === "1h",
                                        })}
                                        onClick={() => setTime("1h")}
                                    >
                                        1h
                                    </button>

                                    <button
                                        className={cn(styles.filtersBlockTab, {
                                            [styles.active]: time === "15m",
                                        })}
                                        onClick={() => setTime("15m")}
                                    >
                                        15m
                                    </button>

                                    <button
                                        className={cn(styles.filtersBlockTab, {
                                            [styles.active]: time === "3m",
                                        })}
                                        onClick={() => setTime("3m")}
                                    >
                                        3m
                                    </button>

                                    <button
                                        className={cn(styles.filtersBlockTab, {
                                            [styles.active]: time === "1m",
                                        })}
                                        onClick={() => setTime("1m")}
                                    >
                                        1m
                                    </button>
                                </div>

                                <button className={styles.filterSelect}>
                                    <span className={styles.filterSelectTitle}>Soft by:</span>

                                    <span className={styles.filterSelectValue}>Newest first</span>

                                    <ArrowDown />
                                </button>
                            </div>
                        </div>

                        <div className={styles.mainItems}>
                            <Token image="/img/token1.png" name="DUH9321" price="289.99" volume="115" percent={44.25} progress={65} />
                            <Token image="/img/token2.png" name="ARISHAS" price="9.23" volume="115" percent={55.2} progress={24} percentPositive />
                            <Token image="/img/token1.png" name="DUH9321" price="289.99" volume="115" percent={44.25} progress={65} />
                            <Token image="/img/token2.png" name="ARISHAS" price="9.23" volume="115" percent={55.2} progress={24} percentPositive />
                            <Token image="/img/token1.png" name="DUH9321" price="289.99" volume="115" percent={44.25} progress={65} />
                            <Token image="/img/token2.png" name="ARISHAS" price="9.23" volume="115" percent={55.2} progress={24} percentPositive />
                            <Token image="/img/token1.png" name="DUH9321" price="289.99" volume="115" percent={44.25} progress={65} />
                            <Token image="/img/token2.png" name="ARISHAS" price="9.23" volume="115" percent={55.2} progress={24} percentPositive />
                            <Token image="/img/token1.png" name="DUH9321" price="289.99" volume="115" percent={44.25} progress={65} />
                            <Token image="/img/token1.png" name="DUH9321" price="289.99" volume="115" percent={44.25} progress={65} />
                            <Token image="/img/token2.png" name="ARISHAS" price="9.23" volume="115" percent={55.2} progress={24} percentPositive />
                            <Token image="/img/token1.png" name="DUH9321" price="289.99" volume="115" percent={44.25} progress={65} />
                        </div>

                        <div className={styles.mainContentBottom}>
                            <p className={styles.paginationPages}>
                                Page <span>1</span> of <span>350</span>
                            </p>

                            <div className={styles.pagination}>
                                <button
                                    className={cn(
                                        styles.paginationButton,
                                        styles.auto,
                                    )}
                                >
                                    Previous
                                </button>
                                <button
                                    className={cn(
                                        styles.paginationButton,
                                        styles.active,
                                    )}
                                >
                                    1
                                </button>
                                <button className={styles.paginationButton}>
                                    2
                                </button>
                                <button className={styles.paginationButton}>
                                    3
                                </button>
                                <button className={styles.paginationButton}>
                                    4
                                </button>
                                <button className={styles.paginationButton}>
                                    5
                                </button>
                                <button
                                    className={cn(
                                        styles.paginationButton,
                                        styles.auto,
                                    )}
                                >
                                    Next
                                </button>
                            </div>

                            {/* <div className={styles.paginationArrows}>
                                <button className={styles.paginationArrow}>
                                    <ArrowLeft />
                                </button>

                                <button className={styles.paginationArrow}>
                                    <ArrowRight />
                                </button>
                            </div> */}
                        </div>
                    </div>

                    <div className={styles.leaderboard}>

                    </div>

                    <div className={styles.mainTrades}>
                        <p className={styles.blockTitle}>Public Trades</p>

                        <div className={styles.mainTradesItems}>
                            <div className={styles.mainTradesItem}>
                                123
                            </div>
                        </div>
                    </div>

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

export default MainPage;
