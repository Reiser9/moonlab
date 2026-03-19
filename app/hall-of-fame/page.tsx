"use client";

import React from "react";

import { Pagination } from "@/shared/ui/Pagination";
import { PrizesBlock } from "@/shared/ui/PrizesBlock";
import { UserAvatar } from "@/shared/ui/UserAvatar";
import { Modal } from "@/shared/ui/Modal";
import { Plus, Share } from "@/shared/icons";
import { SliderBlock } from "@/shared/ui/SliderBlock";
import { Profit } from "@/shared/ui/Profit";
import { Stats } from "@/shared/ui/Stats";

const HallOfFamePage = () => {
    const [profileModal, setProfileModal] = React.useState(false);

    return (
        <>
            <div className="hallPrizeInner">
                <PrizesBlock
                    data={[
                        {
                            image: "/img/token1.png",
                            name: "User_9185151",
                            text: "PnL",
                            value: "+$28.6K",
                        },
                        {
                            image: "/img/token1.png",
                            name: "User_9185151",
                            text: "PnL",
                            value: "+$28.6K",
                        },
                        {
                            image: "/img/token1.png",
                            name: "User_9185151",
                            text: "PnL",
                            value: "+$28.6K",
                        },
                    ]}
                />

                <Stats data={[{
                    title: "Total Volume",
                    value: "$2.8B"
                },
                {
                    title: "Total Trades",
                    value: "36,144,852"
                },
                {
                    title: "Total Tokens",
                    value: "4,343,675"
                },
                {
                    title: "Total Users",
                    value: "376,726"
                }]} />
            </div>

            <div className="hallTableInner">
                <p className="title2">Leaderboard</p>

                <div className="hallTable">
                    <div className="hallTableItem active" onClick={() => setProfileModal(true)}>
                        <div className="hallTableItemNum">
                            <p className="hallTableItemNumValue">39482</p>
                        </div>

                        <div className="hallTableItemUser">
                            <div className="hallTableItemUserWrap">
                                <UserAvatar image="/img/token1.png" />

                                <div className="hallTableItemUserInfo">
                                    <p className="hallTableItemUserTitle">
                                        User
                                    </p>

                                    <p className="hallTableItemUserName">
                                        User_9185151
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="hallTableItemTextBlock">
                            <p className="hallTableItemText">
                                Volume
                            </p>

                            <p className="hallTableItemValue">
                                $6.5M
                            </p>
                        </div>

                        <div className="hallTableItemTextBlock">
                            <p className="hallTableItemText">
                                Total Trades
                            </p>

                            <p className="hallTableItemValue green">
                                769
                            </p>
                        </div>

                        <div className="hallTableItemUser trade">
                            <div className="hallTableItemUserWrap">
                                <UserAvatar image="/img/token1.png" />

                                <div className="hallTableItemUserInfo">
                                    <p className="hallTableItemUserTitle">
                                        Best Trade
                                    </p>

                                    <p className="hallTableItemUserName green">
                                        +$10,759.46(+107.59%)
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="hallTableItemTotal">
                            <p className="hallTableItemTotalTitle">
                                30d PnL
                            </p>

                            <p className="hallTableItemTotalValue">
                                +$52.3K
                            </p>
                        </div>
                    </div>

                    <div className="hallTableItem" onClick={() => setProfileModal(true)}>
                        <div className="hallTableItemNum">
                            <p className="hallTableItemNumValue">1</p>
                        </div>

                        <div className="hallTableItemUser">
                            <div className="hallTableItemUserWrap">
                                <UserAvatar image="/img/token1.png" />

                                <div className="hallTableItemUserInfo">
                                    <p className="hallTableItemUserTitle">
                                        User
                                    </p>

                                    <p className="hallTableItemUserName">
                                        User_9185151
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="hallTableItemTextBlock">
                            <p className="hallTableItemText">
                                Volume
                            </p>

                            <p className="hallTableItemValue">
                                $6.5M
                            </p>
                        </div>

                        <div className="hallTableItemTextBlock">
                            <p className="hallTableItemText">
                                Total Trades
                            </p>

                            <p className="hallTableItemValue green">
                                769
                            </p>
                        </div>

                        <div className="hallTableItemUser trade">
                            <div className="hallTableItemUserWrap">
                                <UserAvatar image="/img/token1.png" />

                                <div className="hallTableItemUserInfo">
                                    <p className="hallTableItemUserTitle">
                                        Best Trade
                                    </p>

                                    <p className="hallTableItemUserName green">
                                        +$10,759.46(+107.59%)
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="hallTableItemTotal">
                            <p className="hallTableItemTotalTitle">
                                30d PnL
                            </p>

                            <p className="hallTableItemTotalValue">
                                +$52.3K
                            </p>
                        </div>
                    </div>
                </div>

                <Pagination />
            </div>

            <Modal size="big" value={profileModal} setValue={setProfileModal}>
                <div className="profileModalTop">
                    <div className="profileModalTopUser">
                        <UserAvatar image="/img/token1.png" width={50} height={50} />

                        <div className="profileModalTopUserInfo">
                            <p className="profileModalTopUserName">
                                User_9185151
                            </p>

                            <p className="profileModalTopUserText">
                                Joined now 2025
                            </p>
                        </div>
                    </div>

                    <div className="profileModalTopButtons">
                        <button className="profileModalTopButton">
                            <Plus />
                            Follow
                        </button>

                        <button className="profileModalTopButton">
                            <Share />
                            Share
                        </button>
                    </div>

                    <div className="profileModalTopStats">
                        <div className="profileModalTopStat">
                            <p className="profileModalTopStatTitle">
                                Points
                            </p>

                            <p className="profileModalTopStatValue green">
                                12,488
                            </p>
                        </div>

                        <div className="profileModalTopStat">
                            <p className="profileModalTopStatTitle">
                                Place
                            </p>

                            <p className="profileModalTopStatValue yellow">
                                143
                            </p>
                        </div>

                        <div className="profileModalTopStat">
                            <p className="profileModalTopStatTitle">
                                Tier
                            </p>

                            <p className="profileModalTopStatValue yellow">
                                .eth
                            </p>
                        </div>
                    </div>
                </div>

                <div className="profileModalStats">
                    <p className="profileModalTitle">
                        Statistics
                    </p>

                    <div className="profileModalStatsItems">
                        <div className="profileModalStatsItem">
                            <p className="profileModalStatsItemTitle">All time</p>
                            <p className="profileModalStatsItemValue green">12,488</p>
                        </div>

                        <div className="profileModalStatsItem">
                            <p className="profileModalStatsItemTitle">All time</p>
                            <p className="profileModalStatsItemValue">12,488</p>
                            <p className="profileModalStatsItemSubtext">Closed trade: 431</p>
                        </div>

                        <div className="profileModalStatsItem">
                            <p className="profileModalStatsItemTitle">Best trade</p>
                            <p className="profileModalStatsItemValue green">12,488</p>
                        </div>

                        <div className="profileModalStatsItem">
                            <p className="profileModalStatsItemTitle">Worst trade</p>
                            <p className="profileModalStatsItemValue red">12,488</p>
                        </div>

                        <div className="profileModalStatsItem">
                            <p className="profileModalStatsItemTitle">Best launch</p>
                            <p className="profileModalStatsItemValue green">PEPE</p>
                            <p className="profileModalStatsItemSubtext">+ 84.94K volume</p>
                        </div>

                        <div className="profileModalStatsItem">
                            <p className="profileModalStatsItemTitle">Tokens created</p>
                            <p className="profileModalStatsItemValue">12,488</p>
                        </div>

                        <div className="profileModalStatsItem">
                            <p className="profileModalStatsItemTitle">Win rate</p>
                            <p className="profileModalStatsItemValue green">58%</p>
                            <p className="profileModalStatsItemSubtext">Profitable trades</p>
                        </div>

                        <div className="profileModalStatsItem">
                            <p className="profileModalStatsItemTitle">Holding tokens</p>
                            <p className="profileModalStatsItemValue">66</p>
                            <p className="profileModalStatsItemSubtext">Active positions</p>
                        </div>
                    </div>
                </div>

                <div className="profileModalTokens">
                    <div className="profileModalTitleInner">
                        <p className="profileModalTitle">
                            Launched tokens
                        </p>

                        <div className="profileModalTabs">
                            <button className="profileModalTab active">
                                Turbo Tokens
                            </button>

                            <button className="profileModalTab">
                                Hyper Tokens
                            </button>

                            <button className="profileModalTab">
                                Battle histoty
                            </button>
                        </div>
                    </div>

                    <div className="profileModalItems">
                        <div className="profileModalTokensItem">
                            <div className="profileModalTokensItemToken">
                                <UserAvatar image="/img/token1.png" />

                                <div className="profileModalTokensItemTokenInfo">
                                    <p className="profileModalTradesItemTokenName">
                                        PEPE
                                    </p>

                                    <div className="profileModalTokensItemTokenStats">
                                        <p className="profileModalTokensItemTokenStat">MC: <span>$353K</span></p>
                                        <p className="profileModalTokensItemTokenStat">Vol: <span>$353K</span></p>
                                        <p className="profileModalTokensItemTokenStat">Trades: <span>434</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="profileModalTokensItemProfit">
                                <div className="profileModalTokensItemPriceInner">
                                    <p className="profileModalTokensItemPrice">1600.79</p>
                                    <Profit value={4.96} />
                                </div>

                                <div className="profileModalTokensItemSliderInner">
                                    <div className="profileModalTokensItemSlider">
                                        <SliderBlock progress={53} />
                                    </div>

                                    <p className="profileModalTokensItemSliderPercent">43%</p>
                                </div>
                            </div>
                        </div>

                        <div className="profileModalTokensItem">
                            <div className="profileModalTokensItemToken">
                                <UserAvatar image="/img/token1.png" />

                                <div className="profileModalTokensItemTokenInfo">
                                    <p className="profileModalTradesItemTokenName">
                                        PEPE
                                    </p>

                                    <div className="profileModalTokensItemTokenStats">
                                        <p className="profileModalTokensItemTokenStat">MC: <span>$353K</span></p>
                                        <p className="profileModalTokensItemTokenStat">Vol: <span>$353K</span></p>
                                        <p className="profileModalTokensItemTokenStat">Trades: <span>434</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="profileModalTokensItemProfit">
                                <div className="profileModalTokensItemPriceInner">
                                    <p className="profileModalTokensItemPrice">1600.79</p>
                                    <Profit value={4.96} positive />
                                </div>

                                <div className="profileModalTokensItemSliderInner">
                                    <div className="profileModalTokensItemSlider">
                                        <SliderBlock progress={53} />
                                    </div>

                                    <p className="profileModalTokensItemSliderPercent">43%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="profileModalTrades">
                    <p className="profileModalTitle">
                        Recent trades
                    </p>

                    <div className="profileModalItems">
                        <div className="profileModalTradesItem">
                            <div className="profileModalTradesItemToken">
                                <UserAvatar image="/img/token1.png" />

                                <p className="profileModalTradesItemTokenName">
                                    PEPE
                                </p>
                            </div>

                            <div className="profileModalTradesItemTextBlock">
                                <p className="profileModalTradesItemTitle">Side</p>
                                <p className="profileModalTradesItemText green">Buy</p>
                            </div>

                            <div className="profileModalTradesItemTextBlock">
                                <p className="profileModalTradesItemTitle">Amount</p>
                                <p className="profileModalTradesItemText green">$343</p>
                            </div>

                            <div className="profileModalTradesItemTextBlock">
                                <p className="profileModalTradesItemTitle">PNL</p>
                                <p className="profileModalTradesItemText green">$343</p>
                            </div>

                            <p className="profileModalTradesItemStatus">3m ago</p>
                        </div>

                        <div className="profileModalTradesItem">
                            <div className="profileModalTradesItemToken">
                                <UserAvatar image="/img/token1.png" />

                                <p className="profileModalTradesItemTokenName">
                                    PEPE
                                </p>
                            </div>

                            <div className="profileModalTradesItemTextBlock">
                                <p className="profileModalTradesItemTitle">Side</p>
                                <p className="profileModalTradesItemText red">Sell</p>
                            </div>

                            <div className="profileModalTradesItemTextBlock">
                                <p className="profileModalTradesItemTitle">Amount</p>
                                <p className="profileModalTradesItemText green">$343</p>
                            </div>

                            <div className="profileModalTradesItemTextBlock">
                                <p className="profileModalTradesItemTitle">PNL</p>
                                <p className="profileModalTradesItemText green">$343</p>
                            </div>

                            <p className="profileModalTradesItemStatus">3m ago</p>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default HallOfFamePage;
