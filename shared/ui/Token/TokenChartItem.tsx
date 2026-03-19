"use client";

import React from "react";
import { CandlestickSeries, createChart, ColorType } from "lightweight-charts";

import "./index.scss";

import { Profit } from "../Profit";
import { UserAvatar } from "../UserAvatar";
import { SliderBlock } from "../SliderBlock";
import { initialDataChart } from "@/app/terminal/data";

const TokenChartItem = () => {
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

                <div className="discoverCardChart" ref={chartContainerRef}></div>
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
