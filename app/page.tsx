"use client";

import React from "react";
import cn from "classnames";
import Image from "next/image";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import "./index.scss";
import "swiper/css";

import {
    ArrowDown,
    ArrowFall,
    ArrowIncrease,
    BlockView,
    CheckCircle,
    CircleStar,
    Fire,
    ListView,
    New,
    SadSmile,
    TopCreators,
    TopPnl,
    TopReferrals,
    TopToken,
    UserLogin,
} from "@/shared/icons";
import { Search } from "@/shared/icons/Search";
import { Token } from "@/shared/ui/Token";
import { TradeItem } from "@/shared/ui/TradeItem";
import { SliderBlock } from "@/shared/ui/SliderBlock";
import { Profit } from "@/shared/ui/Profit";
import { Pagination } from "@/shared/ui/Pagination";

type SortBy =
    | "Newest first"
    | "Oldest first"
    | "Highest volume"
    | "Lowest volume"
    | "Time remaining high"
    | "Time remaining low";

const MainPage = () => {
    const [view, setView] = React.useState<"grid" | "line">("grid");
    const [time, setTime] = React.useState<
        "all" | "4h" | "1h" | "15m" | "3m" | "1m"
    >("all");
    const [isHighVolume, setIsHighVolume] = React.useState(false);
    const [sortByFilterShow, setSortByFilterShow] = React.useState(false);
    const [sortByFilter, setSortByFilter] =
        React.useState<SortBy>("Newest first");

    const [tabLeaderboard, setTabLeaderboard] = React.useState<
        "top gainers" | "new" | "hot" | "top losers"
    >("top gainers");
    const [tabTokens, setTabTokens] = React.useState<
        "top tokens" | "top creators" | "top referrals" | "top pnl"
    >("top tokens");

    const selectRef = React.useRef<HTMLDivElement>(null);
    const swiperInstance = React.useRef<SwiperClass | null>(null);
    const swiperInstance2 = React.useRef<SwiperClass | null>(null);
    const swiperTokensInstance = React.useRef<SwiperClass | null>(null);

    const changeSelect = (option: SortBy) => {
        if (sortByFilter === option) return;

        setSortByFilter(option);
        setSortByFilterShow(false);
    };

    React.useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            if (
                selectRef.current &&
                !selectRef.current.contains(e.target as Node)
            ) {
                setSortByFilterShow(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
        <>
            <div className="leaderboard">
                <div className="leaderboardTabs">
                    <button
                        className={cn("leaderboardTab", {
                            ["active"]: tabTokens === "top tokens",
                        })}
                        onClick={() => setTabTokens("top tokens")}
                    >
                        <TopToken />
                        Top tokens
                    </button>

                    <button
                        className={cn("leaderboardTab", {
                            ["active"]: tabTokens === "top creators",
                        })}
                        onClick={() => setTabTokens("top creators")}
                    >
                        <TopCreators />
                        Top creators
                    </button>

                    <button
                        className={cn("leaderboardTab", {
                            ["active"]: tabTokens === "top referrals",
                        })}
                        onClick={() => setTabTokens("top referrals")}
                    >
                        <TopReferrals />
                        Top referrals
                    </button>

                    <button
                        className={cn("leaderboardTab", {
                            ["active"]: tabTokens === "top pnl",
                        })}
                        onClick={() => setTabTokens("top pnl")}
                    >
                        <TopPnl />
                        Top PnL
                    </button>
                </div>

                <div className="leaderboardContent">
                    <Swiper
                        spaceBetween={15}
                        slidesPerView={3}
                        className="leaderboardCarousel"
                        onSwiper={(swiper) => {
                            swiperInstance.current = swiper;
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 15,
                            },
                            700: {
                                slidesPerView: 1.5,
                                spaceBetween: 15,
                            },
                            850: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            1200: {
                                slidesPerView: 2.5,
                                spaceBetween: 15,
                            },
                            1480: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                        }}
                    >
                        {tabTokens === "top tokens" && (
                            <>
                                <SwiperSlide className="topTokensItem">
                                    <div className="topTokensItemImg">
                                        <Image
                                            src="/img/pepe.svg"
                                            alt="pepe"
                                            fill
                                        />
                                    </div>

                                    <div className="topTokensItemContent">
                                        <div className="topTokensItemInfo">
                                            <p
                                                className={
                                                    "topTokensItemInfoName"
                                                }
                                            >
                                                Pepe
                                            </p>
                                            <p
                                                className={
                                                    "topTokensItemInfoPrice"
                                                }
                                            >
                                                20.08000123
                                            </p>
                                        </div>

                                        <div className="topTokensWrap">
                                            <div
                                                className={
                                                    "topTokensItemProfit"
                                                }
                                            >
                                                <p
                                                    className={cn(
                                                        "topTokensItemProfitValue",
                                                        "positive",
                                                    )}
                                                >
                                                    <ArrowIncrease />
                                                    44.25%
                                                </p>
                                                <p
                                                    className={
                                                        "topTokensItemProfitTotal"
                                                    }
                                                >
                                                    + 1200%
                                                </p>
                                            </div>

                                            <button
                                                className={
                                                    "topTokensItemButton"
                                                }
                                            >
                                                Trade
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="topTokensItem">
                                    <div className="topTokensItemImg">
                                        <Image
                                            src="/img/shiba.svg"
                                            alt="shiba"
                                            fill
                                        />
                                    </div>

                                    <div className="topTokensItemContent">
                                        <div className="topTokensItemInfo">
                                            <p
                                                className={
                                                    "topTokensItemInfoName"
                                                }
                                            >
                                                Shib
                                            </p>
                                            <p
                                                className={
                                                    "topTokensItemInfoPrice"
                                                }
                                            >
                                                20.08000123
                                            </p>
                                        </div>

                                        <div className="topTokensWrap">
                                            <div
                                                className={
                                                    "topTokensItemProfit"
                                                }
                                            >
                                                <p
                                                    className={cn(
                                                        "topTokensItemProfitValue",
                                                        "positive",
                                                    )}
                                                >
                                                    <ArrowIncrease />
                                                    44.25%
                                                </p>
                                                <p
                                                    className={
                                                        "topTokensItemProfitTotal"
                                                    }
                                                >
                                                    + 1200%
                                                </p>
                                            </div>

                                            <button
                                                className={
                                                    "topTokensItemButton"
                                                }
                                            >
                                                Trade
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="topTokensItem">
                                    <div className="topTokensItemImg">
                                        <Image
                                            src="/img/doge.svg"
                                            alt="doge"
                                            fill
                                        />
                                    </div>

                                    <div className="topTokensItemContent">
                                        <div className="topTokensItemInfo">
                                            <p
                                                className={
                                                    "topTokensItemInfoName"
                                                }
                                            >
                                                Doge
                                            </p>
                                            <p
                                                className={
                                                    "topTokensItemInfoPrice"
                                                }
                                            >
                                                20.08000123
                                            </p>
                                        </div>

                                        <div className="topTokensWrap">
                                            <div
                                                className={
                                                    "topTokensItemProfit"
                                                }
                                            >
                                                <p
                                                    className={cn(
                                                        "topTokensItemProfitValue",
                                                        "negative",
                                                    )}
                                                >
                                                    <ArrowFall />
                                                    44.25%
                                                </p>
                                                <p
                                                    className={
                                                        "topTokensItemProfitTotal"
                                                    }
                                                >
                                                    + 900%
                                                </p>
                                            </div>

                                            <button
                                                className={
                                                    "topTokensItemButton"
                                                }
                                            >
                                                Trade
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </>
                        )}
                    </Swiper>
                </div>
            </div>

            <Swiper
                className="mainPoints"
                spaceBetween={15}
                slidesPerView={3}
                onSwiper={(swiper) => {
                    swiperTokensInstance.current = swiper;
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    650: {
                        slidesPerView: 1.5,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1200: {
                        slidesPerView: 2.5,
                        spaceBetween: 15,
                    },
                    1300: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                }}
            >
                <SwiperSlide className="mainPointWrapper">
                    <div className={cn("mainPoint", "tokenBlock")}>
                        <Image
                            src="/img/mainpoint-bg.png"
                            alt="Grid"
                            fill
                            className="mainPointBg"
                        />

                        <div className="mainPointTextBlock">
                            <p className="mainPointTitle">
                                Launch tokens on Turbo
                            </p>
                            <p className="mainPointText">
                                No insiders, no rugpulls - pure math bullet
                                point icon
                            </p>
                        </div>

                        <div className="mainPointImage">
                            <Image
                                src="/img/main1.svg"
                                alt="Launch tokens"
                                fill
                            />
                        </div>

                        <button className="mainPointButton">
                            <UserLogin />
                            Sign up
                        </button>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="mainPointWrapper">
                    <div className={cn("mainPoint", "paidBlock")}>
                        <Image
                            src="/img/mainpoint-bg.png"
                            alt="Grid"
                            fill
                            className="mainPointBg"
                        />

                        <div className="mainPointTextBlock">
                            <p className="mainPointTitle">
                                $483.2K paid to creators today
                            </p>
                            <p className="mainPointText">
                                Get 0.5% from volume
                            </p>
                        </div>

                        <div className="mainPointImage">
                            <Image
                                src="/img/main2.svg"
                                alt="Launch tokens"
                                fill
                            />
                        </div>

                        <button className="mainPointButton">Go in</button>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="mainPointWrapper">
                    <div className={cn("mainPoint", "prizeBlock")}>
                        <Image
                            src="/img/mainpoint-bg.png"
                            alt="Grid"
                            fill
                            className="mainPointBg"
                        />

                        <div className="mainPointTextBlock">
                            <p className="mainPointTitle">
                                prize drawing Launch for just $1
                            </p>
                            <p className="mainPointText">Earn unlimited fees</p>
                        </div>

                        <div className="mainPointImage">
                            <Image
                                src="/img/main3.svg"
                                alt="Launch tokens"
                                fill
                            />
                        </div>

                        <button className="mainPointButton">Go in</button>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="mainContentBlock">
                <div className="mainContentTop">
                    <div className="mainContentWrapper">
                        <p className="blockTitle">Traiding now</p>

                        <p className="blockCount">209 / 350</p>

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

                        <button
                            className={cn("pressedButton", {
                                ["active"]: isHighVolume,
                            })}
                            onClick={() => setIsHighVolume((prev) => !prev)}
                        >
                            <span>
                                <CheckCircle />
                            </span>
                            High volume
                        </button>
                    </div>

                    <div className="searchInputInner">
                        <input
                            className="searchInput"
                            placeholder="Search token"
                        />

                        <Search />
                    </div>

                    <div className="mainContentFilters">
                        <div className="filtersBlockTabs">
                            <button
                                className={cn("filtersBlockTab", {
                                    ["active"]: time === "all",
                                })}
                                onClick={() => setTime("all")}
                            >
                                All
                            </button>

                            <button
                                className={cn("filtersBlockTab", {
                                    ["active"]: time === "4h",
                                })}
                                onClick={() => setTime("4h")}
                            >
                                4h
                            </button>

                            <button
                                className={cn("filtersBlockTab", {
                                    ["active"]: time === "1h",
                                })}
                                onClick={() => setTime("1h")}
                            >
                                1h
                            </button>

                            <button
                                className={cn("filtersBlockTab", {
                                    ["active"]: time === "15m",
                                })}
                                onClick={() => setTime("15m")}
                            >
                                15m
                            </button>

                            <button
                                className={cn("filtersBlockTab", {
                                    ["active"]: time === "3m",
                                })}
                                onClick={() => setTime("3m")}
                            >
                                3m
                            </button>

                            <button
                                className={cn("filtersBlockTab", {
                                    ["active"]: time === "1m",
                                })}
                                onClick={() => setTime("1m")}
                            >
                                1m
                            </button>
                        </div>

                        <div className="filterSelectInner" ref={selectRef}>
                            <button
                                className={cn("filterSelect", {
                                    ["active"]: sortByFilterShow,
                                })}
                                onClick={() =>
                                    setSortByFilterShow((prev) => !prev)
                                }
                            >
                                <span className="filterSelectTitle">
                                    Soft by:
                                </span>

                                <span className="filterSelectValue">
                                    {sortByFilter}
                                </span>

                                <ArrowDown />
                            </button>

                            <div
                                className={cn("selectDropdown", {
                                    ["active"]: sortByFilterShow,
                                })}
                            >
                                <button
                                    className={cn("selectDropdownOption", {
                                        ["active"]:
                                            sortByFilter === "Newest first",
                                    })}
                                    onClick={() => changeSelect("Newest first")}
                                >
                                    Newest first
                                </button>

                                <button
                                    className={cn("selectDropdownOption", {
                                        ["active"]:
                                            sortByFilter === "Oldest first",
                                    })}
                                    onClick={() => changeSelect("Oldest first")}
                                >
                                    Oldest first
                                </button>

                                <button
                                    className={cn("selectDropdownOption", {
                                        ["active"]:
                                            sortByFilter === "Highest volume",
                                    })}
                                    onClick={() =>
                                        changeSelect("Highest volume")
                                    }
                                >
                                    Highest volume
                                </button>

                                <button
                                    className={cn("selectDropdownOption", {
                                        ["active"]:
                                            sortByFilter === "Lowest volume",
                                    })}
                                    onClick={() =>
                                        changeSelect("Lowest volume")
                                    }
                                >
                                    Lowest volume
                                </button>

                                <button
                                    className={cn("selectDropdownOption", {
                                        ["active"]:
                                            sortByFilter ===
                                            "Time remaining high",
                                    })}
                                    onClick={() =>
                                        changeSelect("Time remaining high")
                                    }
                                >
                                    Time remaining high
                                </button>

                                <button
                                    className={cn("selectDropdownOption", {
                                        ["active"]:
                                            sortByFilter ===
                                            "Time remaining low",
                                    })}
                                    onClick={() =>
                                        changeSelect("Time remaining low")
                                    }
                                >
                                    Time remaining low
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mainItems">
                    <Token
                        image="/img/token1.png"
                        name="DUH9321"
                        price="289.99"
                        volume="115"
                        percent={44.25}
                        progress={65}
                        time="12m"
                        text="flash"
                        view={view}
                    />

                    <Token
                        image="/img/token1.png"
                        name="DUH9321"
                        price="289.99"
                        volume="115"
                        percent={44.25}
                        progress={65}
                        time="12m"
                        text="flash"
                        view={view}
                    />

                    <Token
                        image="/img/token1.png"
                        name="DUH9321"
                        price="289.99"
                        volume="115"
                        percent={44.25}
                        progress={65}
                        time="12m"
                        text="flash"
                        view={view}
                    />

                    <Token
                        image="/img/token1.png"
                        name="DUH9321"
                        price="289.99"
                        volume="115"
                        percent={44.25}
                        progress={65}
                        time="12m"
                        text="flash"
                        view={view}
                    />

                    <Token
                        image="/img/token1.png"
                        name="DUH9321"
                        price="289.99"
                        volume="115"
                        percent={44.25}
                        progress={65}
                        time="12m"
                        text="flash"
                        view={view}
                    />
                </div>

                <Pagination withPage />
            </div>

            <div className="leaderboard">
                <div className="leaderboardTabs">
                    <button
                        className={cn("leaderboardTab", {
                            ["active"]: tabLeaderboard === "top gainers",
                        })}
                        onClick={() => setTabLeaderboard("top gainers")}
                    >
                        <CircleStar />
                        Top gainers
                    </button>

                    <button
                        className={cn("leaderboardTab", {
                            ["active"]: tabLeaderboard === "new",
                        })}
                        onClick={() => setTabLeaderboard("new")}
                    >
                        <New />
                        New
                    </button>

                    <button
                        className={cn("leaderboardTab", {
                            ["active"]: tabLeaderboard === "hot",
                        })}
                        onClick={() => setTabLeaderboard("hot")}
                    >
                        <Fire />
                        Hot
                    </button>

                    <button
                        className={cn("leaderboardTab", {
                            ["active"]: tabLeaderboard === "top losers",
                        })}
                        onClick={() => setTabLeaderboard("top losers")}
                    >
                        <SadSmile />
                        Top losers
                    </button>
                </div>

                <div className="leaderboardContent">
                    <Swiper
                        spaceBetween={15}
                        slidesPerView={8}
                        className="leaderboardCarousel"
                        onSwiper={(swiper) => {
                            swiperInstance2.current = swiper;
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            560: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 15,
                            },
                            830: {
                                slidesPerView: 5,
                                spaceBetween: 15,
                            },
                            900: {
                                slidesPerView: 6,
                                spaceBetween: 15,
                            },
                            1050: {
                                slidesPerView: 7,
                                spaceBetween: 15,
                            },
                            1300: {
                                slidesPerView: 8,
                                spaceBetween: 15,
                            },
                        }}
                    >
                        {tabLeaderboard === "top gainers" && (
                            <>
                                <SwiperSlide className="leaderboardSlide">
                                    <div className="leaderboardSlideImg">
                                        <Image
                                            src="/img/token1.png"
                                            alt="profile"
                                            fill
                                        />
                                    </div>

                                    <p className="leaderboardSlideName">
                                        FUSKR
                                    </p>

                                    <div className="leaderboardSlideWrap">
                                        <p className={"leaderboardSlideValue"}>
                                            1600.79
                                        </p>
                                        <Profit value={4.96} />
                                    </div>

                                    <SliderBlock
                                        progress={55}
                                        time="12m"
                                        text="Flash"
                                    />
                                </SwiperSlide>

                                <SwiperSlide className="leaderboardSlide">
                                    <div className="leaderboardSlideImg">
                                        <Image
                                            src="/img/token2.png"
                                            alt="profile"
                                            fill
                                        />
                                    </div>

                                    <p className="leaderboardSlideName">
                                        FUSKR
                                    </p>

                                    <div className="leaderboardSlideWrap">
                                        <p className={"leaderboardSlideValue"}>
                                            1600.79
                                        </p>
                                        <Profit value={4.96} />
                                    </div>

                                    <SliderBlock
                                        progress={55}
                                        time="12m"
                                        text="Flash"
                                    />
                                </SwiperSlide>

                                <SwiperSlide className="leaderboardSlide">
                                    <div className="leaderboardSlideImg">
                                        <Image
                                            src="/img/token3.png"
                                            alt="profile"
                                            fill
                                        />
                                    </div>

                                    <p className="leaderboardSlideName">
                                        FUSKR
                                    </p>

                                    <div className="leaderboardSlideWrap">
                                        <p className={"leaderboardSlideValue"}>
                                            1600.79
                                        </p>
                                        <Profit value={4.96} />
                                    </div>

                                    <SliderBlock
                                        progress={55}
                                        time="12m"
                                        text="Flash"
                                    />
                                </SwiperSlide>

                                <SwiperSlide className="leaderboardSlide">
                                    <div className="leaderboardSlideImg">
                                        <Image
                                            src="/img/token3.png"
                                            alt="profile"
                                            fill
                                        />
                                    </div>

                                    <p className="leaderboardSlideName">
                                        FUSKR
                                    </p>

                                    <div className="leaderboardSlideWrap">
                                        <p className={"leaderboardSlideValue"}>
                                            1600.79
                                        </p>
                                        <Profit value={4.96} positive />
                                    </div>

                                    <SliderBlock
                                        progress={55}
                                        time="12m"
                                        text="Flash"
                                    />
                                </SwiperSlide>

                                <SwiperSlide className="leaderboardSlide">
                                    <div className="leaderboardSlideImg">
                                        <Image
                                            src="/img/token1.png"
                                            alt="profile"
                                            fill
                                        />
                                    </div>

                                    <p className="leaderboardSlideName">
                                        FUSKR
                                    </p>

                                    <div className="leaderboardSlideWrap">
                                        <p className={"leaderboardSlideValue"}>
                                            1600.79
                                        </p>
                                        <Profit value={4.96} />
                                    </div>

                                    <SliderBlock
                                        progress={55}
                                        time="12m"
                                        text="Flash"
                                    />
                                </SwiperSlide>

                                <SwiperSlide className="leaderboardSlide">
                                    <div className="leaderboardSlideImg">
                                        <Image
                                            src="/img/token1.png"
                                            alt="profile"
                                            fill
                                        />
                                    </div>

                                    <p className="leaderboardSlideName">
                                        FUSKR
                                    </p>

                                    <div className="leaderboardSlideWrap">
                                        <p className={"leaderboardSlideValue"}>
                                            1600.79
                                        </p>
                                        <Profit value={4.96} positive />
                                    </div>

                                    <SliderBlock
                                        progress={55}
                                        time="12m"
                                        text="Flash"
                                    />
                                </SwiperSlide>

                                <SwiperSlide className="leaderboardSlide">
                                    <div className="leaderboardSlideImg">
                                        <Image
                                            src="/img/token2.png"
                                            alt="profile"
                                            fill
                                        />
                                    </div>

                                    <p className="leaderboardSlideName">
                                        FUSKR
                                    </p>

                                    <div className="leaderboardSlideWrap">
                                        <p className={"leaderboardSlideValue"}>
                                            1600.79
                                        </p>
                                        <Profit value={4.96} />
                                    </div>

                                    <SliderBlock
                                        progress={55}
                                        time="12m"
                                        text="Flash"
                                    />
                                </SwiperSlide>

                                <SwiperSlide className="leaderboardSlide">
                                    <div className="leaderboardSlideImg">
                                        <Image
                                            src="/img/token3.png"
                                            alt="profile"
                                            fill
                                        />
                                    </div>

                                    <p className="leaderboardSlideName">
                                        FUSKR
                                    </p>

                                    <div className="leaderboardSlideWrap">
                                        <p className={"leaderboardSlideValue"}>
                                            1600.79
                                        </p>
                                        <Profit value={4.96} positive />
                                    </div>

                                    <SliderBlock
                                        progress={55}
                                        time="12m"
                                        text="Flash"
                                    />
                                </SwiperSlide>

                                <SwiperSlide className="leaderboardSlide">
                                    <div className="leaderboardSlideImg">
                                        <Image
                                            src="/img/token3.png"
                                            alt="profile"
                                            fill
                                        />
                                    </div>

                                    <p className="leaderboardSlideName">
                                        FUSKR
                                    </p>

                                    <div className="leaderboardSlideWrap">
                                        <p className={"leaderboardSlideValue"}>
                                            1600.79
                                        </p>
                                        <Profit value={4.96} />
                                    </div>

                                    <SliderBlock
                                        progress={55}
                                        time="12m"
                                        text="Flash"
                                    />
                                </SwiperSlide>
                            </>
                        )}

                        {tabLeaderboard === "new" && (
                            <SwiperSlide className="leaderboardSlide">
                                <div className="leaderboardSlideImg">
                                    <Image
                                        src="/img/token3.png"
                                        alt="profile"
                                        fill
                                    />
                                </div>

                                <p className="leaderboardSlideName">FUSKR</p>

                                <div className="leaderboardSlideWrap">
                                    <p className="leaderboardSlideValue">
                                        1600.79
                                    </p>
                                    <Profit value={4.96} />
                                </div>

                                <SliderBlock
                                    progress={55}
                                    time="12m"
                                    text="Flash"
                                />
                            </SwiperSlide>
                        )}

                        {tabLeaderboard === "hot" && (
                            <SwiperSlide className="leaderboardSlide">
                                <div className="leaderboardSlideImg">
                                    <Image
                                        src="/img/token2.png"
                                        alt="profile"
                                        fill
                                    />
                                </div>

                                <p className="leaderboardSlideName">FUSKR</p>

                                <div className="leaderboardSlideWrap">
                                    <p className="leaderboardSlideValue">
                                        1600.79
                                    </p>
                                    <Profit value={4.96} />
                                </div>

                                <SliderBlock
                                    progress={55}
                                    time="12m"
                                    text="Flash"
                                />
                            </SwiperSlide>
                        )}

                        {tabLeaderboard === "top losers" && (
                            <SwiperSlide className="leaderboardSlide">
                                <div className="leaderboardSlideImg">
                                    <Image
                                        src="/img/token1.png"
                                        alt="profile"
                                        fill
                                    />
                                </div>

                                <p className="leaderboardSlideName">FUSKR</p>

                                <div className="leaderboardSlideWrap">
                                    <p className="leaderboardSlideValue">
                                        1600.79
                                    </p>
                                    <Profit value={4.96} />
                                </div>

                                <SliderBlock
                                    progress={55}
                                    time="12m"
                                    text="Flash"
                                />
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
            </div>

            <div className="mainTrades">
                <p className="blockTitle">Public Trades</p>

                <div className="mainTradesItems">
                    <TradeItem />
                    <TradeItem />
                    <TradeItem />
                    <TradeItem />
                    <TradeItem />
                    <TradeItem />
                </div>
            </div>
        </>
    );
};

export default MainPage;
