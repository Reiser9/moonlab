"use client";

import React from "react";
import cn from "classnames";
import Link from "next/link";
import Image from "next/image";
import { CandlestickSeries, createChart, ColorType } from "lightweight-charts";

import styles from "./index.module.scss";
import base from "@/shared/styles/base.module.scss";

import {
    ArrowBack,
    ArrowDown,
    ArrowFall,
    ArrowNext,
    Brush,
    Calculator,
    Candles,
    Chart2,
    Close2,
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
    Warn2,
} from "@/shared/icons";
import { initialDataChart } from "./data";
import { useSidebarContext } from "@/shared/context/SidebarProvider";

const sliderMaxValue = 144;

const TerminalPage = () => {
    const [trading, setTrading] = React.useState<"spot" | "futures">("spot");
    const [sliderValue, setSliderValue] = React.useState(0);
    const [bet, setBet] = React.useState(0);
    const [symbolOnly, setSymbolOnly] = React.useState(false);
    const [positions, setPositions] = React.useState<
        "my" | "closed" | "trades" | "public"
    >("my");

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
        <div
            className={cn(styles.terminal, {
                [styles.sidebarOpen]: sidebarIsOpen,
            })}
        >
            <div className={base.container}>
                <div className={styles.terminalInner}>
                    <div className={styles.terminalContent}>
                        <div className={styles.terminalTokenInfo}>
                            <div className={styles.terminalToken}>
                                <div className={styles.terminalTokenImgInner}>
                                    <div className={styles.terminalTokenImg}>
                                        <Image
                                            src="/img/token1.png"
                                            alt="Token"
                                            fill
                                        />
                                    </div>
                                </div>

                                <p className={styles.terminalTokenPrice}>
                                    984.32
                                </p>

                                <p
                                    className={cn(
                                        styles.terminalTokenPercent,
                                        styles.negative,
                                    )}
                                >
                                    <ArrowFall />
                                    44.25%
                                </p>

                                <p className={styles.terminalTokenStatus}>
                                    Active
                                </p>

                                <div className={styles.devider}></div>

                                <button className={styles.terminalTokenMore}>
                                    Glow
                                    <span>
                                        <ArrowDown />
                                    </span>
                                </button>
                            </div>

                            <div className={styles.terminalTokenActionsWrapper}>
                                <div
                                    className={styles.terminalTokenActionsUser}
                                >
                                    <p
                                        className={
                                            styles.terminalTokenActionsUserText
                                        }
                                    >
                                        Created: <span>Just now</span>
                                    </p>

                                    <div
                                        className={
                                            styles.terminalTokenActionsUserImg
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
                                            styles.terminalTokenActionsUserText
                                        }
                                    >
                                        by: <Link href="/">user_e3718b1b</Link>
                                    </p>
                                </div>

                                <button className={styles.terminalTokenButton}>
                                    <Share />
                                    Share
                                </button>

                                <button
                                    className={styles.terminalTokenButtonSquare}
                                >
                                    <Settings />
                                </button>
                            </div>
                        </div>

                        <div className={styles.terminalTokensInner}>
                            <div className={styles.terminalTokens}>
                                <div className={styles.terminalTokenExtra}>
                                    <span
                                        className={cn(
                                            styles.terminalTokenIndicator,
                                            styles.green,
                                        )}
                                    ></span>
                                    Datas26
                                    <button
                                        className={styles.terminalTokenClose}
                                    >
                                        <Close2 />
                                    </button>
                                </div>

                                <div className={styles.terminalTokenExtra}>
                                    <span
                                        className={cn(
                                            styles.terminalTokenIndicator,
                                            styles.red,
                                        )}
                                    ></span>
                                    CANX30
                                    <button
                                        className={styles.terminalTokenClose}
                                    >
                                        <Close2 />
                                    </button>
                                </div>
                            </div>

                            <div className={styles.terminalTokensCloseInner}>
                                <button className={styles.terminalTokensClose}>
                                    Close All
                                </button>
                            </div>
                        </div>

                        <div className={styles.terminalInfoBlock}>
                            <p className={styles.terminalInfoText}>
                                This chart runs at 1440x real-market speed (24h
                                → 1min)Trade at your own risk — volatility ahead
                            </p>

                            <div className={styles.terminalInfoHashlock}>
                                <span>
                                    <Hashlock />
                                </span>

                                <p>Provably Fair Hashlock Audited</p>
                            </div>
                        </div>

                        <div className={styles.terminalChartInner}>
                            <div className={styles.terminalChartActions}>
                                <button
                                    className={styles.terminalChartActionSquare}
                                >
                                    <PlusCircle />
                                </button>

                                <button
                                    className={styles.terminalChartActionSquare}
                                >
                                    1 m
                                </button>

                                <button
                                    className={styles.terminalChartActionSquare}
                                >
                                    <Candles />
                                </button>

                                <button className={styles.terminalChartAction}>
                                    <Function />
                                    indicators
                                </button>

                                <button
                                    className={styles.terminalChartActionSquare}
                                >
                                    <ArrowBack />
                                </button>

                                <button
                                    className={styles.terminalChartActionSquare}
                                >
                                    <ArrowNext />
                                </button>
                            </div>

                            <div
                                className={styles.terminalChart}
                                ref={chartContainerRef}
                            ></div>

                            <div className={styles.terminalChartTools}>
                                <button className={styles.terminalChartTool}>
                                    <Target />
                                </button>

                                <button className={styles.terminalChartTool}>
                                    <Filter />
                                </button>

                                <button className={styles.terminalChartTool}>
                                    <Chart2 />
                                </button>

                                <button className={styles.terminalChartTool}>
                                    <Filter2 />
                                </button>

                                <button className={styles.terminalChartTool}>
                                    <Brush />
                                </button>

                                <button className={styles.terminalChartTool}>
                                    <Text />
                                </button>

                                <button className={styles.terminalChartTool}>
                                    <Smile />
                                </button>

                                <button className={styles.terminalChartTool}>
                                    <Ruler />
                                </button>

                                <button className={styles.terminalChartTool}>
                                    <PlusMagnifier />
                                </button>

                                <button className={styles.terminalChartTool}>
                                    <Magnet />
                                </button>

                                <button
                                    className={cn(
                                        styles.terminalChartTool,
                                        styles.big,
                                    )}
                                >
                                    <PenLock />
                                </button>

                                <button className={styles.terminalChartTool}>
                                    <Lock />
                                </button>

                                <button className={styles.terminalChartTool}>
                                    <Eye />
                                </button>

                                <button className={styles.terminalChartTool}>
                                    <Remove />
                                </button>

                                <button className={styles.terminalChartTool}>
                                    <Layer />
                                </button>
                            </div>
                        </div>

                        <div className={styles.terminalPositions}>
                            <div className={styles.terminalPositionsFilter}>
                                <div className={styles.terminalPositionsTabs}>
                                    <button
                                        className={cn(
                                            styles.terminalPositionsTab,
                                            {
                                                [styles.active]:
                                                    positions === "my",
                                            },
                                        )}
                                        onClick={() => setPositions("my")}
                                    >
                                        My positions
                                    </button>

                                    <button
                                        className={cn(
                                            styles.terminalPositionsTab,
                                            {
                                                [styles.active]:
                                                    positions === "closed",
                                            },
                                        )}
                                        onClick={() => setPositions("closed")}
                                    >
                                        Closed positions
                                    </button>

                                    <button
                                        className={cn(
                                            styles.terminalPositionsTab,
                                            {
                                                [styles.active]:
                                                    positions === "trades",
                                            },
                                        )}
                                        onClick={() => setPositions("trades")}
                                    >
                                        Trades
                                    </button>

                                    <button
                                        className={cn(
                                            styles.terminalPositionsTab,
                                            {
                                                [styles.active]:
                                                    positions === "public",
                                            },
                                        )}
                                        onClick={() => setPositions("public")}
                                    >
                                        Public feed
                                    </button>
                                </div>

                                <div
                                    className={cn(
                                        styles.terminalPositionsCheckbox,
                                        {
                                            [styles.active]: symbolOnly,
                                        },
                                    )}
                                    onClick={() =>
                                        setSymbolOnly((prev) => !prev)
                                    }
                                >
                                    <div
                                        className={
                                            styles.terminalPositionsCheckboxValue
                                        }
                                    >
                                        <div
                                            className={
                                                styles.terminalPositionsCheckboxCircle
                                            }
                                        ></div>
                                    </div>

                                    <p
                                        className={
                                            styles.terminalPositionsCheckboxLabel
                                        }
                                    >
                                        Current Symbol Only
                                    </p>
                                </div>
                            </div>

                            <div className={styles.terminalPositionEmpty}>
                                <Warn2 />
                                <p
                                    className={
                                        styles.terminalPositionEmptyTitle
                                    }
                                >
                                    No open trades found
                                </p>
                                <p className={styles.terminalPositionEmptyText}>
                                    No open positions
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.terminalSidebar}>
                        <div className={styles.terminalSidebarStats}>
                            <div className={styles.terminalSidebarStat}>
                                <p className={styles.terminalSidebarStatTitle}>
                                    Volume
                                </p>
                                <p className={styles.terminalSidebarStatValue}>
                                    $20.0
                                </p>
                            </div>

                            <div className={styles.terminalSidebarStat}>
                                <p className={styles.terminalSidebarStatTitle}>
                                    Buys
                                </p>
                                <p className={styles.terminalSidebarStatValue}>
                                    1
                                </p>
                            </div>

                            <div className={styles.terminalSidebarStat}>
                                <p className={styles.terminalSidebarStatTitle}>
                                    Sells
                                </p>
                                <p
                                    className={cn(
                                        styles.terminalSidebarStatValue,
                                        styles.red,
                                    )}
                                >
                                    0
                                </p>
                            </div>

                            <div className={styles.terminalSidebarStat}>
                                <p className={styles.terminalSidebarStatTitle}>
                                    Traders
                                </p>
                                <p className={styles.terminalSidebarStatValue}>
                                    1
                                </p>
                            </div>
                        </div>

                        <div className={styles.terminalSidebarTabs}>
                            <button
                                className={cn(styles.terminalSidebarTab, {
                                    [styles.active]: trading === "spot",
                                })}
                                onClick={() => setTrading("spot")}
                            >
                                Spot
                            </button>

                            <button
                                className={cn(styles.terminalSidebarTab, {
                                    [styles.active]: trading === "futures",
                                })}
                                onClick={() => setTrading("futures")}
                            >
                                Futures
                            </button>
                        </div>

                        <div className={styles.terminalSidebarConsole}>
                            <div className={styles.consoleTop}>
                                <p className={styles.consoleTopTitle}>
                                    Total Amount
                                </p>

                                <div className={styles.consoleTopBalanceInner}>
                                    <p
                                        className={
                                            styles.consoleTopBalanceTitle
                                        }
                                    >
                                        Balance:
                                    </p>
                                    <p className={styles.consoleTopBalance}>
                                        $0
                                    </p>
                                </div>
                            </div>

                            <div className={styles.consoleForm}>
                                <div className={styles.consoleFormContent}>
                                    <div className={styles.consoleFormBalance}>
                                        <p
                                            className={
                                                styles.consoleFormBalanceValue
                                            }
                                        >
                                            144$
                                        </p>

                                        <button
                                            className={
                                                styles.consoleFormBalanceMax
                                            }
                                        >
                                            max
                                        </button>
                                    </div>

                                    <div
                                        className={
                                            styles.consoleFormSliderInner
                                        }
                                    >
                                        <div
                                            className={
                                                styles.consoleFormSliderWrapper
                                            }
                                        >
                                            <input
                                                type="range"
                                                className={
                                                    styles.consoleFormSlider
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
                                                className={
                                                    styles.sliderProgress
                                                }
                                                style={{
                                                    width: `calc(${(sliderValue / sliderMaxValue) * 100}% - 4px)`,
                                                }}
                                            ></div>
                                        </div>

                                        <span className={styles.decorWrapper}>
                                            <span
                                                className={styles.decorBig}
                                            ></span>
                                            <span
                                                className={styles.decorSmall}
                                            ></span>
                                            <span
                                                className={styles.decorSmall}
                                            ></span>
                                            <span
                                                className={styles.decorSmall}
                                            ></span>
                                            <span
                                                className={styles.decorSmall}
                                            ></span>
                                            <span
                                                className={styles.decorBig}
                                            ></span>
                                            <span
                                                className={styles.decorSmall}
                                            ></span>
                                            <span
                                                className={styles.decorSmall}
                                            ></span>
                                            <span
                                                className={styles.decorSmall}
                                            ></span>
                                            <span
                                                className={styles.decorSmall}
                                            ></span>
                                            <span
                                                className={styles.decorBig}
                                            ></span>
                                            <span
                                                className={styles.decorSmall}
                                            ></span>
                                            <span
                                                className={styles.decorSmall}
                                            ></span>
                                            <span
                                                className={styles.decorSmall}
                                            ></span>
                                            <span
                                                className={styles.decorSmall}
                                            ></span>
                                            <span
                                                className={styles.decorBig}
                                            ></span>
                                            <span
                                                className={styles.decorSmall}
                                            ></span>
                                            <span
                                                className={styles.decorSmall}
                                            ></span>
                                            <span
                                                className={styles.decorSmall}
                                            ></span>
                                            <span
                                                className={styles.decorSmall}
                                            ></span>
                                            <span
                                                className={styles.decorBig}
                                            ></span>
                                            <span
                                                className={styles.decorSmall}
                                            ></span>
                                            <span
                                                className={styles.decorSmall}
                                            ></span>
                                            <span
                                                className={styles.decorSmall}
                                            ></span>
                                            <span
                                                className={styles.decorSmall}
                                            ></span>
                                            <span
                                                className={styles.decorBig}
                                            ></span>
                                            <span
                                                className={styles.decorSmall}
                                            ></span>
                                            <span
                                                className={styles.decorSmall}
                                            ></span>
                                            <span
                                                className={styles.decorSmall}
                                            ></span>
                                            <span
                                                className={styles.decorSmall}
                                            ></span>
                                            <span
                                                className={styles.decorBig}
                                            ></span>
                                        </span>
                                    </div>

                                    <div
                                        className={styles.consoleFormMaxBalance}
                                    >
                                        <p>Max. Buy</p>
                                        <p>$0</p>
                                    </div>

                                    <div className={styles.consoleFormBets}>
                                        <button
                                            className={cn(
                                                styles.consoleFormBet,
                                                {
                                                    [styles.active]: bet === 10,
                                                },
                                            )}
                                            onClick={() => setBet(10)}
                                        >
                                            10$
                                        </button>
                                        <button
                                            className={cn(
                                                styles.consoleFormBet,
                                                {
                                                    [styles.active]: bet === 50,
                                                },
                                            )}
                                            onClick={() => setBet(50)}
                                        >
                                            50$
                                        </button>
                                        <button
                                            className={cn(
                                                styles.consoleFormBet,
                                                {
                                                    [styles.active]:
                                                        bet === 100,
                                                },
                                            )}
                                            onClick={() => setBet(100)}
                                        >
                                            100$
                                        </button>
                                        <button
                                            className={cn(
                                                styles.consoleFormBet,
                                                {
                                                    [styles.active]:
                                                        bet === 200,
                                                },
                                            )}
                                            onClick={() => setBet(200)}
                                        >
                                            200$
                                        </button>
                                        <button
                                            className={cn(
                                                styles.consoleFormBet,
                                                {
                                                    [styles.active]:
                                                        bet === 500,
                                                },
                                            )}
                                            onClick={() => setBet(500)}
                                        >
                                            500$
                                        </button>
                                        <button
                                            className={cn(
                                                styles.consoleFormBet,
                                                {
                                                    [styles.active]:
                                                        bet === 1000,
                                                },
                                            )}
                                            onClick={() => setBet(1000)}
                                        >
                                            1000$
                                        </button>
                                    </div>
                                </div>

                                <div className={styles.consoleFormInputs}>
                                    <div
                                        className={
                                            styles.consoleFormInputWrapper
                                        }
                                    >
                                        <p
                                            className={
                                                styles.consoleFormInputTitle
                                            }
                                        >
                                            Leverage
                                        </p>

                                        <div
                                            className={
                                                styles.consoleFormInputInner
                                            }
                                        >
                                            <input
                                                type="number"
                                                inputMode="decimal"
                                                className={
                                                    styles.consoleFormInput
                                                }
                                            />
                                            <p
                                                className={
                                                    styles.consoleFormInputX
                                                }
                                            >
                                                x
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className={
                                            styles.consoleFormInputWrapper
                                        }
                                    >
                                        <p
                                            className={
                                                styles.consoleFormInputTitle
                                            }
                                        >
                                            Liq. price
                                        </p>

                                        <div
                                            className={cn(
                                                styles.consoleFormInputInner,
                                                styles.liqInput,
                                            )}
                                        >
                                            <input
                                                type="number"
                                                inputMode="decimal"
                                                className={
                                                    styles.consoleFormInput
                                                }
                                                disabled
                                            />

                                            <p
                                                className={
                                                    styles.consoleFormInputValue
                                                }
                                            >
                                                <span>-</span> / <span>-</span>
                                            </p>

                                            <button
                                                className={styles.liqInputCalc}
                                            >
                                                <Calculator />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.consoleButtons}>
                                <button className={styles.consoleButton}>
                                    Long
                                </button>
                                <button
                                    className={cn(
                                        styles.consoleButton,
                                        styles.red,
                                    )}
                                >
                                    Short
                                </button>
                            </div>
                        </div>

                        <div className={styles.terminalSidebarCountdown}>
                            <div
                                className={
                                    styles.terminalSidebarCountdownTitleInner
                                }
                            >
                                <p
                                    className={
                                        styles.terminalSidebarCountdownTitle
                                    }
                                >
                                    1-minute duration
                                </p>
                                <p
                                    className={
                                        styles.terminalSidebarCountdownMode
                                    }
                                >
                                    Mayhem Mode
                                </p>
                            </div>

                            <p
                                className={
                                    styles.terminalSidebarCountdownSubtitle
                                }
                            >
                                Active for 1 min — trade before expiry
                            </p>

                            <div
                                className={
                                    styles.terminalSidebarCountdownContent
                                }
                            >
                                <div
                                    className={
                                        styles.terminalSidebarCountdownItem
                                    }
                                >
                                    <p
                                        className={
                                            styles.terminalSidebarCountdownNumber
                                        }
                                    >
                                        00
                                    </p>
                                    <p
                                        className={
                                            styles.terminalSidebarCountdownItemTitle
                                        }
                                    >
                                        hours
                                    </p>
                                </div>

                                <p
                                    className={
                                        styles.terminalSidebarCountdownDots
                                    }
                                >
                                    :
                                </p>

                                <div
                                    className={
                                        styles.terminalSidebarCountdownItem
                                    }
                                >
                                    <p
                                        className={
                                            styles.terminalSidebarCountdownNumber
                                        }
                                    >
                                        00
                                    </p>
                                    <p
                                        className={
                                            styles.terminalSidebarCountdownItemTitle
                                        }
                                    >
                                        minutes
                                    </p>
                                </div>

                                <p
                                    className={
                                        styles.terminalSidebarCountdownDots
                                    }
                                >
                                    :
                                </p>

                                <div
                                    className={
                                        styles.terminalSidebarCountdownItem
                                    }
                                >
                                    <p
                                        className={
                                            styles.terminalSidebarCountdownNumber
                                        }
                                    >
                                        00
                                    </p>
                                    <p
                                        className={
                                            styles.terminalSidebarCountdownItemTitle
                                        }
                                    >
                                        seconds
                                    </p>
                                </div>
                            </div>

                            <p className={styles.terminalSidebarCountdownText}>
                                When time expires, the token closes and all
                                positions settle at market price
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TerminalPage;
