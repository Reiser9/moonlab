"use client";

import React from "react";
import Image from "next/image";
import {
    LineSeries,
    createChart,
    ColorType,
    UTCTimestamp,
} from "lightweight-charts";

import "../index.scss";

import { AvatarGroup } from "@/shared/ui/AvatarGroup";
import { UserAvatar } from "@/shared/ui/UserAvatar";
import {
    Chart3,
    Diamond,
    Fire2,
    Light2,
    Target2,
    Trophy,
} from "@/shared/icons";

let randomFactor = 25 + Math.random() * 25;
const samplePoint = (i: number) =>
    i *
        (0.5 +
            Math.sin(i / 10) * 0.2 +
            Math.sin(i / 20) * 0.4 +
            Math.sin(i / randomFactor) * 0.8 +
            Math.sin(i / 500) * 0.5) +
    200;

function generateLineData(numberOfPoints = 500) {
    randomFactor = 25 + Math.random() * 25;
    const res = [];
    const date = new Date(Date.UTC(2018, 0, 1, 12, 0, 0, 0));
    for (let i = 0; i < numberOfPoints; ++i) {
        const time = (date.getTime() / 1000) as UTCTimestamp;

        const value = samplePoint(i);
        res.push({
            time,
            value,
        });

        date.setUTCDate(date.getUTCDate() + 1);
    }

    return res;
}

const lineSeriesOneData = generateLineData();
const lineSeriesTwoData = generateLineData();
const lineSeriesThreeData = generateLineData();

const ResultTokenBattle = () => {
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

        const lineOne = chart.addSeries(LineSeries, {
            color: "#ECA5F7",
            lineWidth: 2,
            priceLineVisible: false,
        });
        const lineTwo = chart.addSeries(LineSeries, {
            color: "#0052B4",
            lineWidth: 2,
            priceLineVisible: false,
        });
        const lineThree = chart.addSeries(LineSeries, {
            color: "#1fad4f",
            lineWidth: 2,
            priceLineVisible: false,
        });
        lineOne.setData(lineSeriesOneData);
        lineTwo.setData(lineSeriesTwoData);
        lineThree.setData(lineSeriesThreeData);

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);

            chart.remove();
        };
    }, [chartContainerRef]);

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

                        <p className="pageBattleActiveItemStatus red">
                            Finished
                        </p>
                    </div>
                </div>
            </div>

            <div className="battleResultContent">
                <p className="title2">Your winnings</p>

                <div className="pageBattleItem active">
                    <p className="pageBattleSlideNum">1</p>

                    <div className="pageBattleSlideUser">
                        <UserAvatar
                            image="/img/token1.png"
                            width={45}
                            height={45}
                        />

                        <p className="pageBattleSlideUserText">User</p>
                        <p className="pageBattleSlideUserName">User_9185151</p>
                    </div>

                    <div className="pageBattleSlideInfo">
                        <p className="pageBattleSlideInfoText">Real-time PnL</p>

                        <p className="pageBattleSlideInfoValue green">
                            +$10,759.46
                        </p>
                    </div>
                </div>

                <p className="title2">PEPE battle results</p>

                <div className="battleResultsResults">
                    <div className="battleResultsResult">
                        <div className="battleResultsResultImageInner">
                            <div className="battleResultsResultImage">
                                <Image src="/img/token1.png" alt="image" fill />
                            </div>
                        </div>

                        <p className="battleResultsResultName">User_9185151</p>

                        <p className="battleResultsResultProfit green">
                            +$28.6K
                        </p>

                        <p className="battleResultsResultPlace">#2</p>
                    </div>

                    <div className="battleResultsResult">
                        <div className="battleResultsResultImageInner">
                            <div className="battleResultsResultImage">
                                <Image src="/img/token1.png" alt="image" fill />
                            </div>
                        </div>

                        <p className="battleResultsResultName">User_9185151</p>

                        <p className="battleResultsResultProfit green">
                            +$28.6K
                        </p>

                        <p className="battleResultsResultWin yellow">
                            Winner - 4000$ prize
                        </p>

                        <p className="battleResultsResultPlace">#1</p>
                    </div>

                    <div className="battleResultsResult">
                        <div className="battleResultsResultImageInner">
                            <div className="battleResultsResultImage">
                                <Image src="/img/token1.png" alt="image" fill />
                            </div>
                        </div>

                        <p className="battleResultsResultName">User_9185151</p>

                        <p className="battleResultsResultProfit green">
                            +$28.6K
                        </p>

                        <p className="battleResultsResultPlace">#3</p>
                    </div>
                </div>

                <p className="title2">Final standigs</p>

                <div className="battleResultStands">
                    <div className="battleResultStand">
                        <div className="battleResultStandUser">
                            <div className="battleResultStandUserImage">
                                <Image src="/img/token1.png" alt="image" fill />
                            </div>
                            <p className="battleResultStandUserName">
                                PEPE Battle
                            </p>
                            <div className="battleResultStandTags">
                                <p className="battleResultStandTag">
                                    4 players
                                </p>
                                <p className="battleResultStandTag">25m ago</p>
                            </div>
                        </div>

                        <p className="battleResultStandPlace">#1</p>

                        <div className="battleResultStandInfo">
                            <p className="battleResultStandInfoProfit green">
                                +$847.32
                            </p>
                            <p className="battleResultStandInfoPrize yellow">
                                +$400 prize
                            </p>
                        </div>
                    </div>

                    <div className="battleResultStand">
                        <div className="battleResultStandUser">
                            <div className="battleResultStandUserImage">
                                <Image src="/img/token1.png" alt="image" fill />
                            </div>
                            <p className="battleResultStandUserName">
                                PEPE Battle
                            </p>
                            <div className="battleResultStandTags">
                                <p className="battleResultStandTag">
                                    4 players
                                </p>
                                <p className="battleResultStandTag">25m ago</p>
                            </div>
                        </div>

                        <p className="battleResultStandPlace">#1</p>

                        <div className="battleResultStandInfo">
                            <p className="battleResultStandInfoProfit green">
                                +$847.32
                            </p>
                            <p className="battleResultStandInfoPrize yellow">
                                +$400 prize
                            </p>
                        </div>
                    </div>
                </div>

                <p className="title2">Your performance</p>

                <div className="battleResultPers">
                    <div className="battleResultPer">
                        <p className="battleResultPerText">Final PNL</p>

                        <p className="battleResultPerValue green">+4354$</p>
                    </div>

                    <div className="battleResultPer">
                        <p className="battleResultPerText">Place</p>

                        <p className="battleResultPerValue">#2</p>
                    </div>

                    <div className="battleResultPer">
                        <p className="battleResultPerText">Trades</p>

                        <p className="battleResultPerValue yellow">9</p>
                    </div>

                    <div className="battleResultPer">
                        <p className="battleResultPerText">Win rate</p>

                        <p className="battleResultPerValue green">4 354$</p>
                    </div>
                </div>

                <p className="title2">Achievements unlocked</p>

                <div className="battleResultAchiItems">
                    <div className="battleResultAchiItem">
                        <div className="battleResultAchiItemIcon">
                            <Fire2 />
                        </div>

                        <div className="battleResultAchiItemTextBlock">
                            <p className="battleResultAchiItemTitle">
                                3 win streak
                            </p>

                            <p className="battleResultAchiItemText">
                                Wan 3 battles in a raw
                            </p>
                        </div>
                    </div>

                    <div className="battleResultAchiItem">
                        <div className="battleResultAchiItemIcon">
                            <Chart3 />
                        </div>

                        <div className="battleResultAchiItemTextBlock">
                            <p className="battleResultAchiItemTitle">
                                Profit machine
                            </p>

                            <p className="battleResultAchiItemText">
                                PnL over 500$ in a single battle
                            </p>
                        </div>
                    </div>

                    <div className="battleResultAchiItem">
                        <div className="battleResultAchiItemIcon">
                            <Light2 />
                        </div>

                        <div className="battleResultAchiItemTextBlock">
                            <p className="battleResultAchiItemTitle">
                                Speed trader
                            </p>

                            <p className="battleResultAchiItemText">
                                Made 5+ trades in under 1 minute
                            </p>
                        </div>
                    </div>

                    <div className="battleResultAchiItem disabled">
                        <div className="battleResultAchiItemIcon">
                            <Target2 />
                        </div>

                        <div className="battleResultAchiItemTextBlock">
                            <p className="battleResultAchiItemTitle">
                                Risk manager
                            </p>

                            <p className="battleResultAchiItemText">
                                Wan 3 battles in a raw
                            </p>
                        </div>
                    </div>

                    <div className="battleResultAchiItem disabled">
                        <div className="battleResultAchiItemIcon">
                            <Trophy />
                        </div>

                        <div className="battleResultAchiItemTextBlock">
                            <p className="battleResultAchiItemTitle">
                                Champion
                            </p>

                            <p className="battleResultAchiItemText">
                                PnL over 500$ in a single battle
                            </p>
                        </div>
                    </div>

                    <div className="battleResultAchiItem disabled">
                        <div className="battleResultAchiItemIcon">
                            <Diamond />
                        </div>

                        <div className="battleResultAchiItemTextBlock">
                            <p className="battleResultAchiItemTitle">
                                Diamond hands
                            </p>

                            <p className="battleResultAchiItemText">
                                Made 5+ trades in under 1 minute
                            </p>
                        </div>
                    </div>
                </div>

                <p className="title2">Battle replay</p>

                <div className="battleReplay">
                    <div className="battleReplayBlock">
                        <div className="battleReplayBlockTop">
                            <p className="battleReplayBlockStatus green">Play</p>
                            <p className="battleReplayBlockText">0:00 . / . 5:00</p>
                        </div>

                        <div className="battleReplayLineInner">
                            <div className="battleReplayLine"></div>

                            <div className="battleReplayAwards">
                                <div className="battleReplayAward">
                                    <Trophy />
                                    <p className="battleReplayAwardText">PnL over 500$ </p>
                                </div>

                                <div className="battleReplayAward">
                                    <Trophy />
                                    <p className="battleReplayAwardText">PnL over 500$ </p>
                                </div>

                                <div className="battleReplayAward">
                                    <Trophy />
                                    <p className="battleReplayAwardText">PnL over 500$ </p>
                                </div>

                                <div className="battleReplayAward">
                                    <Trophy />
                                    <p className="battleReplayAwardText">PnL over 500$ </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="battleReplayChart"
                        ref={chartContainerRef}
                    ></div>
                </div>

                <div className="battleResultButtons">
                    <button className="mainGradientButton battleResultButton">
                        Rematch
                    </button>

                    <button className="battleResultButton">Share result</button>

                    <button className="battleResultButton">Lobby</button>
                </div>
            </div>
        </>
    );
};

export default ResultTokenBattle;
