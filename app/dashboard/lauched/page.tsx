"use client";

import React from "react";
import Image from "next/image";
import cn from "classnames";

import { ArrowIncrease, CircleStarMini } from "@/shared/icons";

const LauchedTokens = () => {
    const [typeToken, setTypeToken] = React.useState<"turbo" | "hyper">(
        "turbo",
    );

    return (
        <div className="dashboardTable">
            <div className="dashboardTableHeader">
                <div className="dashboardTableHeaderTitleWrapper">
                    <p className="dashboardTableHeaderTitle">Launched Tokens</p>

                    <div className="dashboardTableHeaderTabs">
                        <button
                            className={cn("dashboardTableHeaderTab", {
                                ["active"]: typeToken === "turbo",
                            })}
                            onClick={() => setTypeToken("turbo")}
                        >
                            Turbo Tokens
                        </button>

                        <button
                            className={cn("dashboardTableHeaderTab", {
                                ["active"]: typeToken === "hyper",
                            })}
                            onClick={() => setTypeToken("hyper")}
                        >
                            Hyper Tokens
                        </button>
                    </div>
                </div>
            </div>

            <div className="dashboardTableContent">
                <div className="dashboardTableTabs">
                    <button className="dashboardTableTab active">Live</button>
                    <button className="dashboardTableTab">Expired</button>
                </div>

                <div className="dashboardTableItems">
                    <div className="dashboardTableItem">
                        <div className="dashboardTableItemToken">
                            <div className="mainTradesItemTokenImgInner">
                                <div className="mainTradesItemTokenImg">
                                    <Image
                                        src="/img/token1.png"
                                        alt="Token"
                                        fill
                                    />
                                </div>

                                <CircleStarMini />
                            </div>

                            <div className="mainTradesItemTextInner">
                                <p className="mainTradesItemTitle">
                                    Token Name
                                </p>
                                <p className="mainTradesItemText">Tesla</p>
                            </div>
                        </div>

                        <div className="dashboardTableItemBlock">
                            <p className="dashboardTableItemBlockTitle">
                                Holders
                            </p>

                            <p className="dashboardTableItemBlockText">104$</p>
                        </div>

                        <div className="dashboardTableItemBlock">
                            <p className="dashboardTableItemBlockTitle">
                                Your Tokens
                            </p>

                            <p className="dashboardTableItemBlockText">
                                0.58231$
                            </p>
                        </div>

                        <div className="dashboardTableItemBlock">
                            <p className="dashboardTableItemBlockTitle">
                                Fees Earned
                            </p>

                            <p className="dashboardTableItemBlockText">104$</p>
                        </div>

                        <div className="dashboardTableItemBlock">
                            <p className="dashboardTableItemBlockTitle">
                                Points
                            </p>

                            <p className="dashboardTableItemBlockText">
                                <ArrowIncrease />
                                44.25%
                            </p>
                        </div>

                        <div className="dashboardTableItemBlock">
                            <p className="dashboardTableItemBlockTitle">
                                Deployment Date
                            </p>

                            <p className="dashboardTableItemBlockText">
                                <ArrowIncrease />
                                44.25%
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LauchedTokens;
