"use client";

import React from "react";
import { AreaSeries, createChart, ColorType } from "lightweight-charts";

import { Fire2, Trophy } from "@/shared/icons";
import { useSidebarContext } from "@/shared/context/SidebarProvider";

const initialData = [
    { time: "2018-12-22", value: 12.51 },
    { time: "2018-12-23", value: 13.11 },
    { time: "2018-12-24", value: 25.02 },
    { time: "2018-12-25", value: 24.32 },
    { time: "2018-12-26", value: 23.17 },
    { time: "2018-12-27", value: 28.89 },
    { time: "2018-12-28", value: 22.46 },
    { time: "2018-12-29", value: 35.92 },
    { time: "2018-12-30", value: 34.68 },
    { time: "2019-12-01", value: 32.67 },
    { time: "2019-12-02", value: 35.67 },
    { time: "2019-12-03", value: 12.67 },
    { time: "2019-12-04", value: 42.67 },
    { time: "2019-12-05", value: 62.67 },
];

const PerformancePage = () => {
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
                background: { type: ColorType.Solid, color: "transparent" },
            },
            width: chartContainerRef.current?.clientWidth,
            height: chartContainerRef.current?.clientHeight,
            handleScale: false,
            handleScroll: false,
            grid: {
                vertLines: {
                    visible: false,
                },
                horzLines: {
                    visible: false,
                },
            },
            rightPriceScale: {
                visible: false,
            },
            timeScale: {
                visible: false,
            },
            crosshair: {
                horzLine: { visible: false },
                vertLine: { visible: false },
            },
        });
        chart.timeScale().fitContent();

        const newSeries = chart.addSeries(AreaSeries, {
            lineColor: "#1fad4f",
            topColor: "rgba(31, 173, 79, .2)",
            bottomColor: "rgba(31, 173, 79, .2)",
            lineWidth: 2,
            priceLineVisible: false,
        });
        newSeries.setData(initialData);

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
        <div className="perContent">
            <div className="perWrap">
                <div className="perPnl">
                    <div className="perPnlTitleInner">
                        <p className="title2">Cumulative PnL</p>
                    </div>

                    <div className="perPnlChart" ref={chartContainerRef}></div>
                </div>

                <div className="perWin">
                    <p className="title2">Win / Loss Breakdown</p>

                    <div className="perWinChartInner">
                        <div className="perWinChartWrap">
                            <div className="perWinChart" style={{"background": `conic-gradient(var(--main) ${57}%, var(--red) 0 43%)`}}></div>

                            <div className="perWinChartTextBlock">
                                <p>57%</p>
                                <p>Wins </p>
                            </div>
                        </div>

                        <div className="perWinChartLegends">
                            <p className="perWinChartLegend legendGreen">Wins (14)</p>
                            <p className="perWinChartLegend legendRed">Losses (10)</p>
                        </div>
                    </div>
                </div>
            </div>

            <p className="title2">Performance by Battle Type</p>

            <div className="perBattleTypeItems">
                <div className="perBattleTypeItem">
                    <p className="perDurItemTitle">1v1</p>

                    <div className="perDurItemLine">
                        <div
                            className="perDurItemLineProgress green"
                            style={{ width: "40%" }}
                        ></div>
                    </div>

                    <div className="perDurItemInfoTexts">
                        <p className="perBattleTypeItemText">8 battles</p>
                        <p className="perBattleTypeItemText">5W</p>
                    </div>

                    <div className="perDurItemInfo green">
                        <p className="perDurItemValue">63%</p>
                        <p className="perDurItemValue">+$1,240</p>
                    </div>
                </div>

                <div className="perBattleTypeItem">
                    <p className="perDurItemTitle">1v1</p>

                    <div className="perDurItemLine">
                        <div
                            className="perDurItemLineProgress green"
                            style={{ width: "40%" }}
                        ></div>
                    </div>

                    <div className="perDurItemInfoTexts">
                        <p className="perBattleTypeItemText">8 battles</p>
                        <p className="perBattleTypeItemText">5W</p>
                    </div>

                    <div className="perDurItemInfo green">
                        <p className="perDurItemValue">63%</p>
                        <p className="perDurItemValue">+$1,240</p>
                    </div>
                </div>

                <div className="perBattleTypeItem">
                    <p className="perDurItemTitle">1v1</p>

                    <div className="perDurItemLine">
                        <div
                            className="perDurItemLineProgress green"
                            style={{ width: "40%" }}
                        ></div>
                    </div>

                    <div className="perDurItemInfoTexts">
                        <p className="perBattleTypeItemText">8 battles</p>
                        <p className="perBattleTypeItemText">5W</p>
                    </div>

                    <div className="perDurItemInfo green">
                        <p className="perDurItemValue">63%</p>
                        <p className="perDurItemValue">+$1,240</p>
                    </div>
                </div>

                <div className="perBattleTypeItem">
                    <p className="perDurItemTitle">1v1</p>

                    <div className="perDurItemLine">
                        <div
                            className="perDurItemLineProgress green"
                            style={{ width: "40%" }}
                        ></div>
                    </div>

                    <div className="perDurItemInfoTexts">
                        <p className="perBattleTypeItemText">8 battles</p>
                        <p className="perBattleTypeItemText">5W</p>
                    </div>

                    <div className="perDurItemInfo green">
                        <p className="perDurItemValue">63%</p>
                        <p className="perDurItemValue">+$1,240</p>
                    </div>
                </div>
            </div>

            <p className="title2">Performance by Duration</p>

            <div className="perDurItems">
                <div className="perDurItem">
                    <p className="perDurItemTitle">2m</p>

                    <div className="perDurItemLine">
                        <div
                            className="perDurItemLineProgress red"
                            style={{ width: "40%" }}
                        ></div>
                    </div>

                    <div className="perDurItemInfo red">
                        <p className="perDurItemValue">33% WR</p>
                        <p className="perDurItemText">3 battles</p>
                        <p className="perDurItemValue">-$80</p>
                    </div>
                </div>

                <div className="perDurItem">
                    <p className="perDurItemTitle">2m</p>

                    <div className="perDurItemLine">
                        <div
                            className="perDurItemLineProgress green"
                            style={{ width: "40%" }}
                        ></div>
                    </div>

                    <div className="perDurItemInfo green">
                        <p className="perDurItemValue">33% WR</p>
                        <p className="perDurItemText">3 battles</p>
                        <p className="perDurItemValue">-$80</p>
                    </div>
                </div>

                <div className="perDurItem">
                    <p className="perDurItemTitle">2m</p>

                    <div className="perDurItemLine">
                        <div
                            className="perDurItemLineProgress yellow"
                            style={{ width: "40%" }}
                        ></div>
                    </div>

                    <div className="perDurItemInfo yellow">
                        <p className="perDurItemValue">33% WR</p>
                        <p className="perDurItemText">3 battles</p>
                        <p className="perDurItemValue">-$80</p>
                    </div>
                </div>

                <div className="perDurItem">
                    <p className="perDurItemTitle">2m</p>

                    <div className="perDurItemLine">
                        <div
                            className="perDurItemLineProgress red"
                            style={{ width: "40%" }}
                        ></div>
                    </div>

                    <div className="perDurItemInfo red">
                        <p className="perDurItemValue">33% WR</p>
                        <p className="perDurItemText">3 battles</p>
                        <p className="perDurItemValue">-$80</p>
                    </div>
                </div>

                <div className="perDurItem">
                    <p className="perDurItemTitle">2m</p>

                    <div className="perDurItemLine">
                        <div
                            className="perDurItemLineProgress green"
                            style={{ width: "40%" }}
                        ></div>
                    </div>

                    <div className="perDurItemInfo green">
                        <p className="perDurItemValue">33% WR</p>
                        <p className="perDurItemText">3 battles</p>
                        <p className="perDurItemValue">-$80</p>
                    </div>
                </div>
            </div>

            <p className="title2">Performance by Battle Type</p>

            <div className="typeItems">
                <div className="typeItem">
                    <div className="typeItemWrap">
                        <div className="typeItemIcon">
                            <Trophy />
                        </div>

                        <p className="typeItemName">
                            Won ELON Battle — placed #1
                        </p>
                    </div>

                    <div className="typeItemStatus">
                        <p className="typeItemProfit yellow">+$2,100</p>

                        <p className="typeItemStatusValue">1h ago</p>
                    </div>
                </div>

                <div className="typeItem">
                    <div className="typeItemWrap">
                        <div className="typeItemIcon">
                            <Fire2 />
                        </div>

                        <p className="typeItemName">
                            Achievement unlocked: Hot Streak
                        </p>
                    </div>

                    <div className="typeItemStatus">
                        <p className="typeItemProfit yellow">3 wins</p>

                        <p className="typeItemStatusValue">1h ago</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerformancePage;
