"use client";

import React from "react";
import cn from "classnames";
import Image from "next/image";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import styles from "./index.module.scss";
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
            <div className={styles.leaderboard}>
                <div className={styles.leaderboardTabs}>
                    <button
                        className={cn(styles.leaderboardTab, {
                            [styles.active]: tabTokens === "top tokens",
                        })}
                        onClick={() => setTabTokens("top tokens")}
                    >
                        <TopToken />
                        Top tokens
                    </button>

                    <button
                        className={cn(styles.leaderboardTab, {
                            [styles.active]: tabTokens === "top creators",
                        })}
                        onClick={() => setTabTokens("top creators")}
                    >
                        <TopCreators />
                        Top creators
                    </button>

                    <button
                        className={cn(styles.leaderboardTab, {
                            [styles.active]: tabTokens === "top referrals",
                        })}
                        onClick={() => setTabTokens("top referrals")}
                    >
                        <TopReferrals />
                        Top referrals
                    </button>

                    <button
                        className={cn(styles.leaderboardTab, {
                            [styles.active]: tabTokens === "top pnl",
                        })}
                        onClick={() => setTabTokens("top pnl")}
                    >
                        <TopPnl />
                        Top PnL
                    </button>
                </div>

                <div className={styles.leaderboardContent}>
                    <Swiper
                        spaceBetween={15}
                        slidesPerView={3}
                        className={styles.leaderboardCarousel}
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
                                <SwiperSlide className={styles.topTokensItem}>
                                    <div className={styles.topTokensItemImg}>
                                        <Image
                                            src="/img/pepe.svg"
                                            alt="pepe"
                                            fill
                                        />
                                    </div>

                                    <div
                                        className={styles.topTokensItemContent}
                                    >
                                        <div
                                            className={styles.topTokensItemInfo}
                                        >
                                            <p
                                                className={
                                                    styles.topTokensItemInfoName
                                                }
                                            >
                                                Pepe
                                            </p>
                                            <p
                                                className={
                                                    styles.topTokensItemInfoPrice
                                                }
                                            >
                                                20.08000123
                                            </p>
                                        </div>

                                        <div className={styles.topTokensWrap}>
                                            <div
                                                className={
                                                    styles.topTokensItemProfit
                                                }
                                            >
                                                <p
                                                    className={cn(
                                                        styles.topTokensItemProfitValue,
                                                        styles.positive,
                                                    )}
                                                >
                                                    <ArrowIncrease />
                                                    44.25%
                                                </p>
                                                <p
                                                    className={
                                                        styles.topTokensItemProfitTotal
                                                    }
                                                >
                                                    + 1200%
                                                </p>
                                            </div>

                                            <button
                                                className={
                                                    styles.topTokensItemButton
                                                }
                                            >
                                                Trade
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className={styles.topTokensItem}>
                                    <div className={styles.topTokensItemImg}>
                                        <Image
                                            src="/img/shiba.svg"
                                            alt="shiba"
                                            fill
                                        />
                                    </div>

                                    <div
                                        className={styles.topTokensItemContent}
                                    >
                                        <div
                                            className={styles.topTokensItemInfo}
                                        >
                                            <p
                                                className={
                                                    styles.topTokensItemInfoName
                                                }
                                            >
                                                Shib
                                            </p>
                                            <p
                                                className={
                                                    styles.topTokensItemInfoPrice
                                                }
                                            >
                                                20.08000123
                                            </p>
                                        </div>

                                        <div className={styles.topTokensWrap}>
                                            <div
                                                className={
                                                    styles.topTokensItemProfit
                                                }
                                            >
                                                <p
                                                    className={cn(
                                                        styles.topTokensItemProfitValue,
                                                        styles.positive,
                                                    )}
                                                >
                                                    <ArrowIncrease />
                                                    44.25%
                                                </p>
                                                <p
                                                    className={
                                                        styles.topTokensItemProfitTotal
                                                    }
                                                >
                                                    + 1200%
                                                </p>
                                            </div>

                                            <button
                                                className={
                                                    styles.topTokensItemButton
                                                }
                                            >
                                                Trade
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className={styles.topTokensItem}>
                                    <div className={styles.topTokensItemImg}>
                                        <Image
                                            src="/img/doge.svg"
                                            alt="doge"
                                            fill
                                        />
                                    </div>

                                    <div
                                        className={styles.topTokensItemContent}
                                    >
                                        <div
                                            className={styles.topTokensItemInfo}
                                        >
                                            <p
                                                className={
                                                    styles.topTokensItemInfoName
                                                }
                                            >
                                                Doge
                                            </p>
                                            <p
                                                className={
                                                    styles.topTokensItemInfoPrice
                                                }
                                            >
                                                20.08000123
                                            </p>
                                        </div>

                                        <div className={styles.topTokensWrap}>
                                            <div
                                                className={
                                                    styles.topTokensItemProfit
                                                }
                                            >
                                                <p
                                                    className={cn(
                                                        styles.topTokensItemProfitValue,
                                                        styles.negative,
                                                    )}
                                                >
                                                    <ArrowFall />
                                                    44.25%
                                                </p>
                                                <p
                                                    className={
                                                        styles.topTokensItemProfitTotal
                                                    }
                                                >
                                                    + 900%
                                                </p>
                                            </div>

                                            <button
                                                className={
                                                    styles.topTokensItemButton
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
                className={styles.mainPoints}
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
                <SwiperSlide className={styles.mainPointWrapper}>
                    <div className={cn(styles.mainPoint, styles.tokenBlock)}>
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
                                src="/img/main1.svg"
                                alt="Launch tokens"
                                fill
                            />
                        </div>

                        <button className={styles.mainPointButton}>
                            <UserLogin />
                            Sign up
                        </button>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={styles.mainPointWrapper}>
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
                                src="/img/main2.svg"
                                alt="Launch tokens"
                                fill
                            />
                        </div>

                        <button className={styles.mainPointButton}>
                            Go in
                        </button>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={styles.mainPointWrapper}>
                    <div className={cn(styles.mainPoint, styles.prizeBlock)}>
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
                                src="/img/main3.svg"
                                alt="Launch tokens"
                                fill
                            />
                        </div>

                        <button className={styles.mainPointButton}>
                            Go in
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className={styles.mainContent}>
                <div className={styles.mainContentTop}>
                    <div className={styles.mainContentWrapper}>
                        <p className={styles.blockTitle}>Traiding now</p>

                        <p className={styles.blockCount}>209 / 350</p>

                        <div className={styles.blockView}>
                            <button
                                className={cn(styles.blockViewButton, {
                                    [styles.active]: view === "grid",
                                })}
                                onClick={() => setView("grid")}
                            >
                                <BlockView />
                            </button>

                            <button
                                className={cn(styles.blockViewButton, {
                                    [styles.active]: view === "line",
                                })}
                                onClick={() => setView("line")}
                            >
                                <ListView />
                            </button>
                        </div>

                        <button
                            className={cn(styles.pressedButton, {
                                [styles.active]: isHighVolume,
                            })}
                            onClick={() => setIsHighVolume((prev) => !prev)}
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

                        <div
                            className={styles.filterSelectInner}
                            ref={selectRef}
                        >
                            <button
                                className={cn(styles.filterSelect, {
                                    [styles.active]: sortByFilterShow,
                                })}
                                onClick={() =>
                                    setSortByFilterShow((prev) => !prev)
                                }
                            >
                                <span className={styles.filterSelectTitle}>
                                    Soft by:
                                </span>

                                <span className={styles.filterSelectValue}>
                                    {sortByFilter}
                                </span>

                                <ArrowDown />
                            </button>

                            <div
                                className={cn(styles.selectDropdown, {
                                    [styles.active]: sortByFilterShow,
                                })}
                            >
                                <button
                                    className={cn(styles.selectDropdownOption, {
                                        [styles.active]:
                                            sortByFilter === "Newest first",
                                    })}
                                    onClick={() => changeSelect("Newest first")}
                                >
                                    Newest first
                                </button>

                                <button
                                    className={cn(styles.selectDropdownOption, {
                                        [styles.active]:
                                            sortByFilter === "Oldest first",
                                    })}
                                    onClick={() => changeSelect("Oldest first")}
                                >
                                    Oldest first
                                </button>

                                <button
                                    className={cn(styles.selectDropdownOption, {
                                        [styles.active]:
                                            sortByFilter === "Highest volume",
                                    })}
                                    onClick={() =>
                                        changeSelect("Highest volume")
                                    }
                                >
                                    Highest volume
                                </button>

                                <button
                                    className={cn(styles.selectDropdownOption, {
                                        [styles.active]:
                                            sortByFilter === "Lowest volume",
                                    })}
                                    onClick={() =>
                                        changeSelect("Lowest volume")
                                    }
                                >
                                    Lowest volume
                                </button>

                                <button
                                    className={cn(styles.selectDropdownOption, {
                                        [styles.active]:
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
                                    className={cn(styles.selectDropdownOption, {
                                        [styles.active]:
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

                <div className={styles.mainItems}>
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

                <div className={styles.mainContentBottom}>
                    <p className={styles.paginationPages}>
                        Page <span>1</span> of <span>350</span>
                    </p>

                    <div className={styles.pagination}>
                        <button
                            className={cn(styles.paginationButton, styles.auto)}
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
                        <button className={styles.paginationButton}>2</button>
                        <button className={styles.paginationButton}>3</button>
                        <button className={styles.paginationButton}>4</button>
                        <button className={styles.paginationButton}>5</button>
                        <button
                            className={cn(styles.paginationButton, styles.auto)}
                        >
                            Next
                        </button>
                    </div>

                    <div></div>

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
                <div className={styles.leaderboardTabs}>
                    <button
                        className={cn(styles.leaderboardTab, {
                            [styles.active]: tabLeaderboard === "top gainers",
                        })}
                        onClick={() => setTabLeaderboard("top gainers")}
                    >
                        <CircleStar />
                        Top gainers
                    </button>

                    <button
                        className={cn(styles.leaderboardTab, {
                            [styles.active]: tabLeaderboard === "new",
                        })}
                        onClick={() => setTabLeaderboard("new")}
                    >
                        <New />
                        New
                    </button>

                    <button
                        className={cn(styles.leaderboardTab, {
                            [styles.active]: tabLeaderboard === "hot",
                        })}
                        onClick={() => setTabLeaderboard("hot")}
                    >
                        <Fire />
                        Hot
                    </button>

                    <button
                        className={cn(styles.leaderboardTab, {
                            [styles.active]: tabLeaderboard === "top losers",
                        })}
                        onClick={() => setTabLeaderboard("top losers")}
                    >
                        <SadSmile />
                        Top losers
                    </button>
                </div>

                <div className={styles.leaderboardContent}>
                    <Swiper
                        spaceBetween={15}
                        slidesPerView={8}
                        className={styles.leaderboardCarousel}
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
                                <SwiperSlide
                                    className={styles.leaderboardSlide}
                                >
                                    <div className={styles.leaderboardSlideImg}>
                                        <Image
                                            src="/img/token1.png"
                                            alt="profile"
                                            fill
                                        />
                                    </div>

                                    <p className={styles.leaderboardSlideName}>
                                        FUSKR
                                    </p>

                                    <div
                                        className={styles.leaderboardSlideWrap}
                                    >
                                        <p
                                            className={
                                                styles.leaderboardSlideValue
                                            }
                                        >
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

                                <SwiperSlide
                                    className={styles.leaderboardSlide}
                                >
                                    <div className={styles.leaderboardSlideImg}>
                                        <Image
                                            src="/img/token2.png"
                                            alt="profile"
                                            fill
                                        />
                                    </div>

                                    <p className={styles.leaderboardSlideName}>
                                        FUSKR
                                    </p>

                                    <div
                                        className={styles.leaderboardSlideWrap}
                                    >
                                        <p
                                            className={
                                                styles.leaderboardSlideValue
                                            }
                                        >
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

                                <SwiperSlide
                                    className={styles.leaderboardSlide}
                                >
                                    <div className={styles.leaderboardSlideImg}>
                                        <Image
                                            src="/img/token3.png"
                                            alt="profile"
                                            fill
                                        />
                                    </div>

                                    <p className={styles.leaderboardSlideName}>
                                        FUSKR
                                    </p>

                                    <div
                                        className={styles.leaderboardSlideWrap}
                                    >
                                        <p
                                            className={
                                                styles.leaderboardSlideValue
                                            }
                                        >
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

                                <SwiperSlide
                                    className={styles.leaderboardSlide}
                                >
                                    <div className={styles.leaderboardSlideImg}>
                                        <Image
                                            src="/img/token3.png"
                                            alt="profile"
                                            fill
                                        />
                                    </div>

                                    <p className={styles.leaderboardSlideName}>
                                        FUSKR
                                    </p>

                                    <div
                                        className={styles.leaderboardSlideWrap}
                                    >
                                        <p
                                            className={
                                                styles.leaderboardSlideValue
                                            }
                                        >
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

                                <SwiperSlide
                                    className={styles.leaderboardSlide}
                                >
                                    <div className={styles.leaderboardSlideImg}>
                                        <Image
                                            src="/img/token1.png"
                                            alt="profile"
                                            fill
                                        />
                                    </div>

                                    <p className={styles.leaderboardSlideName}>
                                        FUSKR
                                    </p>

                                    <div
                                        className={styles.leaderboardSlideWrap}
                                    >
                                        <p
                                            className={
                                                styles.leaderboardSlideValue
                                            }
                                        >
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

                                <SwiperSlide
                                    className={styles.leaderboardSlide}
                                >
                                    <div className={styles.leaderboardSlideImg}>
                                        <Image
                                            src="/img/token1.png"
                                            alt="profile"
                                            fill
                                        />
                                    </div>

                                    <p className={styles.leaderboardSlideName}>
                                        FUSKR
                                    </p>

                                    <div
                                        className={styles.leaderboardSlideWrap}
                                    >
                                        <p
                                            className={
                                                styles.leaderboardSlideValue
                                            }
                                        >
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

                                <SwiperSlide
                                    className={styles.leaderboardSlide}
                                >
                                    <div className={styles.leaderboardSlideImg}>
                                        <Image
                                            src="/img/token2.png"
                                            alt="profile"
                                            fill
                                        />
                                    </div>

                                    <p className={styles.leaderboardSlideName}>
                                        FUSKR
                                    </p>

                                    <div
                                        className={styles.leaderboardSlideWrap}
                                    >
                                        <p
                                            className={
                                                styles.leaderboardSlideValue
                                            }
                                        >
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

                                <SwiperSlide
                                    className={styles.leaderboardSlide}
                                >
                                    <div className={styles.leaderboardSlideImg}>
                                        <Image
                                            src="/img/token3.png"
                                            alt="profile"
                                            fill
                                        />
                                    </div>

                                    <p className={styles.leaderboardSlideName}>
                                        FUSKR
                                    </p>

                                    <div
                                        className={styles.leaderboardSlideWrap}
                                    >
                                        <p
                                            className={
                                                styles.leaderboardSlideValue
                                            }
                                        >
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

                                <SwiperSlide
                                    className={styles.leaderboardSlide}
                                >
                                    <div className={styles.leaderboardSlideImg}>
                                        <Image
                                            src="/img/token3.png"
                                            alt="profile"
                                            fill
                                        />
                                    </div>

                                    <p className={styles.leaderboardSlideName}>
                                        FUSKR
                                    </p>

                                    <div
                                        className={styles.leaderboardSlideWrap}
                                    >
                                        <p
                                            className={
                                                styles.leaderboardSlideValue
                                            }
                                        >
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
                            <SwiperSlide className={styles.leaderboardSlide}>
                                <div className={styles.leaderboardSlideImg}>
                                    <Image
                                        src="/img/token3.png"
                                        alt="profile"
                                        fill
                                    />
                                </div>

                                <p className={styles.leaderboardSlideName}>
                                    FUSKR
                                </p>

                                <div className={styles.leaderboardSlideWrap}>
                                    <p className={styles.leaderboardSlideValue}>
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
                            <SwiperSlide className={styles.leaderboardSlide}>
                                <div className={styles.leaderboardSlideImg}>
                                    <Image
                                        src="/img/token2.png"
                                        alt="profile"
                                        fill
                                    />
                                </div>

                                <p className={styles.leaderboardSlideName}>
                                    FUSKR
                                </p>

                                <div className={styles.leaderboardSlideWrap}>
                                    <p className={styles.leaderboardSlideValue}>
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
                            <SwiperSlide className={styles.leaderboardSlide}>
                                <div className={styles.leaderboardSlideImg}>
                                    <Image
                                        src="/img/token1.png"
                                        alt="profile"
                                        fill
                                    />
                                </div>

                                <p className={styles.leaderboardSlideName}>
                                    FUSKR
                                </p>

                                <div className={styles.leaderboardSlideWrap}>
                                    <p className={styles.leaderboardSlideValue}>
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

            <div className={styles.mainTrades}>
                <p className={styles.blockTitle}>Public Trades</p>

                <div className={styles.mainTradesItems}>
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
