"use client";

import React from "react";
import cn from "classnames";
import Link from "next/link";
import Image from "next/image";
import { CandlestickSeries, createChart, ColorType } from "lightweight-charts";

import "./index.scss";
import "@/shared/styles/base.scss";

import {
    ArrowBack,
    ArrowDown,
    ArrowFall,
    ArrowNext,
    ArrowRight,
    Brush,
    Calculator,
    Candles,
    Chart2,
    Close2,
    Copy,
    Eye,
    Filter,
    Filter2,
    Function,
    Hashlock,
    Layer,
    Lock,
    Magnet,
    PenLock,
    PlusCircle,
    PlusMagnifier,
    Remove,
    Ruler,
    Settings,
    Share,
    Smile,
    Target,
    Text,
    Warn,
    Warn2,
} from "@/shared/icons";
import { initialDataChart } from "./data";
import { useSidebarContext } from "@/shared/context/SidebarProvider";
import { Modal } from "@/shared/ui/Modal";

const sliderMaxValue = 144;

const TerminalPage = () => {
    const [trading, setTrading] = React.useState<"spot" | "futures">("spot");
    const [sliderValue, setSliderValue] = React.useState(0);
    const [bet, setBet] = React.useState(0);
    const [symbolOnly, setSymbolOnly] = React.useState(false);
    const [positions, setPositions] = React.useState<
        "my" | "closed" | "trades" | "public"
    >("my");

    const [hashModal, setHashModal] = React.useState(false);

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
            <div
                className={cn("terminal", {
                    ["sidebarOpen"]: sidebarIsOpen,
                })}
            >
                <div className="container">
                    <div className="terminalInner">
                        <div className="terminalContent">
                            <div className="terminalTokenInfo">
                                <div className="terminalToken">
                                    <div className="terminalTokenImgInner">
                                        <div className="terminalTokenImg">
                                            <Image
                                                src="/img/token1.png"
                                                alt="Token"
                                                fill
                                            />
                                        </div>
                                    </div>

                                    <p className="terminalTokenPrice">984.32</p>

                                    <p
                                        className={cn(
                                            "terminalTokenPercent",
                                            "negative",
                                        )}
                                    >
                                        <ArrowFall />
                                        44.25%
                                    </p>

                                    <p className="terminalTokenStatus">
                                        Active
                                    </p>

                                    <div className="devider"></div>

                                    <button className="terminalTokenMore">
                                        Glow
                                        <span>
                                            <ArrowDown />
                                        </span>
                                    </button>
                                </div>

                                <div className="terminalTokenActionsWrapper">
                                    <div className="terminalTokenActionsUser">
                                        <p
                                            className={
                                                "terminalTokenActionsUserText"
                                            }
                                        >
                                            Created: <span>Just now</span>
                                        </p>

                                        <div
                                            className={
                                                "terminalTokenActionsUserImg"
                                            }
                                        >
                                            <Image
                                                src="/img/token1.png"
                                                alt="token"
                                                fill
                                            />
                                        </div>

                                        <p
                                            className={
                                                "terminalTokenActionsUserText"
                                            }
                                        >
                                            by:{" "}
                                            <Link href="/">user_e3718b1b</Link>
                                        </p>
                                    </div>

                                    <button className="terminalTokenButton">
                                        <Share />
                                        Share
                                    </button>

                                    <button className="terminalTokenButtonSquare">
                                        <Settings />
                                    </button>
                                </div>
                            </div>

                            <div className="terminalTokensInner">
                                <div className="terminalTokens">
                                    <div className="terminalTokenExtra">
                                        <span
                                            className={cn(
                                                "terminalTokenIndicator",
                                                "green",
                                            )}
                                        ></span>
                                        Datas26
                                        <button className="terminalTokenClose">
                                            <Close2 />
                                        </button>
                                    </div>

                                    <div className="terminalTokenExtra">
                                        <span
                                            className={cn(
                                                "terminalTokenIndicator",
                                                "red",
                                            )}
                                        ></span>
                                        CANX30
                                        <button className="terminalTokenClose">
                                            <Close2 />
                                        </button>
                                    </div>
                                </div>

                                <div className="terminalTokensCloseInner">
                                    <button className="terminalTokensClose">
                                        Close All
                                    </button>
                                </div>
                            </div>

                            <div className="terminalInfoBlock">
                                <p className="terminalInfoText">
                                    This chart runs at 1440x real-market speed
                                    (24h → 1min)Trade at your own risk —
                                    volatility ahead
                                </p>

                                <button
                                    className="terminalInfoHashlock"
                                    onClick={() => setHashModal(true)}
                                >
                                    <span>
                                        <Hashlock />
                                    </span>

                                    <span className="terminalInfoHashlockText">
                                        Provably Fair Hashlock Audited
                                    </span>
                                </button>
                            </div>

                            <div className="terminalChartInner">
                                <div className="terminalChartActions">
                                    <button className="terminalChartActionSquare">
                                        <PlusCircle />
                                    </button>

                                    <button className="terminalChartActionSquare">
                                        1 m
                                    </button>

                                    <button className="terminalChartActionSquare">
                                        <Candles />
                                    </button>

                                    <button className="terminalChartAction">
                                        <Function />
                                        indicators
                                    </button>

                                    <button className="terminalChartActionSquare">
                                        <ArrowBack />
                                    </button>

                                    <button className="terminalChartActionSquare">
                                        <ArrowNext />
                                    </button>
                                </div>

                                <div
                                    className="terminalChart"
                                    ref={chartContainerRef}
                                ></div>

                                <div className="terminalChartTools">
                                    <button className="terminalChartTool">
                                        <Target />
                                    </button>

                                    <button className="terminalChartTool">
                                        <Filter />
                                    </button>

                                    <button className="terminalChartTool">
                                        <Chart2 />
                                    </button>

                                    <button className="terminalChartTool">
                                        <Filter2 />
                                    </button>

                                    <button className="terminalChartTool">
                                        <Brush />
                                    </button>

                                    <button className="terminalChartTool">
                                        <Text />
                                    </button>

                                    <button className="terminalChartTool">
                                        <Smile />
                                    </button>

                                    <button className="terminalChartTool">
                                        <Ruler />
                                    </button>

                                    <button className="terminalChartTool">
                                        <PlusMagnifier />
                                    </button>

                                    <button className="terminalChartTool">
                                        <Magnet />
                                    </button>

                                    <button
                                        className={cn(
                                            "terminalChartTool",
                                            "big",
                                        )}
                                    >
                                        <PenLock />
                                    </button>

                                    <button className="terminalChartTool">
                                        <Lock />
                                    </button>

                                    <button className="terminalChartTool">
                                        <Eye />
                                    </button>

                                    <button className="terminalChartTool">
                                        <Remove />
                                    </button>

                                    <button className="terminalChartTool">
                                        <Layer />
                                    </button>
                                </div>
                            </div>

                            <div className="terminalPositions">
                                <div className="terminalPositionsFilter">
                                    <div className="terminalPositionsTabs">
                                        <button
                                            className={cn(
                                                "terminalPositionsTab",
                                                {
                                                    ["active"]:
                                                        positions === "my",
                                                },
                                            )}
                                            onClick={() => setPositions("my")}
                                        >
                                            My positions
                                        </button>

                                        <button
                                            className={cn(
                                                "terminalPositionsTab",
                                                {
                                                    ["active"]:
                                                        positions === "closed",
                                                },
                                            )}
                                            onClick={() =>
                                                setPositions("closed")
                                            }
                                        >
                                            Closed positions
                                        </button>

                                        <button
                                            className={cn(
                                                "terminalPositionsTab",
                                                {
                                                    ["active"]:
                                                        positions === "trades",
                                                },
                                            )}
                                            onClick={() =>
                                                setPositions("trades")
                                            }
                                        >
                                            Trades
                                        </button>

                                        <button
                                            className={cn(
                                                "terminalPositionsTab",
                                                {
                                                    ["active"]:
                                                        positions === "public",
                                                },
                                            )}
                                            onClick={() =>
                                                setPositions("public")
                                            }
                                        >
                                            Public feed
                                        </button>
                                    </div>

                                    <div
                                        className={cn(
                                            "terminalPositionsCheckbox",
                                            {
                                                ["active"]: symbolOnly,
                                            },
                                        )}
                                        onClick={() =>
                                            setSymbolOnly((prev) => !prev)
                                        }
                                    >
                                        <div
                                            className={
                                                "terminalPositionsCheckboxValue"
                                            }
                                        >
                                            <div
                                                className={
                                                    "terminalPositionsCheckboxCircle"
                                                }
                                            ></div>
                                        </div>

                                        <p
                                            className={
                                                "terminalPositionsCheckboxLabel"
                                            }
                                        >
                                            Current Symbol Only
                                        </p>
                                    </div>
                                </div>

                                <div className="terminalPositionEmpty">
                                    <Warn2 />
                                    <p className={"terminalPositionEmptyTitle"}>
                                        No open trades found
                                    </p>
                                    <p className="terminalPositionEmptyText">
                                        No open positions
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="terminalSidebar">
                            <div className="terminalSidebarStats">
                                <div className="terminalSidebarStat">
                                    <p className="terminalSidebarStatTitle">
                                        Volume
                                    </p>
                                    <p className="terminalSidebarStatValue">
                                        $20.0
                                    </p>
                                </div>

                                <div className="terminalSidebarStat">
                                    <p className="terminalSidebarStatTitle">
                                        Buys
                                    </p>
                                    <p className="terminalSidebarStatValue">
                                        1
                                    </p>
                                </div>

                                <div className="terminalSidebarStat">
                                    <p className="terminalSidebarStatTitle">
                                        Sells
                                    </p>
                                    <p
                                        className={cn(
                                            "terminalSidebarStatValue",
                                            "red",
                                        )}
                                    >
                                        0
                                    </p>
                                </div>

                                <div className="terminalSidebarStat">
                                    <p className="terminalSidebarStatTitle">
                                        Traders
                                    </p>
                                    <p className="terminalSidebarStatValue">
                                        1
                                    </p>
                                </div>
                            </div>

                            <div className="terminalSidebarTabs">
                                <button
                                    className={cn("terminalSidebarTab", {
                                        ["active"]: trading === "spot",
                                    })}
                                    onClick={() => setTrading("spot")}
                                >
                                    Spot
                                </button>

                                <button
                                    className={cn("terminalSidebarTab", {
                                        ["active"]: trading === "futures",
                                    })}
                                    onClick={() => setTrading("futures")}
                                >
                                    Futures
                                </button>
                            </div>

                            <div className="terminalSidebarConsole">
                                <div className="consoleTop">
                                    <p className="consoleTopTitle">
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
                                                144$
                                            </p>

                                            <button
                                                className={
                                                    "consoleFormBalanceMax"
                                                }
                                            >
                                                max
                                            </button>
                                        </div>

                                        <div
                                            className={"consoleFormSliderInner"}
                                        >
                                            <div
                                                className={
                                                    "consoleFormSliderWrapper"
                                                }
                                            >
                                                <input
                                                    type="range"
                                                    className={
                                                        "consoleFormSlider"
                                                    }
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
                                                className={cn(
                                                    "consoleFormBet",
                                                    {
                                                        ["active"]: bet === 10,
                                                    },
                                                )}
                                                onClick={() => setBet(10)}
                                            >
                                                10$
                                            </button>
                                            <button
                                                className={cn(
                                                    "consoleFormBet",
                                                    {
                                                        ["active"]: bet === 50,
                                                    },
                                                )}
                                                onClick={() => setBet(50)}
                                            >
                                                50$
                                            </button>
                                            <button
                                                className={cn(
                                                    "consoleFormBet",
                                                    {
                                                        ["active"]: bet === 100,
                                                    },
                                                )}
                                                onClick={() => setBet(100)}
                                            >
                                                100$
                                            </button>
                                            <button
                                                className={cn(
                                                    "consoleFormBet",
                                                    {
                                                        ["active"]: bet === 200,
                                                    },
                                                )}
                                                onClick={() => setBet(200)}
                                            >
                                                200$
                                            </button>
                                            <button
                                                className={cn(
                                                    "consoleFormBet",
                                                    {
                                                        ["active"]: bet === 500,
                                                    },
                                                )}
                                                onClick={() => setBet(500)}
                                            >
                                                500$
                                            </button>
                                            <button
                                                className={cn(
                                                    "consoleFormBet",
                                                    {
                                                        ["active"]:
                                                            bet === 1000,
                                                    },
                                                )}
                                                onClick={() => setBet(1000)}
                                            >
                                                1000$
                                            </button>
                                        </div>
                                    </div>

                                    <div className="consoleFormInputs">
                                        <div
                                            className={
                                                "consoleFormInputWrapper"
                                            }
                                        >
                                            <p
                                                className={
                                                    "consoleFormInputTitle"
                                                }
                                            >
                                                Leverage
                                            </p>

                                            <div
                                                className={
                                                    "consoleFormInputInner"
                                                }
                                            >
                                                <input
                                                    type="number"
                                                    inputMode="decimal"
                                                    className={
                                                        "consoleFormInput"
                                                    }
                                                />
                                                <p
                                                    className={
                                                        "consoleFormInputX"
                                                    }
                                                >
                                                    x
                                                </p>
                                            </div>
                                        </div>

                                        <div
                                            className={
                                                "consoleFormInputWrapper"
                                            }
                                        >
                                            <p
                                                className={
                                                    "consoleFormInputTitle"
                                                }
                                            >
                                                Liq. price
                                            </p>

                                            <div
                                                className={cn(
                                                    "consoleFormInputInner",
                                                    "liqInput",
                                                )}
                                            >
                                                <input
                                                    type="number"
                                                    inputMode="decimal"
                                                    className={
                                                        "consoleFormInput"
                                                    }
                                                    disabled
                                                />

                                                <p
                                                    className={
                                                        "consoleFormInputValue"
                                                    }
                                                >
                                                    <span>-</span> /{" "}
                                                    <span>-</span>
                                                </p>

                                                <button className="liqInputCalc">
                                                    <Calculator />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="consoleButtons">
                                    <button className="consoleButton">
                                        Long
                                    </button>
                                    <button
                                        className={cn("consoleButton", "red")}
                                    >
                                        Short
                                    </button>
                                </div>
                            </div>

                            <div className="terminalSidebarCountdown">
                                <div
                                    className={
                                        "terminalSidebarCountdownTitleInner"
                                    }
                                >
                                    <p
                                        className={
                                            "terminalSidebarCountdownTitle"
                                        }
                                    >
                                        1-minute duration
                                    </p>
                                    <p
                                        className={
                                            "terminalSidebarCountdownMode"
                                        }
                                    >
                                        Mayhem Mode
                                    </p>
                                </div>

                                <p
                                    className={
                                        "terminalSidebarCountdownSubtitle"
                                    }
                                >
                                    Active for 1 min — trade before expiry
                                </p>

                                <div
                                    className={
                                        "terminalSidebarCountdownContent"
                                    }
                                >
                                    <div
                                        className={
                                            "terminalSidebarCountdownItem"
                                        }
                                    >
                                        <p
                                            className={
                                                "terminalSidebarCountdownNumber"
                                            }
                                        >
                                            00
                                        </p>
                                        <p
                                            className={
                                                "terminalSidebarCountdownItemTitle"
                                            }
                                        >
                                            hours
                                        </p>
                                    </div>

                                    <p
                                        className={
                                            "terminalSidebarCountdownDots"
                                        }
                                    >
                                        :
                                    </p>

                                    <div
                                        className={
                                            "terminalSidebarCountdownItem"
                                        }
                                    >
                                        <p
                                            className={
                                                "terminalSidebarCountdownNumber"
                                            }
                                        >
                                            00
                                        </p>
                                        <p
                                            className={
                                                "terminalSidebarCountdownItemTitle"
                                            }
                                        >
                                            minutes
                                        </p>
                                    </div>

                                    <p
                                        className={
                                            "terminalSidebarCountdownDots"
                                        }
                                    >
                                        :
                                    </p>

                                    <div
                                        className={
                                            "terminalSidebarCountdownItem"
                                        }
                                    >
                                        <p
                                            className={
                                                "terminalSidebarCountdownNumber"
                                            }
                                        >
                                            00
                                        </p>
                                        <p
                                            className={
                                                "terminalSidebarCountdownItemTitle"
                                            }
                                        >
                                            seconds
                                        </p>
                                    </div>
                                </div>

                                <p className="terminalSidebarCountdownText">
                                    When time expires, the token closes and all
                                    positions settle at market price
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal value={hashModal} setValue={setHashModal} size="small">
                <div className="terminalInfoHashlock">
                    <span>
                        <Hashlock />
                    </span>

                    <span className="terminalInfoHashlockText">
                        Provably Fair Hashlock Audited
                    </span>
                </div>

                <div className="hashModalTextBlock">
                    <p className="hashModalTextBlockTitle">
                        Provably Fair
                    </p>

                    <p className="hashModalTextBlockText">
                        The chart is generated under a provably fair scheme. Once created, price ticks cannot be changed
                    </p>

                    <Link href="/provably-fair" className="hashModalTextBlockLink">
                        Learn More

                        <ArrowRight />
                    </Link>
                </div>

                <div className="hashModalToken">
                    <div className="hashModalTokenContent">
                        <div className="hashModalTokenImg">
                            <Image src="/img/token1.png" alt="token" fill />
                        </div>

                        <div className="hashModalTokenInfo">
                            <p className="hashModalTokenName">
                                NEBND
                            </p>

                            <p className="hashModalTokenMode">
                                Mayhem Mode
                            </p>
                        </div>
                    </div>

                    <div className="hashModalTokenHash">
                        <div className="hashModalTokenHashContent">
                            <p className="hashModalTokenHashTitle">Hash:</p>

                            <button className="hashModalTokenHashValue">
                                <span>
                                    0x3546b26ff4fb18bd1592edbf1c0153b403c9afe54a1e3a25d4841acbe3a040e1
                                </span>

                                <Copy />
                            </button>
                        </div>

                        <div className="hashModalAlert">
                            <Warn />

                            <p>Full verification is available after the token expires</p>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default TerminalPage;
