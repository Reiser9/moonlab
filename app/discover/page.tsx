"use client";

import React from "react";
import cn from "classnames";

import "./index.scss";

import { Search } from "@/shared/icons/Search";
import { PressedButton } from "@/shared/ui/PressedButton";
import { BlockView, CircleStar, Fire, ListView, New, SadSmile } from "@/shared/icons";
import { Stats } from "@/shared/ui/Stats";
import { Profit } from "@/shared/ui/Profit";
import { UserAvatar } from "@/shared/ui/UserAvatar";

const DiscoverPage = () => {
    const [proMode, setProMode] = React.useState(false);
    const [view, setView] = React.useState<"grid" | "line">("grid");

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

            <div className="discoverContent">
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

                <div className="discoverSort">
                    <p className="discoverSortTitle">
                        Sort by:
                    </p>

                    <div className="discoverSortItems">
                        <button className="discoverSortItem active">
                            %Change
                        </button>

                        <button className="discoverSortItem">
                            Price
                        </button>

                        <button className="discoverSortItem">
                            Volume
                        </button>

                        <button className="discoverSortItem">
                            Traders
                        </button>
                    </div>
                </div>

                <div className="discoverContentItems">
                    <div className="discoverContentItem">
                        <p className="discoverContentItemTitle">
                            <CircleStar />
                            Top gainers
                        </p>

                        <div className="discoverContentItemBlock">
                            <div className="discoverContentBlockItem">
                                <div className="discoverContentBlockItemInfo">
                                    <div className="discoverContentBlockItemInfoUser">
                                        <UserAvatar image="/img/token1.png" />
                                        <p className="discoverContentBlockItemInfoUserName">FUSKR</p>
                                        <p className="discoverContentBlockItemInfoStatus">24m fast</p>
                                    </div>

                                    <div className="discoverContentBlockItemInfoProfit">
                                        <p className="discoverContentBlockItemInfoProfitValue">1600.79</p>
                                        <Profit value={4.96} positive />
                                    </div>
                                </div>

                                <div className="discoverContentBlockItemStats">
                                    <p className="discoverContentBlockItemStat">
                                        Vol: <span>1.42K</span>
                                    </p>

                                    <p className="discoverContentBlockItemStat">
                                        Traders: <span>12</span>
                                    </p>

                                    <p className="discoverContentBlockItemStat">
                                        Buys: <span>12</span>
                                    </p>
                                </div>
                            </div>

                            <div className="discoverContentBlockItem">
                                <div className="discoverContentBlockItemInfo">
                                    <div className="discoverContentBlockItemInfoUser">
                                        <UserAvatar image="/img/token1.png" />
                                        <p className="discoverContentBlockItemInfoUserName">FUSKR</p>
                                        <p className="discoverContentBlockItemInfoStatus">24m fast</p>
                                    </div>

                                    <div className="discoverContentBlockItemInfoProfit">
                                        <p className="discoverContentBlockItemInfoProfitValue">1600.79</p>
                                        <Profit value={4.96} positive />
                                    </div>
                                </div>

                                <div className="discoverContentBlockItemStats">
                                    <p className="discoverContentBlockItemStat">
                                        Vol: <span>1.42K</span>
                                    </p>

                                    <p className="discoverContentBlockItemStat">
                                        Traders: <span>12</span>
                                    </p>

                                    <p className="discoverContentBlockItemStat">
                                        Buys: <span>12</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="discoverContentItem">
                        <p className="discoverContentItemTitle">
                            <New />
                            New
                        </p>

                        <div className="discoverContentItemBlock">
                            <div className="discoverContentBlockItem">
                                <div className="discoverContentBlockItemInfo">
                                    <div className="discoverContentBlockItemInfoUser">
                                        <UserAvatar image="/img/token1.png" />
                                        <p className="discoverContentBlockItemInfoUserName">FUSKR</p>
                                        <p className="discoverContentBlockItemInfoStatus">24m fast</p>
                                    </div>

                                    <div className="discoverContentBlockItemInfoProfit">
                                        <p className="discoverContentBlockItemInfoProfitValue">1600.79</p>
                                        <Profit value={4.96} positive />
                                    </div>
                                </div>

                                <div className="discoverContentBlockItemStats">
                                    <p className="discoverContentBlockItemStat">
                                        Vol: <span>1.42K</span>
                                    </p>

                                    <p className="discoverContentBlockItemStat">
                                        Traders: <span>12</span>
                                    </p>

                                    <p className="discoverContentBlockItemStat">
                                        Buys: <span>12</span>
                                    </p>
                                </div>
                            </div>

                            <div className="discoverContentBlockItem">
                                <div className="discoverContentBlockItemInfo">
                                    <div className="discoverContentBlockItemInfoUser">
                                        <UserAvatar image="/img/token1.png" />
                                        <p className="discoverContentBlockItemInfoUserName">FUSKR</p>
                                        <p className="discoverContentBlockItemInfoStatus yellow">1m crack</p>
                                    </div>

                                    <div className="discoverContentBlockItemInfoProfit">
                                        <p className="discoverContentBlockItemInfoProfitValue">1600.79</p>
                                        <Profit value={4.96} positive />
                                    </div>
                                </div>

                                <div className="discoverContentBlockItemStats">
                                    <p className="discoverContentBlockItemStat">
                                        Vol: <span>1.42K</span>
                                    </p>

                                    <p className="discoverContentBlockItemStat">
                                        Traders: <span>12</span>
                                    </p>

                                    <p className="discoverContentBlockItemStat">
                                        Buys: <span>12</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="discoverContentItem">
                        <p className="discoverContentItemTitle">
                            <Fire />
                            Hot
                        </p>

                        <div className="discoverContentItemBlock">
                            <div className="discoverContentBlockItem">
                                <div className="discoverContentBlockItemInfo">
                                    <div className="discoverContentBlockItemInfoUser">
                                        <UserAvatar image="/img/token1.png" />
                                        <p className="discoverContentBlockItemInfoUserName">FUSKR</p>
                                        <p className="discoverContentBlockItemInfoStatus">24m fast</p>
                                    </div>

                                    <div className="discoverContentBlockItemInfoProfit">
                                        <p className="discoverContentBlockItemInfoProfitValue">1600.79</p>
                                        <Profit value={4.96} positive />
                                    </div>
                                </div>

                                <div className="discoverContentBlockItemStats">
                                    <p className="discoverContentBlockItemStat">
                                        Vol: <span>1.42K</span>
                                    </p>

                                    <p className="discoverContentBlockItemStat">
                                        Traders: <span>12</span>
                                    </p>

                                    <p className="discoverContentBlockItemStat">
                                        Buys: <span>12</span>
                                    </p>
                                </div>
                            </div>

                            <div className="discoverContentBlockItem">
                                <div className="discoverContentBlockItemInfo">
                                    <div className="discoverContentBlockItemInfoUser">
                                        <UserAvatar image="/img/token1.png" />
                                        <p className="discoverContentBlockItemInfoUserName">FUSKR</p>
                                        <p className="discoverContentBlockItemInfoStatus">24m fast</p>
                                    </div>

                                    <div className="discoverContentBlockItemInfoProfit">
                                        <p className="discoverContentBlockItemInfoProfitValue">1600.79</p>
                                        <Profit value={4.96} positive />
                                    </div>
                                </div>

                                <div className="discoverContentBlockItemStats">
                                    <p className="discoverContentBlockItemStat">
                                        Vol: <span>1.42K</span>
                                    </p>

                                    <p className="discoverContentBlockItemStat">
                                        Traders: <span>12</span>
                                    </p>

                                    <p className="discoverContentBlockItemStat">
                                        Buys: <span>12</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="discoverContentItem">
                        <p className="discoverContentItemTitle">
                            <SadSmile />
                            Top losers
                        </p>

                        <div className="discoverContentItemBlock">
                            <div className="discoverContentBlockItem">
                                <div className="discoverContentBlockItemInfo">
                                    <div className="discoverContentBlockItemInfoUser">
                                        <UserAvatar image="/img/token1.png" />
                                        <p className="discoverContentBlockItemInfoUserName">FUSKR</p>
                                        <p className="discoverContentBlockItemInfoStatus">24m fast</p>
                                    </div>

                                    <div className="discoverContentBlockItemInfoProfit">
                                        <p className="discoverContentBlockItemInfoProfitValue">1600.79</p>
                                        <Profit value={4.96} positive />
                                    </div>
                                </div>

                                <div className="discoverContentBlockItemStats">
                                    <p className="discoverContentBlockItemStat">
                                        Vol: <span>1.42K</span>
                                    </p>

                                    <p className="discoverContentBlockItemStat">
                                        Traders: <span>12</span>
                                    </p>

                                    <p className="discoverContentBlockItemStat">
                                        Buys: <span>12</span>
                                    </p>
                                </div>
                            </div>

                            <div className="discoverContentBlockItem">
                                <div className="discoverContentBlockItemInfo">
                                    <div className="discoverContentBlockItemInfoUser">
                                        <UserAvatar image="/img/token1.png" />
                                        <p className="discoverContentBlockItemInfoUserName">FUSKR</p>
                                        <p className="discoverContentBlockItemInfoStatus">24m fast</p>
                                    </div>

                                    <div className="discoverContentBlockItemInfoProfit">
                                        <p className="discoverContentBlockItemInfoProfitValue">1600.79</p>
                                        <Profit value={4.96} positive />
                                    </div>
                                </div>

                                <div className="discoverContentBlockItemStats">
                                    <p className="discoverContentBlockItemStat">
                                        Vol: <span>1.42K</span>
                                    </p>

                                    <p className="discoverContentBlockItemStat">
                                        Traders: <span>12</span>
                                    </p>

                                    <p className="discoverContentBlockItemStat">
                                        Buys: <span>12</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DiscoverPage;
