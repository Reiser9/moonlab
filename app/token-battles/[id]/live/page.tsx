"use client";

import React from "react";
import Image from "next/image";
import cn from "classnames";
import { CandlestickSeries, createChart, ColorType } from "lightweight-charts";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../index.scss";

import { useSidebarContext } from "@/shared/context/SidebarProvider";
import { initialDataChart } from "../../../terminal/data";
import { Eth, Smile2 } from "@/shared/icons";

const sliderMaxValue = 144;

const BattlePageById = () => {
    const [sliderValue, setSliderValue] = React.useState(0);
    const [bet, setBet] = React.useState(0);
    const [historyTab, setHistoryTab] = React.useState<
        "leaderboard" | "live" | "event"
    >("leaderboard");

    const { sidebarIsOpen } = useSidebarContext();

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

                        <div className="pageBattleActiveItemTimer">
                            <p className="pageBattleActiveItemTimerText">
                                Countdown
                            </p>

                            <p className="pageBattleActiveItemTimerValue yellow">
                                3:43
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pageBattleLive">
                <div className="pageBattleLiveWrap">
                    <div className="pageBattleLiveChartWrapper">
                        <p className="title2">Live battle view</p>

                        <div className="pageBattleLiveChartContent">
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

                        <p className="title2">History of battles</p>

                        <div className="historyTabs">
                            <button
                                className={cn("historyTab", {
                                    ["active"]: historyTab === "leaderboard",
                                })}
                                onClick={() => setHistoryTab("leaderboard")}
                            >
                                Leaderboard
                            </button>
                            <button
                                className={cn("historyTab", {
                                    ["active"]: historyTab === "live",
                                })}
                                onClick={() => setHistoryTab("live")}
                            >
                                Live trades
                            </button>
                            <button
                                className={cn("historyTab", {
                                    ["active"]: historyTab === "event",
                                })}
                                onClick={() => setHistoryTab("event")}
                            >
                                Event log
                            </button>
                        </div>

                        <div className="historyItems">
                            {historyTab === "leaderboard" && (
                                <>
                                    <div className="historyItem">
                                        <div className="battleResultStandUser">
                                            <div className="battleResultStandUserImage">
                                                <Image
                                                    src="/img/token1.png"
                                                    alt="image"
                                                    fill
                                                />
                                            </div>
                                            <p className="battleResultStandUserName">
                                                PEPE Battle
                                            </p>
                                            <div className="battleResultStandTags">
                                                <p className="battleResultStandTag">
                                                    4 players
                                                </p>
                                                <p className="battleResultStandTag">
                                                    25m ago
                                                </p>
                                            </div>
                                        </div>

                                        <p className="battleResultStandPlace">
                                            #1
                                        </p>

                                        <div className="battleResultStandInfo">
                                            <p className="battleResultStandInfoProfit green">
                                                +$847.32
                                            </p>
                                            <button className="outlinedButton battleResultStandButton">
                                                Follow
                                            </button>
                                        </div>
                                    </div>

                                    <div className="historyItem">
                                        <div className="battleResultStandUser">
                                            <div className="battleResultStandUserImage">
                                                <Image
                                                    src="/img/token1.png"
                                                    alt="image"
                                                    fill
                                                />
                                            </div>
                                            <p className="battleResultStandUserName">
                                                PEPE Battle
                                            </p>
                                            <div className="battleResultStandTags">
                                                <p className="battleResultStandTag">
                                                    4 players
                                                </p>
                                                <p className="battleResultStandTag">
                                                    25m ago
                                                </p>
                                            </div>
                                        </div>

                                        <p className="battleResultStandPlace">
                                            #1
                                        </p>

                                        <div className="battleResultStandInfo">
                                            <p className="battleResultStandInfoProfit green">
                                                +$847.32
                                            </p>
                                            <button className="outlinedButton battleResultStandButton">
                                                Follow
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}

                            {historyTab === "live" && (
                                <>
                                    <div className="historyItem">
                                        <div className="battleResultStandUser">
                                            <div className="battleResultStandUserImage">
                                                <Image
                                                    src="/img/token1.png"
                                                    alt="image"
                                                    fill
                                                />
                                            </div>
                                            <p className="battleResultStandUserName">
                                                PEPE Battle
                                            </p>
                                        </div>

                                        <div className="battleResultTextBlock">
                                            <p className="battleResultTitle">
                                                Side
                                            </p>

                                            <p className="battleResultValue green">
                                                Buy
                                            </p>
                                        </div>

                                        <div className="battleResultTextBlock">
                                            <p className="battleResultTitle">
                                                Amount
                                            </p>

                                            <p className="battleResultValue">
                                                45$
                                            </p>
                                        </div>

                                        <div className="battleResultTextBlock">
                                            <p className="battleResultTitle">
                                                Price
                                            </p>

                                            <p className="battleResultValue green">
                                                +$847.32
                                            </p>
                                        </div>

                                        <div className="battleResultStandTags">
                                            <p className="battleResultStandTag">
                                                4 players
                                            </p>
                                            <p className="battleResultStandTag">
                                                25m ago
                                            </p>
                                        </div> 
                                    </div>

                                    <div className="historyItem">
                                        <div className="battleResultStandUser">
                                            <div className="battleResultStandUserImage">
                                                <Image
                                                    src="/img/token1.png"
                                                    alt="image"
                                                    fill
                                                />
                                            </div>
                                            <p className="battleResultStandUserName">
                                                PEPE Battle
                                            </p>
                                        </div>

                                        <div className="battleResultTextBlock">
                                            <p className="battleResultTitle">
                                                Side
                                            </p>

                                            <p className="battleResultValue red">
                                                Sell
                                            </p>
                                        </div>

                                        <div className="battleResultTextBlock">
                                            <p className="battleResultTitle">
                                                Amount
                                            </p>

                                            <p className="battleResultValue">
                                                45$
                                            </p>
                                        </div>

                                        <div className="battleResultTextBlock">
                                            <p className="battleResultTitle">
                                                Price
                                            </p>

                                            <p className="battleResultValue green">
                                                +$847.32
                                            </p>
                                        </div>

                                        <div className="battleResultStandTags">
                                            <p className="battleResultStandTag">
                                                4 players
                                            </p>
                                            <p className="battleResultStandTag">
                                                25m ago
                                            </p>
                                        </div> 
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    
                    <div className="pageBattleLiveSidebarInner">
                        <div className="pageBattleLiveSidebarTitleInner">
                            <p className="title2">Trade</p>

                            <p className="pageBattleLiveSidebarBalance">
                                Balance
                                <span className="yellow">43.43$</span>
                            </p>
                        </div>

                        <div className="pageBattleLiveSidebarValue">
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
                                        <p className={"consoleFormBalanceValue"}>
                                            144$
                                        </p>

                                        <button className={"consoleFormBalanceMax"}>
                                            max
                                        </button>
                                    </div>

                                    <div className={"consoleFormSliderInner"}>
                                        <div className={"consoleFormSliderWrapper"}>
                                            <input
                                                type="range"
                                                className={"consoleFormSlider"}
                                                min={0}
                                                max={sliderMaxValue}
                                                value={sliderValue}
                                                onChange={(e) =>
                                                    setSliderValue(+e.target.value)
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

                            <button className="mainGradientButton pageBattleBuy">
                                Buy
                            </button>
                        </div>

                        <p className="title2">Your battle stats</p>

                        <div className="battleStats">
                            <div className="battleStatItem">
                                <p className="battleStatItemTitle">
                                    Position
                                </p>

                                <p className="battleStatItemText green">
                                    #2 of 4
                                </p>
                            </div>

                            <div className="battleStatItem">
                                <p className="battleStatItemTitle">
                                    Your Pnl
                                </p>

                                <p className="battleStatItemText green">
                                    +643.11$
                                </p>
                            </div>

                            <div className="battleStatItem">
                                <p className="battleStatItemTitle">
                                    Win probability
                                </p>

                                <p className="battleStatItemText green">
                                    1
                                </p>
                            </div>

                            <div className="battleStatItem">
                                <p className="battleStatItemTitle">
                                    Exposure
                                </p>

                                <p className="battleStatItemText green">
                                    321$
                                </p>
                            </div>

                            <div className="battleStatItem">
                                <p className="battleStatItemTitle">
                                    Trades
                                </p>

                                <p className="battleStatItemText yellow">
                                    100$
                                </p>
                            </div>

                            <div className="battleStatItem">
                                <p className="battleStatItemTitle">
                                    T 1st plase
                                </p>

                                <p className="battleStatItemText green">
                                    +643.$
                                </p>
                            </div>
                        </div>

                        <p className="title2">Spectator chat</p>

                        <div className="battleChat">
                            <div className="battleChatContent">
                                <div className="battleChatItem">
                                    <p className="battleChatItemText">
                                        <span className="green">Spvgtrwerw:</span> Snoopo is crushing it
                                    </p>
                                </div>

                                <div className="battleChatItem">
                                    <p className="battleChatItemText">
                                        <span className="yellow">Spvgtrwerw:</span> Snoopo is crushing it
                                    </p>
                                </div>

                                <div className="battleChatItem">
                                    <p className="battleChatItemText">
                                        <span className="red">Spvgtrwerw:</span> Snoopo is crushing it
                                    </p>
                                </div>

                                <div className="battleChatItem">
                                    <p className="battleChatItemText">
                                        <span className="purple">Spvgtrwerw:</span> Snoopo is crushing it
                                    </p>
                                </div>
                            </div>

                            <div className="battleChatSendInner">
                                <input placeholder="Chat" className="battleChatSendInput" />
                                <button className="battleChatSendButton">
                                    Send
                                </button>
                            </div>

                            <div className="battleChatSmiles">
                                <button className="battleChatSmile">
                                    <Smile2 />
                                </button>

                                <button className="battleChatSmile">
                                    <Smile2 />
                                </button>

                                <button className="battleChatSmile">
                                    <Smile2 />
                                </button>

                                <button className="battleChatSmile">
                                    <Smile2 />
                                </button>

                                <button className="battleChatSmile">
                                    <Smile2 />
                                </button>

                                <button className="battleChatSmile">
                                    <Smile2 />
                                </button>

                                <button className="battleChatSmile">
                                    <Smile2 />
                                </button>

                                <button className="battleChatSmile">
                                    <Smile2 />
                                </button>
                            </div>
                        </div>

                        <button className="pageBattleLeave">
                            Leave battle
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BattlePageById;
