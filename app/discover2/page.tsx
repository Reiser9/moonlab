"use client";

import React from "react";
import cn from "classnames";

import "./index.scss";

import { Search } from "@/shared/icons/Search";
import { PressedButton } from "@/shared/ui/PressedButton";
import {
    BlockView,
    CircleStar,
    Fire,
    ListView,
    New,
    SadSmile,
} from "@/shared/icons";
import { Stats } from "@/shared/ui/Stats";
import { TokenChartItem } from "@/shared/ui/Token";

const DiscoverPage = () => {
    const [proMode, setProMode] = React.useState(false);
    const [view, setView] = React.useState<"grid" | "line">("grid");
    const [tabTokens, setTabTokens] = React.useState<
        "top gainers" | "new" | "hot" | "top losers"
    >("top gainers");

    return (
        <>
            <div className="discoverTop">
                <div className="discoverTitleInner">
                    <p className="title2">Find tokens</p>

                    <p className="discoverText">
                        Discover trending tokens across categories
                    </p>
                </div>

                <div className="discoverFilters">
                    <div className="discoverSearchInputInner">
                        <input
                            className="discoverSearchInput"
                            placeholder="Search token"
                        />

                        <Search />
                    </div>

                    <PressedButton value={proMode} setValue={setProMode}>
                        PRO mode
                    </PressedButton>

                    <div className="blockView">
                        <button
                            className={cn("blockViewButton", {
                                ["active"]: view === "grid",
                            })}
                            onClick={() => setView("grid")}
                        >
                            <BlockView />
                        </button>

                        <button
                            className={cn("blockViewButton", {
                                ["active"]: view === "line",
                            })}
                            onClick={() => setView("line")}
                        >
                            <ListView />
                        </button>
                    </div>
                </div>
            </div>

            <div className="discoveryWrap">
                <div className="leaderboardTabs">
                    <button
                        className={cn("leaderboardTab", {
                            ["active"]: tabTokens === "top gainers",
                        })}
                        onClick={() => setTabTokens("top gainers")}
                    >
                        <CircleStar />
                        Top gainers
                    </button>

                    <button
                        className={cn("leaderboardTab", {
                            ["active"]: tabTokens === "new",
                        })}
                        onClick={() => setTabTokens("new")}
                    >
                        <New />
                        New
                    </button>

                    <button
                        className={cn("leaderboardTab", {
                            ["active"]: tabTokens === "hot",
                        })}
                        onClick={() => setTabTokens("hot")}
                    >
                        <Fire />
                        Hot
                    </button>

                    <button
                        className={cn("leaderboardTab", {
                            ["active"]: tabTokens === "top losers",
                        })}
                        onClick={() => setTabTokens("top losers")}
                    >
                        <SadSmile />
                        Top losers
                    </button>
                </div>

                <div className="discover2Content">
                    {tabTokens === "top gainers" && (
                        <>
                            <Stats
                                data={[
                                    {
                                        title: "Total tokens",
                                        value: "8",
                                    },
                                    {
                                        title: "Total volume",
                                        value: "21 023$",
                                    },
                                    {
                                        title: "AVG change",
                                        value: "115.6%",
                                    },
                                    {
                                        title: "Total Active traders",
                                        value: "8",
                                    },
                                ]}
                            />

                            <div className="discoverCards">
                                <TokenChartItem positiveProfit />
                                <TokenChartItem />
                                <TokenChartItem />
                                <TokenChartItem />
                                <TokenChartItem />
                                <TokenChartItem />
                                <TokenChartItem />
                                <TokenChartItem />
                                <TokenChartItem />
                                <TokenChartItem />
                                <TokenChartItem />
                                <TokenChartItem />
                                <TokenChartItem />
                                <TokenChartItem />
                                <TokenChartItem />
                            </div>
                        </>
                    )}

                    {tabTokens === "new" && (
                        <Stats
                            data={[
                                {
                                    title: "Total tokens",
                                    value: "8",
                                },
                                {
                                    title: "Total volume",
                                    value: "21 023$",
                                },
                                {
                                    title: "AVG change",
                                    value: "115.6%",
                                },
                                {
                                    title: "Total Active traders",
                                    value: "8",
                                },
                            ]}
                        />
                    )}
                    
                    {tabTokens === "hot" && (
                        <Stats
                            data={[
                                {
                                    title: "Total tokens",
                                    value: "8",
                                },
                                {
                                    title: "Total volume",
                                    value: "21 023$",
                                },
                                {
                                    title: "AVG change",
                                    value: "115.6%",
                                },
                                {
                                    title: "Total Active traders",
                                    value: "8",
                                },
                            ]}
                        />
                    )}

                    {tabTokens === "top losers" && (
                        <Stats
                            data={[
                                {
                                    title: "Total tokens",
                                    value: "8",
                                },
                                {
                                    title: "Total volume",
                                    value: "21 023$",
                                },
                                {
                                    title: "AVG change",
                                    value: "115.6%",
                                },
                                {
                                    title: "Total Active traders",
                                    value: "8",
                                },
                            ]}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default DiscoverPage;
