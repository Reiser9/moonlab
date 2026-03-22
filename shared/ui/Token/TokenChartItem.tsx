"use client";

import React from "react";
import { AreaSeries, createChart, ColorType } from "lightweight-charts";

import "./index.scss";

import { Profit } from "../Profit";
import { UserAvatar } from "../UserAvatar";
import { SliderBlock } from "../SliderBlock";

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
    { time: "2018-12-31", value: 32.67 },
];

type Props = {
    positiveProfit?: boolean;
};

const greenLines = {
    lineColor: "#1fad4f",
    topColor: "rgba(31, 173, 79, .2)",
    bottomColor: "rgba(31, 173, 79, .2)",
};

const redLines = {
    lineColor: "#ED8E8E",
    topColor: "rgba(237, 142, 142, .2)",
    bottomColor: "rgba(237, 142, 142, .2)",
};

const TokenChartItem: React.FC<Props> = ({ positiveProfit = false }) => {
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
            handleScroll: false,
            handleScale: false,
            width: chartContainerRef.current?.clientWidth,
            height: chartContainerRef.current?.clientHeight,
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
            ...(positiveProfit ? greenLines : redLines),
            lineWidth: 2,
            priceLineVisible: false,
        });
        newSeries.setData(initialData);

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);

            chart.remove();
        };
    }, [chartContainerRef]);

    return (
        <div className="discoverCard">
            <div className="discoverCardUser">
                <div className="discoverCardUserInfo">
                    <UserAvatar
                        image="/img/token1.png"
                        width={40}
                        height={40}
                    />

                    <div className="discoverCardUserInfoTextBlock">
                        <p className="discoverCardUserInfoName">BROE29104</p>

                        <p className="discoverCardUserInfoStatus">12 ago</p>
                    </div>
                </div>

                <p className="discoverCardUserStats">FAST</p>
            </div>

            <div className="discoverCardInfo">
                <div className="discoverCardInfoProfit">
                    <p className="discoverCardInfoProfitValue">1600.79</p>

                    <Profit value={4.96} />
                </div>

                <div
                    className="discoverCardChart"
                    ref={chartContainerRef}
                ></div>
            </div>

            <div className="discoverCardStats">
                <div className="discoverCardStat">
                    <p className="discoverCardStatTitle">Vol</p>

                    <p className="discoverCardStatValue">4 403$</p>
                </div>

                <div className="discoverCardStat">
                    <p className="discoverCardStatTitle">Traders</p>

                    <p className="discoverCardStatValue">28</p>
                </div>

                <div className="discoverCardStat">
                    <p className="discoverCardStatTitle">Buys</p>

                    <p className="discoverCardStatValue">13</p>
                </div>
            </div>

            <SliderBlock progress={55} time="12m" text="Flash" />
        </div>
    );
};

export default TokenChartItem;
