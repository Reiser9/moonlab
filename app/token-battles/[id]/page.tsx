"use client";

import React from "react";
import Image from "next/image";
import cn from "classnames";
import { CandlestickSeries, createChart, ColorType } from "lightweight-charts";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./index.scss";

import { AvatarGroup } from "@/shared/ui/AvatarGroup";
import { useSidebarContext } from "@/shared/context/SidebarProvider";
import { initialDataChart } from "../../terminal/data";
import { ArrowLeft, ArrowRight, Eth } from "@/shared/icons";
import { UserAvatar } from "@/shared/ui/UserAvatar";

const sliderMaxValue = 144;

const BattlePageById = () => {
    const [sliderValue, setSliderValue] = React.useState(0);
    const [bet, setBet] = React.useState(0);

    const { sidebarIsOpen } = useSidebarContext();
    const swiperInstance = React.useRef<SwiperClass | null>(null);

    // Chart
    const chartContainerRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        if (!chartContainerRef) return;

        const handleResize = () => {
            chart.applyOptions({
                width: chartContainerRef.current?.clientWidth,
            });
        };

        const chart = createChart(chartContainerRef.current || "", {
            layout: {
                background: { type: ColorType.Solid, color: "#121116" },
                textColor: "#3D3C45",
            },
            width: chartContainerRef.current?.clientWidth,
            height: chartContainerRef.current?.clientHeight,
            grid: {
                vertLines: {
                    color: "#202125",
                },
                horzLines: {
                    color: "#202125",
                },
            },
            rightPriceScale: {
                visible: false,
            },
            timeScale: {
                visible: false,
            },
        });
        chart.timeScale().fitContent();

        const newSeries = chart.addSeries(CandlestickSeries, {
            upColor: "#1DAD52",
            downColor: "#ED8E8E",
            borderVisible: false,
            wickUpColor: "#1DAD52",
            wickDownColor: "#ED8E8E",
        });
        newSeries.setData(initialDataChart);

        setTimeout(() => {
            chart.applyOptions({
                width: chartContainerRef.current?.clientWidth,
            });
        }, 200);

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);

            chart.remove();
        };
    }, [chartContainerRef, sidebarIsOpen]);

    return (
        <>
            <div className="pageBattleTop">
                <p className="title2">Active battles</p>

                <div className="pageBattleActiveItems">
                    <div className="pageBattleActiveItem">
                        <div className="pageBattleActiveItemToken">
                            <div className="pageBattleActiveItemTokenImage">
                                <Image src="/img/pepe.svg" alt="pepe" fill />
                            </div>

                            <p className="pageBattleActiveItemTokenName">
                                PEPE
                            </p>

                            <p className="pageBattleActiveItemTokenStatus">
                                live
                            </p>
                        </div>

                        <div className="pageBattleActiveItemUsers">
                            <p className="pageBattleActiveItemPrizeText">
                                4/6 Players
                            </p>

                            <AvatarGroup
                                users={[
                                    {
                                        name: "Aang",
                                        image: "/img/token1.png",
                                    },
                                    {
                                        name: "Aang",
                                    },
                                    {
                                        name: "Aang",
                                        image: "/img/token2.png",
                                    },
                                    {
                                        name: "Aang",
                                        image: "/img/token3.png",
                                    },
                                ]}
                            />
                        </div>

                        <div className="pageBattleActiveItemPrize">
                            <p className="pageBattleActiveItemPrizeText">
                                Prize pool
                            </p>

                            <p className="pageBattleActiveItemPrizeValue">
                                100.00$
                            </p>
                        </div>

                        <div className="pageBattleActiveItemCountdown">
                            <p className="pageBattleActiveItemCountdownTitle">
                                Countdown
                            </p>
                            <div className="pageBattleActiveItemCountdownContent">
                                <div className="pageBattleActiveItemCountdownItem">
                                    <p className="pageBattleActiveItemCountdownItemTime">
                                        00
                                    </p>
                                    <p className="pageBattleActiveItemCountdownItemText">
                                        hours
                                    </p>
                                </div>
                                <p className="pageBattleActiveItemCountdownDots">
                                    :
                                </p>
                                <div className="pageBattleActiveItemCountdownItem">
                                    <p className="pageBattleActiveItemCountdownItemTime">
                                        00
                                    </p>
                                    <p className="pageBattleActiveItemCountdownItemText">
                                        minutes
                                    </p>
                                </div>
                                <p className="pageBattleActiveItemCountdownDots">
                                    :
                                </p>
                                <div className="pageBattleActiveItemCountdownItem">
                                    <p className="pageBattleActiveItemCountdownItemTime">
                                        00
                                    </p>
                                    <p className="pageBattleActiveItemCountdownItemText">
                                        seconds
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button className="mainGradientButton pageBattleActiveItemButton">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <div className="pageBattleLive">
                <p className="title2">Live battle view</p>

                <div className="pageBattleLiveContent">
                    <p className="pageBattleLiveTitle">
                        live battle ethereum arena{" "}
                    </p>

                    <div className="pageBattleLiveWrapper">
                        <div className="pageBattleLiveChartInner">
                            <div className="pageBattleLiveChartPair">
                                <div className="pageBattleLiveChartPairIcon">
                                    <Eth />
                                </div>

                                <p className="pageBattleLiveChartPairName">
                                    ETH<span>/</span>USD
                                </p>
                            </div>

                            <div
                                className="pageBattleChart"
                                ref={chartContainerRef}
                            ></div>

                            <div className="pageBattleLiveChartCountdown">
                                <div className="pageBattleLiveChartCountdownItem">
                                    <p className="pageBattleLiveChartCountdownItemTime">
                                        00
                                    </p>
                                    <p className="pageBattleLiveChartCountdownItemText">
                                        hours
                                    </p>
                                </div>
                                <p className="pageBattleLiveChartCountdownDots">
                                    :
                                </p>
                                <div className="pageBattleLiveChartCountdownItem">
                                    <p className="pageBattleLiveChartCountdownItemTime">
                                        00
                                    </p>
                                    <p className="pageBattleLiveChartCountdownItemText">
                                        minutes
                                    </p>
                                </div>
                                <p className="pageBattleLiveChartCountdownDots">
                                    :
                                </p>
                                <div className="pageBattleLiveChartCountdownItem">
                                    <p className="pageBattleLiveChartCountdownItemTime">
                                        00
                                    </p>
                                    <p className="pageBattleLiveChartCountdownItemText">
                                        seconds
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pageBattleLiveSidebar">
                            <div className="consoleTop">
                                <p className="title2 consoleTopTitle">
                                    Total Amount
                                </p>

                                <div className="consoleTopBalanceInner">
                                    <p className={"consoleTopBalanceTitle"}>
                                        Balance:
                                    </p>
                                    <p className="consoleTopBalance">$0</p>
                                </div>
                            </div>

                            <div className="consoleForm">
                                <div className="consoleFormContent">
                                    <div className="consoleFormBalance">
                                        <p
                                            className={
                                                "consoleFormBalanceValue"
                                            }
                                        >
                                            $144
                                        </p>

                                        <button
                                            className={"consoleFormBalanceMax"}
                                        >
                                            max
                                        </button>
                                    </div>

                                    <div className={"consoleFormSliderInner"}>
                                        <div
                                            className={
                                                "consoleFormSliderWrapper"
                                            }
                                        >
                                            <input
                                                type="range"
                                                className={"consoleFormSlider"}
                                                min={0}
                                                max={sliderMaxValue}
                                                value={sliderValue}
                                                onChange={(e) =>
                                                    setSliderValue(
                                                        +e.target.value,
                                                    )
                                                }
                                            />

                                            <div
                                                className={"sliderProgress"}
                                                style={{
                                                    width: `calc(${(sliderValue / sliderMaxValue) * 100}% - 4px)`,
                                                }}
                                            ></div>
                                        </div>

                                        <span className="decorWrapper">
                                            <span className="decorBig"></span>
                                            <span className="decorSmall"></span>
                                            <span className="decorSmall"></span>
                                            <span className="decorSmall"></span>
                                            <span className="decorSmall"></span>
                                            <span className="decorBig"></span>
                                            <span className="decorSmall"></span>
                                            <span className="decorSmall"></span>
                                            <span className="decorSmall"></span>
                                            <span className="decorSmall"></span>
                                            <span className="decorBig"></span>
                                            <span className="decorSmall"></span>
                                            <span className="decorSmall"></span>
                                            <span className="decorSmall"></span>
                                            <span className="decorSmall"></span>
                                            <span className="decorBig"></span>
                                            <span className="decorSmall"></span>
                                            <span className="decorSmall"></span>
                                            <span className="decorSmall"></span>
                                            <span className="decorSmall"></span>
                                            <span className="decorBig"></span>
                                            <span className="decorSmall"></span>
                                            <span className="decorSmall"></span>
                                            <span className="decorSmall"></span>
                                            <span className="decorSmall"></span>
                                            <span className="decorBig"></span>
                                            <span className="decorSmall"></span>
                                            <span className="decorSmall"></span>
                                            <span className="decorSmall"></span>
                                            <span className="decorSmall"></span>
                                            <span className="decorBig"></span>
                                        </span>
                                    </div>

                                    <div className="consoleFormMaxBalance">
                                        <p>Max. Buy</p>
                                        <p>$0</p>
                                    </div>

                                    <div className="consoleFormBets">
                                        <button
                                            className={cn("consoleFormBet", {
                                                ["active"]: bet === 10,
                                            })}
                                            onClick={() => setBet(10)}
                                        >
                                            10$
                                        </button>
                                        <button
                                            className={cn("consoleFormBet", {
                                                ["active"]: bet === 50,
                                            })}
                                            onClick={() => setBet(50)}
                                        >
                                            50$
                                        </button>
                                        <button
                                            className={cn("consoleFormBet", {
                                                ["active"]: bet === 100,
                                            })}
                                            onClick={() => setBet(100)}
                                        >
                                            100$
                                        </button>
                                        <button
                                            className={cn("consoleFormBet", {
                                                ["active"]: bet === 200,
                                            })}
                                            onClick={() => setBet(200)}
                                        >
                                            200$
                                        </button>
                                        <button
                                            className={cn("consoleFormBet", {
                                                ["active"]: bet === 500,
                                            })}
                                            onClick={() => setBet(500)}
                                        >
                                            500$
                                        </button>
                                        <button
                                            className={cn("consoleFormBet", {
                                                ["active"]: bet === 1000,
                                            })}
                                            onClick={() => setBet(1000)}
                                        >
                                            1000$
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="pageBattleBuyButtons">
                                <button className="mainGradientButton pageBattleBuy">
                                    Buy
                                </button>

                                <button className="pageBattleBuy red">
                                    Sell
                                </button>
                            </div>

                            <div className="pageBattleSidebarState">
                                <p className="pageBattleSidebarStateTitle">
                                    Your battle states
                                </p>

                                <div className="pageBattleSidebarStateItems">
                                    <p className="pageBattleSidebarStateItem">
                                        Position{" "}
                                        <span className="yellow">#2 of 4</span>
                                    </p>

                                    <p className="pageBattleSidebarStateItem">
                                        Deposit{" "}
                                        <span className="yellow">$100</span>
                                    </p>

                                    <p className="pageBattleSidebarStateItem">
                                        Trades <span>1</span>
                                    </p>

                                    <p className="pageBattleSidebarStateItem">
                                        Your Pnl{" "}
                                        <span className="green">+$643.11</span>
                                    </p>

                                    <p className="pageBattleSidebarStateItem">
                                        To 1st place{" "}
                                        <span className="green">+$643</span>
                                    </p>
                                </div>
                            </div>

                            <button className="pageBattleLeave">
                                Leave battle
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pageBattleHistory">
                <p className="title2">History of battles</p>

                <Swiper
                    pagination={{
                        type: "progressbar",
                    }}
                    spaceBetween={16}
                    slidesPerView={8}
                    modules={[Pagination, Navigation]}
                    className="pageBattleSlider"
                    onSwiper={(swiper) => {
                        swiperInstance.current = swiper;
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        600: {
                            slidesPerView: 3,
                            spaceBetween: 16,
                        },
                        998: {
                            slidesPerView: 4,
                            spaceBetween: 16,
                        },
                        1150: {
                            slidesPerView: 5,
                            spaceBetween: 16,
                        },
                        1350: {
                            slidesPerView: 6,
                            spaceBetween: 16,
                        },
                        1400: {
                            slidesPerView: 7,
                            spaceBetween: 16,
                        },
                        1500: {
                            slidesPerView: 8,
                            spaceBetween: 16,
                        },
                    }}
                >
                    <SwiperSlide className="pageBattleSlide active">
                        <p className="pageBattleSlideNum">1</p>

                        <div className="pageBattleSlideUser">
                            <UserAvatar
                                image="/img/token1.png"
                                width={45}
                                height={45}
                            />

                            <p className="pageBattleSlideUserText">User</p>
                            <p className="pageBattleSlideUserName">
                                User_9185151
                            </p>
                        </div>

                        <div className="pageBattleSlideInfo">
                            <p className="pageBattleSlideInfoText">
                                Real-time PnL
                            </p>

                            <p className="pageBattleSlideInfoValue green">
                                +$10,759.46
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="pageBattleSlide">
                        <p className="pageBattleSlideNum">2</p>

                        <div className="pageBattleSlideUser">
                            <UserAvatar
                                image="/img/token1.png"
                                width={45}
                                height={45}
                            />

                            <p className="pageBattleSlideUserText">User</p>
                            <p className="pageBattleSlideUserName">
                                User_9185151
                            </p>
                        </div>

                        <div className="pageBattleSlideInfo">
                            <p className="pageBattleSlideInfoText">
                                Real-time PnL
                            </p>

                            <p className="pageBattleSlideInfoValue green">
                                +$10,759.46
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="pageBattleSlide">
                        <p className="pageBattleSlideNum">3</p>

                        <div className="pageBattleSlideUser">
                            <UserAvatar
                                image="/img/token1.png"
                                width={45}
                                height={45}
                            />

                            <p className="pageBattleSlideUserText">User</p>
                            <p className="pageBattleSlideUserName">
                                User_9185151
                            </p>
                        </div>

                        <div className="pageBattleSlideInfo">
                            <p className="pageBattleSlideInfoText">
                                Real-time PnL
                            </p>

                            <p className="pageBattleSlideInfoValue green">
                                +$10,759.46
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="pageBattleSlide">
                        <p className="pageBattleSlideNum">4</p>

                        <div className="pageBattleSlideUser">
                            <UserAvatar
                                image="/img/token1.png"
                                width={45}
                                height={45}
                            />

                            <p className="pageBattleSlideUserText">User</p>
                            <p className="pageBattleSlideUserName">
                                User_9185151
                            </p>
                        </div>

                        <div className="pageBattleSlideInfo">
                            <p className="pageBattleSlideInfoText">
                                Real-time PnL
                            </p>

                            <p className="pageBattleSlideInfoValue green">
                                +$10,759.46
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="pageBattleSlide">
                        <p className="pageBattleSlideNum">5</p>

                        <div className="pageBattleSlideUser">
                            <UserAvatar
                                image="/img/token1.png"
                                width={45}
                                height={45}
                            />

                            <p className="pageBattleSlideUserText">User</p>
                            <p className="pageBattleSlideUserName">
                                User_9185151
                            </p>
                        </div>

                        <div className="pageBattleSlideInfo">
                            <p className="pageBattleSlideInfoText">
                                Real-time PnL
                            </p>

                            <p className="pageBattleSlideInfoValue green">
                                +$10,759.46
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="pageBattleSlide">
                        <p className="pageBattleSlideNum">6</p>

                        <div className="pageBattleSlideUser">
                            <UserAvatar
                                image="/img/token1.png"
                                width={45}
                                height={45}
                            />

                            <p className="pageBattleSlideUserText">User</p>
                            <p className="pageBattleSlideUserName">
                                User_9185151
                            </p>
                        </div>

                        <div className="pageBattleSlideInfo">
                            <p className="pageBattleSlideInfoText">
                                Real-time PnL
                            </p>

                            <p className="pageBattleSlideInfoValue green">
                                +$10,759.46
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="pageBattleSlide">
                        <p className="pageBattleSlideNum">7</p>

                        <div className="pageBattleSlideUser">
                            <UserAvatar
                                image="/img/token1.png"
                                width={45}
                                height={45}
                            />

                            <p className="pageBattleSlideUserText">User</p>
                            <p className="pageBattleSlideUserName">
                                User_9185151
                            </p>
                        </div>

                        <div className="pageBattleSlideInfo">
                            <p className="pageBattleSlideInfoText">
                                Real-time PnL
                            </p>

                            <p className="pageBattleSlideInfoValue green">
                                +$10,759.46
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="pageBattleSlide">
                        <p className="pageBattleSlideNum">8</p>

                        <div className="pageBattleSlideUser">
                            <UserAvatar
                                image="/img/token1.png"
                                width={45}
                                height={45}
                            />

                            <p className="pageBattleSlideUserText">User</p>
                            <p className="pageBattleSlideUserName">
                                User_9185151
                            </p>
                        </div>

                        <div className="pageBattleSlideInfo">
                            <p className="pageBattleSlideInfoText">
                                Real-time PnL
                            </p>

                            <p className="pageBattleSlideInfoValue green">
                                +$10,759.46
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="pageBattleSlide">
                        <p className="pageBattleSlideNum">9</p>

                        <div className="pageBattleSlideUser">
                            <UserAvatar
                                image="/img/token1.png"
                                width={45}
                                height={45}
                            />

                            <p className="pageBattleSlideUserText">User</p>
                            <p className="pageBattleSlideUserName">
                                User_9185151
                            </p>
                        </div>

                        <div className="pageBattleSlideInfo">
                            <p className="pageBattleSlideInfoText">
                                Real-time PnL
                            </p>

                            <p className="pageBattleSlideInfoValue green">
                                +$10,759.46
                            </p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="pageBattleSlide">
                        <p className="pageBattleSlideNum">10</p>

                        <div className="pageBattleSlideUser">
                            <UserAvatar
                                image="/img/token1.png"
                                width={45}
                                height={45}
                            />

                            <p className="pageBattleSlideUserText">User</p>
                            <p className="pageBattleSlideUserName">
                                User_9185151
                            </p>
                        </div>

                        <div className="pageBattleSlideInfo">
                            <p className="pageBattleSlideInfoText">
                                Real-time PnL
                            </p>

                            <p className="pageBattleSlideInfoValue green">
                                +$10,759.46
                            </p>
                        </div>
                    </SwiperSlide>

                    <div className="pageBattleSliderNav">
                        <button
                            className="pageBattleSliderArrow"
                            onClick={() => swiperInstance.current?.slidePrev()}
                        >
                            <ArrowLeft />
                        </button>

                        <button
                            className="pageBattleSliderArrow"
                            onClick={() => swiperInstance.current?.slideNext()}
                        >
                            <ArrowRight />
                        </button>
                    </div>
                </Swiper>
            </div>
        </>
    );
};

export default BattlePageById;
