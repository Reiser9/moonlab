import React from "react";
import Image from "next/image";

import "./index.scss";
import Link from "next/link";
import { UserAvatar } from "@/shared/ui/UserAvatar";
import { AvatarGroup } from "@/shared/ui/AvatarGroup";
import { ArrowIncrease, Chart3, Fire2, Light } from "@/shared/icons";

const TokenBattles = () => {
    return (
        <>
            <div className="tokenBattleBanner">
                <Image
                    src="/img/token-battle-bg.png"
                    alt="token battles"
                    fill
                />

                <p className="tokenBattleTitle">Token battles</p>

                <div className="tokenBattlePoints">
                    <p className="tokenBattlePoint">Enter the Arena</p>
                    <p className="tokenBattlePoint">Trade to win</p>
                    <p className="tokenBattlePoint">Winner takes all</p>
                </div>

                <p className="tokenBattleVs">
                    <span>V</span>
                    <span>S</span>
                </p>

                <Link
                    href="/token-battles/create"
                    className="mainGradientButton tokenBattleCreate"
                >
                    Create battle
                </Link>
            </div>

            <div className="tokenBattleStats">
                <div className="tokenBattleStatsTitleInner">
                    <p className="title2">Token battle</p>

                    <Link href="/token-battles/create" className="mainGradientButton tokenBattleCreateButton">
                        Create battle
                    </Link>
                </div>
                
                <div className="tokenBattleStatsItem">
                    <div className="tokenBattleStatsItemInfo">
                        <div className="tokenBattleStatsItemUserImageInner">
                            <div className="tokenBattleStatsItemUserImage">
                                <Image src="/img/token1.png" alt="user img" fill />
                            </div>
                        </div>

                        <div className="tokenBattleStatsItemInfoBlock">
                            <p className="tokenBattleStatsItemInfoTitle">Your battle record</p>

                            <div className="tokenBattleStatsItemInfoItems">
                                <p className="tokenBattleStatsItemInfoItem">
                                    Battles: <span>224</span>
                                </p>

                                <p className="tokenBattleStatsItemInfoItem">
                                    Wins: <span className="green">224</span>
                                </p>

                                <p className="tokenBattleStatsItemInfoItem">
                                    Win rate: <span className="green">2%</span>
                                </p>

                                <p className="tokenBattleStatsItemInfoItem">
                                    Total earned <span className="green">+4324</span>
                                </p>

                                <p className="tokenBattleStatsItemInfoItem">
                                    Best Pnl: <span className="yellow">+4324</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="tokenBattleStatsItemActions">
                        <button className="tokenBattleStatsItemAction fire">
                            <Fire2 />
                        </button>

                        <button className="tokenBattleStatsItemAction">
                            <Light />
                        </button>

                        <button className="tokenBattleStatsItemAction">
                            <Chart3 />
                        </button>
                    </div>
                </div>
            </div>

            <div className="tokenBattleContent">
                <div className="tokenBattleTabs">
                    <button className="tokenBattleTab active">
                        Live battles
                        <span>2</span>
                    </button>

                    <button className="tokenBattleTab">
                        Waiting
                        <span>2</span>
                    </button>

                    <button className="tokenBattleTab">
                        My history
                        <span>1</span>
                    </button>
                </div>

                <div className="tokenBattleItems">
                    <div className="tokenBattleItem">
                        <div className="tokenBattleItemWrap">
                            <div className="tokenBattleItemUserInfo">
                                <div className="tokenBattleStatsItemUserImageInner">
                                    <div className="tokenBattleStatsItemUserImage">
                                        <Image src="/img/token1.png" alt="user img" fill />
                                    </div>
                                </div>

                                <div className="tokenBattleItemUserWrap">
                                    <p className="tokenBattleItemName">PEPE battle</p>

                                    <div className="tokenBattleItemUserTags">
                                        <p className="tokenBattleItemUserTag green">Live</p>
                                        <p className="tokenBattleItemUserTag">ETH/USD</p>
                                    </div>
                                </div>
                            </div>

                            <div className="tokenBattleItemUsers">
                                <AvatarGroup users={[{
                                    name: "Abram"
                                },
                                {
                                    name: "Abram",
                                    image: "/img/token1.png"
                                },
                                {
                                    name: "Abram",
                                    image: "/img/token2.png"
                                },
                                {
                                    name: "Abram",
                                    image: "/img/token1.png"
                                }]} />

                                <p className="tokenBattleItemUsersCount">4/6</p>
                            </div>
                        </div>

                        <div className="tokenBattleItemInfo">
                            <div className="tokenBattleItemInfoItem">
                                <p className="tokenBattleItemInfoItemTitle">
                                    Snoooprew
                                </p>

                                <p className="tokenBattleItemInfoItemValue">
                                    +4354$
                                </p>
                            </div>

                            <div className="tokenBattleItemInfoItem">
                                <p className="tokenBattleItemInfoItemTitle">
                                    Prize
                                </p>

                                <p className="tokenBattleItemInfoItemValue">
                                    500$
                                </p>
                            </div>

                            <div className="tokenBattleItemInfoTime">
                                <p className="tokenBattleItemInfoTimeValue">
                                    3:44
                                </p>

                                <p className="tokenBattleItemInfoTimeText">
                                    Remaining
                                </p>
                            </div>

                            <button className="tokenBattleItemButton">
                                Watch
                            </button>
                        </div>
                    </div>


                </div>
            </div>

            <div className="tokenBattleTop">
                <div className="tokenBattleTopItem">
                    <p className="title2 tokenBattleTopItemTitle">
                        Top battles
                    </p>

                    <div className="tokenBattleTopItemToken">
                        <div className="tokenBattleTopItemTokenInfo">
                            <div className="tokenBattleTopItemTokenImage">
                                <Image src="/img/pepe.svg" alt="pepe" fill />
                            </div>

                            <div className="tokenBattleTopItemTokenTextBlock">
                                <p className="tokenBattleTopItemTokenName">
                                    PEPE
                                </p>

                                <p className="tokenBattleTopItemTokenText">
                                    20.08000123
                                </p>
                            </div>
                        </div>

                        <div className="tokenBattleTopItemTokenValues">
                            <div className="tokenBattleTopItemTokenValuesBlock">
                                <p className="tokenBattleTopItemTokenProfit">
                                    <ArrowIncrease />
                                    44.25%
                                </p>

                                <p className="tokenBattleTopItemTokenPercent">
                                    + 1200%
                                </p>
                            </div>

                            <button className="tokenBattleTopItemTokenValuesButton">
                                Trade
                            </button>
                        </div>
                    </div>
                </div>

                <div className="tokenBattleTopItem">
                    <p className="title2 tokenBattleTopItemTitle">
                        Top Winners
                    </p>

                    <div className="tokenBattleTopItemToken">
                        <div className="tokenBattleTopItemTokenInfo">
                            <div className="tokenBattleTopItemTokenImage">
                                <Image src="/img/pepe.svg" alt="pepe" fill />
                            </div>

                            <div className="tokenBattleTopItemTokenTextBlock">
                                <p className="tokenBattleTopItemTokenName">
                                    PEPE
                                </p>

                                <p className="tokenBattleTopItemTokenText">
                                    20.08000123
                                </p>
                            </div>
                        </div>

                        <div className="tokenBattleTopItemTokenValues">
                            <div className="tokenBattleTopItemTokenValuesBlock">
                                <p className="tokenBattleTopItemTokenProfit">
                                    <ArrowIncrease />
                                    44.25%
                                </p>

                                <p className="tokenBattleTopItemTokenPercent">
                                    + 1200%
                                </p>
                            </div>

                            <button className="tokenBattleTopItemTokenValuesButton">
                                Trade
                            </button>
                        </div>
                    </div>
                </div>

                <div className="tokenBattleTopItem">
                    <p className="title2 tokenBattleTopItemTitle">
                        Top Winners of the day
                    </p>

                    <div className="tokenBattleTopItemToken">
                        <div className="tokenBattleTopItemTokenInfo">
                            <div className="tokenBattleTopItemTokenImage">
                                <Image src="/img/pepe.svg" alt="pepe" fill />
                            </div>

                            <div className="tokenBattleTopItemTokenTextBlock">
                                <p className="tokenBattleTopItemTokenName">
                                    PEPE
                                </p>

                                <p className="tokenBattleTopItemTokenText">
                                    20.08000123
                                </p>
                            </div>
                        </div>

                        <div className="tokenBattleTopItemTokenValues">
                            <div className="tokenBattleTopItemTokenValuesBlock">
                                <p className="tokenBattleTopItemTokenProfit">
                                    <ArrowIncrease />
                                    44.25%
                                </p>

                                <p className="tokenBattleTopItemTokenPercent">
                                    + 1200%
                                </p>
                            </div>

                            <button className="tokenBattleTopItemTokenValuesButton">
                                Trade
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tokenBattleActive">
                <p className="title2">Active battles</p>

                <div className="tokenBattleActiveItems">
                    <div className="tokenBattleActiveItem">
                        <p className="tokenBattleActiveItemStatus">Live</p>

                        <div className="tokenBattleActiveItemInfo">
                            <div className="tokenBattleActiveItemInfoImage">
                                <Image src="/img/pepe.svg" alt="pepe" fill />
                            </div>

                            <p className="tokenBattleActiveItemInfoName">
                                PEPE
                            </p>

                            <p className="tokenBattleActiveItemInfoPrize">
                                5 000$
                            </p>
                        </div>

                        <div className="tokenBattleActiveItemCountdown">
                            <p className="tokenBattleActiveItemCountdownTitle">
                                Countdown
                            </p>

                            <div className="tokenBattleActiveItemCountdownContent">
                                <div className="tokenBattleActiveItemCountdownItem">
                                    <p className="tokenBattleActiveItemCountdownItemValue">
                                        00
                                    </p>
                                    <p className="tokenBattleActiveItemCountdownItemText">
                                        hours
                                    </p>
                                </div>
                                <p className="tokenBattleActiveItemCountdownDots">
                                    :
                                </p>
                                <div className="tokenBattleActiveItemCountdownItem">
                                    <p className="tokenBattleActiveItemCountdownItemValue">
                                        00
                                    </p>
                                    <p className="tokenBattleActiveItemCountdownItemText">
                                        minutes
                                    </p>
                                </div>
                                <p className="tokenBattleActiveItemCountdownDots">
                                    :
                                </p>
                                <div className="tokenBattleActiveItemCountdownItem">
                                    <p className="tokenBattleActiveItemCountdownItemValue">
                                        00
                                    </p>
                                    <p className="tokenBattleActiveItemCountdownItemText">
                                        seconds
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="tokenBattleActiveItemParams">
                            <div className="tokenBattleActiveItemPlayers">
                                <p className="tokenBattleActiveItemParamName">
                                    4/6 Players
                                </p>

                                <AvatarGroup
                                    users={[
                                        {
                                            name: "Noa",
                                        },
                                        {
                                            image: "/img/token1.png",
                                            name: "Tom",
                                        },
                                        {
                                            image: "/img/token2.png",
                                            name: "Pepe",
                                        },
                                        {
                                            image: "/img/token3.png",
                                            name: "Andrew",
                                        },
                                    ]}
                                />
                            </div>

                            <div className="tokenBattleActiveItemPrice">
                                <p className="tokenBattleActiveItemParamName">
                                    Entry
                                </p>

                                <p className="tokenBattleActiveItemPriceValue">
                                    100.00$
                                </p>
                            </div>
                        </div>

                        <button className="mainGradientButton tokenBattleActiveItemButton">
                            Join
                        </button>
                    </div>

                    <div className="tokenBattleActiveItem">
                        <p className="tokenBattleActiveItemStatus waiting">
                            Waiting
                        </p>

                        <div className="tokenBattleActiveItemInfo">
                            <div className="tokenBattleActiveItemInfoImage">
                                <Image src="/img/pepe.svg" alt="pepe" fill />
                            </div>

                            <p className="tokenBattleActiveItemInfoName">
                                PEPE
                            </p>

                            <p className="tokenBattleActiveItemInfoPrize">
                                5 000$
                            </p>
                        </div>

                        <div className="tokenBattleActiveItemCountdown">
                            <p className="tokenBattleActiveItemCountdownTitle">
                                Countdown
                            </p>

                            <div className="tokenBattleActiveItemCountdownContent">
                                <div className="tokenBattleActiveItemCountdownItem">
                                    <p className="tokenBattleActiveItemCountdownItemValue">
                                        00
                                    </p>
                                    <p className="tokenBattleActiveItemCountdownItemText">
                                        hours
                                    </p>
                                </div>
                                <p className="tokenBattleActiveItemCountdownDots">
                                    :
                                </p>
                                <div className="tokenBattleActiveItemCountdownItem">
                                    <p className="tokenBattleActiveItemCountdownItemValue">
                                        00
                                    </p>
                                    <p className="tokenBattleActiveItemCountdownItemText">
                                        minutes
                                    </p>
                                </div>
                                <p className="tokenBattleActiveItemCountdownDots">
                                    :
                                </p>
                                <div className="tokenBattleActiveItemCountdownItem">
                                    <p className="tokenBattleActiveItemCountdownItemValue">
                                        00
                                    </p>
                                    <p className="tokenBattleActiveItemCountdownItemText">
                                        seconds
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="tokenBattleActiveItemParams">
                            <div className="tokenBattleActiveItemPlayers">
                                <p className="tokenBattleActiveItemParamName">
                                    4/6 Players
                                </p>

                                <AvatarGroup
                                    users={[
                                        {
                                            name: "Noa",
                                        },
                                        {
                                            image: "/img/token1.png",
                                            name: "Tom",
                                        },
                                        {
                                            image: "/img/token2.png",
                                            name: "Pepe",
                                        },
                                        {
                                            image: "/img/token3.png",
                                            name: "Andrew",
                                        },
                                    ]}
                                />
                            </div>

                            <div className="tokenBattleActiveItemPrice">
                                <p className="tokenBattleActiveItemParamName">
                                    Entry
                                </p>

                                <p className="tokenBattleActiveItemPriceValue">
                                    100.00$
                                </p>
                            </div>
                        </div>

                        <button className="mainGradientButton tokenBattleActiveItemButton">
                            Join
                        </button>
                    </div>

                    <div className="tokenBattleActiveItem">
                        <p className="tokenBattleActiveItemStatus finished">
                            Finished
                        </p>

                        <div className="tokenBattleActiveItemInfo">
                            <div className="tokenBattleActiveItemInfoImage">
                                <Image src="/img/pepe.svg" alt="pepe" fill />
                            </div>

                            <p className="tokenBattleActiveItemInfoName">
                                PEPE
                            </p>

                            <p className="tokenBattleActiveItemInfoPrize">
                                5 000$
                            </p>
                        </div>

                        <div className="tokenBattleActiveItemCountdown">
                            <p className="tokenBattleActiveItemCountdownTitle">
                                Countdown
                            </p>

                            <div className="tokenBattleActiveItemCountdownContent">
                                <div className="tokenBattleActiveItemCountdownItem">
                                    <p className="tokenBattleActiveItemCountdownItemValue">
                                        00
                                    </p>
                                    <p className="tokenBattleActiveItemCountdownItemText">
                                        hours
                                    </p>
                                </div>
                                <p className="tokenBattleActiveItemCountdownDots">
                                    :
                                </p>
                                <div className="tokenBattleActiveItemCountdownItem">
                                    <p className="tokenBattleActiveItemCountdownItemValue">
                                        00
                                    </p>
                                    <p className="tokenBattleActiveItemCountdownItemText">
                                        minutes
                                    </p>
                                </div>
                                <p className="tokenBattleActiveItemCountdownDots">
                                    :
                                </p>
                                <div className="tokenBattleActiveItemCountdownItem">
                                    <p className="tokenBattleActiveItemCountdownItemValue">
                                        00
                                    </p>
                                    <p className="tokenBattleActiveItemCountdownItemText">
                                        seconds
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="tokenBattleActiveItemParams">
                            <div className="tokenBattleActiveItemPlayers">
                                <p className="tokenBattleActiveItemParamName">
                                    4/6 Players
                                </p>

                                <AvatarGroup
                                    users={[
                                        {
                                            name: "Noa",
                                        },
                                        {
                                            image: "/img/token1.png",
                                            name: "Tom",
                                        },
                                        {
                                            image: "/img/token2.png",
                                            name: "Pepe",
                                        },
                                        {
                                            image: "/img/token3.png",
                                            name: "Andrew",
                                        },
                                    ]}
                                />
                            </div>

                            <div className="tokenBattleActiveItemPrice">
                                <p className="tokenBattleActiveItemParamName">
                                    Entry
                                </p>

                                <p className="tokenBattleActiveItemPriceValue">
                                    100.00$
                                </p>
                            </div>
                        </div>

                        <button className="mainGradientButton tokenBattleActiveItemButton">
                            Join
                        </button>
                    </div>

                    <div className="tokenBattleActiveItem">
                        <p className="tokenBattleActiveItemStatus finished">
                            Finished
                        </p>

                        <div className="tokenBattleActiveItemInfo">
                            <div className="tokenBattleActiveItemInfoImage">
                                <Image src="/img/pepe.svg" alt="pepe" fill />
                            </div>

                            <p className="tokenBattleActiveItemInfoName">
                                PEPE
                            </p>

                            <p className="tokenBattleActiveItemInfoPrize">
                                5 000$
                            </p>
                        </div>

                        <div className="tokenBattleActiveItemCountdown">
                            <p className="tokenBattleActiveItemCountdownTitle">
                                Countdown
                            </p>

                            <div className="tokenBattleActiveItemCountdownContent">
                                <div className="tokenBattleActiveItemCountdownItem">
                                    <p className="tokenBattleActiveItemCountdownItemValue">
                                        00
                                    </p>
                                    <p className="tokenBattleActiveItemCountdownItemText">
                                        hours
                                    </p>
                                </div>
                                <p className="tokenBattleActiveItemCountdownDots">
                                    :
                                </p>
                                <div className="tokenBattleActiveItemCountdownItem">
                                    <p className="tokenBattleActiveItemCountdownItemValue">
                                        00
                                    </p>
                                    <p className="tokenBattleActiveItemCountdownItemText">
                                        minutes
                                    </p>
                                </div>
                                <p className="tokenBattleActiveItemCountdownDots">
                                    :
                                </p>
                                <div className="tokenBattleActiveItemCountdownItem">
                                    <p className="tokenBattleActiveItemCountdownItemValue">
                                        00
                                    </p>
                                    <p className="tokenBattleActiveItemCountdownItemText">
                                        seconds
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="tokenBattleActiveItemParams">
                            <div className="tokenBattleActiveItemPlayers">
                                <p className="tokenBattleActiveItemParamName">
                                    4/6 Players
                                </p>

                                <AvatarGroup
                                    users={[
                                        {
                                            name: "Noa",
                                        },
                                        {
                                            image: "/img/token1.png",
                                            name: "Tom",
                                        },
                                        {
                                            image: "/img/token2.png",
                                            name: "Pepe",
                                        },
                                        {
                                            image: "/img/token3.png",
                                            name: "Andrew",
                                        },
                                    ]}
                                />
                            </div>

                            <div className="tokenBattleActiveItemPrice">
                                <p className="tokenBattleActiveItemParamName">
                                    Entry
                                </p>

                                <p className="tokenBattleActiveItemPriceValue">
                                    100.00$
                                </p>
                            </div>
                        </div>

                        <button className="mainGradientButton tokenBattleActiveItemButton">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <div className="tokenBattleWaiting">
                <p className="title2">Waiting for players</p>

                <div className="tokenBattleWaitingItems">
                    <Link href="/" className="tokenBattleWaitingItem">
                        <span className="tokenBattleWaitingItemNumber">1</span>

                        <span className="tokenBattleWaitingItemToken">
                            <UserAvatar
                                image="/img/token1.png"
                                width={60}
                                height={60}
                            />

                            <span className="tokenBattleWaitingItemTokenName">
                                Bon_431
                            </span>
                        </span>

                        <span className="tokenBattleWaitingItemTextBlock">
                            <span className="tokenBattleWaitingItemText">
                                Starts when ful
                            </span>

                            <span className="tokenBattleWaitingItemValue">
                                200$/400$
                            </span>
                        </span>
                    </Link>

                    <Link href="/" className="tokenBattleWaitingItem">
                        <span className="tokenBattleWaitingItemNumber">2</span>

                        <span className="tokenBattleWaitingItemToken">
                            <UserAvatar
                                image="/img/token1.png"
                                width={60}
                                height={60}
                            />

                            <span className="tokenBattleWaitingItemTokenName">
                                Bon_431
                            </span>
                        </span>

                        <span className="tokenBattleWaitingItemTextBlock">
                            <span className="tokenBattleWaitingItemText">
                                Starts when ful
                            </span>

                            <span className="tokenBattleWaitingItemValue">
                                200$/400$
                            </span>
                        </span>
                    </Link>

                    <Link href="/" className="tokenBattleWaitingItem">
                        <span className="tokenBattleWaitingItemNumber">3</span>

                        <span className="tokenBattleWaitingItemToken">
                            <UserAvatar
                                image="/img/token1.png"
                                width={60}
                                height={60}
                            />

                            <span className="tokenBattleWaitingItemTokenName">
                                Bon_431
                            </span>
                        </span>

                        <span className="tokenBattleWaitingItemTextBlock">
                            <span className="tokenBattleWaitingItemText">
                                Starts when ful
                            </span>

                            <span className="tokenBattleWaitingItemValue">
                                200$/400$
                            </span>
                        </span>
                    </Link>

                    <Link href="/" className="tokenBattleWaitingItem">
                        <span className="tokenBattleWaitingItemNumber">4</span>

                        <span className="tokenBattleWaitingItemToken">
                            <UserAvatar
                                image="/img/token1.png"
                                width={60}
                                height={60}
                            />

                            <span className="tokenBattleWaitingItemTokenName">
                                Bon_431
                            </span>
                        </span>

                        <span className="tokenBattleWaitingItemTextBlock">
                            <span className="tokenBattleWaitingItemText">
                                Starts when ful
                            </span>

                            <span className="tokenBattleWaitingItemValue">
                                200$/400$
                            </span>
                        </span>
                    </Link>
                </div>
            </div>

            <div className="tokenBattleFinished">
                <p className="title2">Finished Battles</p>

                <div className="tokenBattleFinishedItems">
                    <div className="tokenBattleFinishedItem">
                        <p className="tokenBattleFinishedItemNum">1</p>

                        <div className="tokenBattleFinishedItemImageInner">
                            <div className="tokenBattleFinishedItemImage">
                                <Image src="/img/token1.png" alt="Image" fill />
                            </div>
                        </div>

                        <div className="tokenBattleFinishedItemContent">
                            <div className="tokenBattleFinishedItemUserStats">
                                <p className="tokenBattleFinishedItemUserName">
                                    User_9185151
                                </p>

                                <div className="tokenBattleFinishedItemUserStat">
                                    <p className="tokenBattleFinishedItemUserStatTitle">
                                        Total wins:
                                    </p>

                                    <p className="tokenBattleFinishedItemUserStatValue">
                                        150
                                    </p>
                                </div>

                                <div className="tokenBattleFinishedItemUserStat">
                                    <p className="tokenBattleFinishedItemUserStatTitle">
                                        Win rate:
                                    </p>

                                    <p className="tokenBattleFinishedItemUserStatValue">
                                        72%
                                    </p>
                                </div>
                            </div>

                            <div className="tokenBattleFinishedItemEarn">
                                <p className="tokenBattleFinishedItemUserStatTitle">
                                    Total eanvings
                                </p>
                                <p className="tokenBattleFinishedItemEarnValue">
                                    +$28.6K
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="tokenBattleFinishedItem">
                        <p className="tokenBattleFinishedItemNum">2</p>

                        <div className="tokenBattleFinishedItemImageInner">
                            <div className="tokenBattleFinishedItemImage">
                                <Image src="/img/token1.png" alt="Image" fill />
                            </div>
                        </div>

                        <div className="tokenBattleFinishedItemContent">
                            <div className="tokenBattleFinishedItemUserStats">
                                <p className="tokenBattleFinishedItemUserName">
                                    User_9185151
                                </p>

                                <div className="tokenBattleFinishedItemUserStat">
                                    <p className="tokenBattleFinishedItemUserStatTitle">
                                        Total wins:
                                    </p>

                                    <p className="tokenBattleFinishedItemUserStatValue">
                                        150
                                    </p>
                                </div>

                                <div className="tokenBattleFinishedItemUserStat">
                                    <p className="tokenBattleFinishedItemUserStatTitle">
                                        Win rate:
                                    </p>

                                    <p className="tokenBattleFinishedItemUserStatValue">
                                        72%
                                    </p>
                                </div>
                            </div>

                            <div className="tokenBattleFinishedItemEarn">
                                <p className="tokenBattleFinishedItemUserStatTitle">
                                    Total eanvings
                                </p>
                                <p className="tokenBattleFinishedItemEarnValue">
                                    +$28.6K
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="tokenBattleFinishedItem">
                        <p className="tokenBattleFinishedItemNum">3</p>

                        <div className="tokenBattleFinishedItemImageInner">
                            <div className="tokenBattleFinishedItemImage">
                                <Image src="/img/token1.png" alt="Image" fill />
                            </div>
                        </div>

                        <div className="tokenBattleFinishedItemContent">
                            <div className="tokenBattleFinishedItemUserStats">
                                <p className="tokenBattleFinishedItemUserName">
                                    User_9185151
                                </p>

                                <div className="tokenBattleFinishedItemUserStat">
                                    <p className="tokenBattleFinishedItemUserStatTitle">
                                        Total wins:
                                    </p>

                                    <p className="tokenBattleFinishedItemUserStatValue">
                                        150
                                    </p>
                                </div>

                                <div className="tokenBattleFinishedItemUserStat">
                                    <p className="tokenBattleFinishedItemUserStatTitle">
                                        Win rate:
                                    </p>

                                    <p className="tokenBattleFinishedItemUserStatValue">
                                        72%
                                    </p>
                                </div>
                            </div>

                            <div className="tokenBattleFinishedItemEarn">
                                <p className="tokenBattleFinishedItemUserStatTitle">
                                    Total eanvings
                                </p>
                                <p className="tokenBattleFinishedItemEarnValue">
                                    +$28.6K
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TokenBattles;
