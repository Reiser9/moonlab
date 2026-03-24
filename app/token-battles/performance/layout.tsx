"use client";

import React from "react";
import cn from "classnames";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import "../profile/index.scss";

const TokenBattleLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    return (
        <>
            <div className="battleProfileContent">
                <div className="battleProfileTop">
                    <div className="battleProfileTopInfo">
                        <div className="battleProfileTopImageInner">
                            <div className="battleProfileTopImage">
                                <Image src="/img/token1.png" alt="Image" fill />
                            </div>
                        </div>

                        <div className="battleProfileTopInfoWrap">
                            <div className="battleProfileTopInfoNameInner">
                                <p className="battleProfileTopInfoName">
                                    Snoooprew
                                </p>

                                <div className="battleProfileTopInfoPoints">
                                    <p className="battleProfileTopInfoPoint yellow">
                                        Top trader
                                    </p>

                                    <p className="battleProfileTopInfoPoint green">
                                        Online
                                    </p>
                                </div>
                            </div>

                            <div className="battleProfileTopInfoTags">
                                <p className="battleProfileTopInfoTag">
                                    Joined 3 months ago
                                </p>

                                <p className="battleProfileTopInfoTag">
                                    Last battle 25 min ago
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="battleProfileTopButtons">
                        <button className="outlinedButton battleProfileTopButton">
                            Follow
                        </button>

                        <button className="mainGradientButton battleProfileTopButton">
                            Challenge
                        </button>
                    </div>
                </div>

                <div className="battleProfileStats">
                    <div className="battleProfileStat big">
                        <p className="battleProfileStatTitle">NET PROFIT</p>
                        <p className="battleProfileStatValue green">+4354$</p>
                        <p className="battleProfileStatSubtext">All time</p>
                    </div>

                    <div className="battleProfileStat big">
                        <p className="battleProfileStatTitle">WIN RATE</p>
                        <p className="battleProfileStatValue green">58%</p>
                        <p className="battleProfileStatSubtext">14W / 10L</p>
                    </div>

                    <div className="battleProfileStat big">
                        <p className="battleProfileStatTitle">CURRENT STREAK</p>
                        <p className="battleProfileStatValue yellow">3</p>
                        <p className="battleProfileStatSubtext">Best: 7</p>
                    </div>

                    <div className="battleProfileStat big">
                        <p className="battleProfileStatTitle">PRIZES WON</p>
                        <p className="battleProfileStatValue green">+4354$</p>
                        <p className="battleProfileStatSubtext">From 14 wins</p>
                    </div>
                </div>

                <div className="battleProfileStats">
                    <div className="battleProfileStat">
                        <p className="battleProfileStatTitle">Battles</p>
                        <p className="battleProfileStatValue green">24</p>
                    </div>

                    <div className="battleProfileStat">
                        <p className="battleProfileStatTitle">TOTAL EARNED</p>
                        <p className="battleProfileStatValue green">$8,420</p>
                    </div>

                    <div className="battleProfileStat">
                        <p className="battleProfileStatTitle">TOTAL LOST</p>
                        <p className="battleProfileStatValue red">-$4,140</p>
                    </div>

                    <div className="battleProfileStat">
                        <p className="battleProfileStatTitle">Avg pnl</p>
                        <p className="battleProfileStatValue green">+$178</p>
                    </div>

                    <div className="battleProfileStat">
                        <p className="battleProfileStatTitle">BEST BATTLE</p>
                        <p className="battleProfileStatValue yellow">+4354$</p>
                    </div>

                    <div className="battleProfileStat">
                        <p className="battleProfileStatTitle">WORST BATTLE</p>
                        <p className="battleProfileStatValue red">-$420</p>
                    </div>
                </div>
            </div>

            <div className="performanceTabs">
                <Link
                    href="/token-battles/performance"
                    className={cn("performanceTab", {
                        ["active"]: pathname === "/token-battles/performance",
                    })}
                >
                    Performance
                </Link>

                <Link
                    href="/token-battles/performance/trading"
                    className={cn("performanceTab", {
                        ["active"]:
                            pathname === "/token-battles/performance/trading",
                    })}
                >
                    Trading Style
                </Link>

                <Link
                    href="/token-battles/performance/achievements"
                    className={cn("performanceTab", {
                        ["active"]:
                            pathname ===
                            "/token-battles/performance/achievements",
                    })}
                >
                    Achievements
                </Link>

                <Link
                    href="/token-battles/performance/head-to-head"
                    className={cn("performanceTab", {
                        ["active"]:
                            pathname ===
                            "/token-battles/performance/head-to-head",
                    })}
                >
                    Head-to-Head
                </Link>

                <Link
                    href="/token-battles/performance/history"
                    className={cn("performanceTab", {
                        ["active"]:
                            pathname === "/token-battles/performance/history",
                    })}
                >
                    History
                </Link>
            </div>

            {children}
        </>
    );
};

export default TokenBattleLayout;
