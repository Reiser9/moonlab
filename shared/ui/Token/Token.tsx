import React from "react";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

import "./index.scss";

import { ArrowFall, ArrowIncrease, Copy } from "@/shared/icons";
import { SliderBlock } from "../SliderBlock";

type Props = {
    image: string;
    name: string;
    price: string | number;
    percent: string | number;
    percentPositive?: boolean;
    volume: string | number;
    time: string;
    text: string;
    progress: number;
    view?: "grid" | "line";
};

const Token: React.FC<Props> = ({
    progress,
    image,
    name,
    price,
    percent,
    volume,
    time,
    text,
    percentPositive = false,
    view = "grid",
}) => {
    return (
        <>
            {view === "grid" && (
                <Link href="/terminal" className="mainItem">
                    <span className="mainItemImg">
                        <span className="mainItemImgContent">
                            <Image src={image} alt={name} fill />
                        </span>
                    </span>

                    <span className="mainItemContent">
                        <span className="mainItemName">{name}</span>

                        <span className="mainItemPriceInner">
                            <span className="mainItemPrice">{price}</span>

                            <span
                                className={cn("mainItemPercent", {
                                    ["negative"]: !percentPositive,
                                    ["positive"]: percentPositive,
                                })}
                            >
                                {percentPositive ? (
                                    <ArrowIncrease />
                                ) : (
                                    <ArrowFall />
                                )}
                                {percent}%
                            </span>
                        </span>

                        <SliderBlock
                            progress={progress}
                            text={text}
                            time={time}
                        />

                        <span className="mainItemVolume">
                            <span>Volume</span>
                            <span>{volume}$</span>
                        </span>
                    </span>
                </Link>
            )}

            {view === "line" && (
                <div className="mainItemLine">
                    <div className="mainItemLineToken">
                        <div className="mainItemLineTokenImgInner">
                            <div className="mainItemLineTokenImg">
                                <Image src="/img/token1.png" alt="token" fill />
                            </div>
                        </div>

                        <div className="mainItemLineTokenWrap">
                            <p className="mainItemLineSubtitle">Token Name</p>
                            <p className="mainItemLineTokenName">DUH9321</p>
                        </div>
                    </div>

                    <div className="mainItemLineTime">
                        <p className="mainItemLineSubtitle">Time left</p>

                        <SliderBlock
                            progress={15}
                            text="Flesh"
                            time="12m"
                            className="mainItemLineSlider"
                        />
                    </div>

                    <div className="mainItemLinePrice">
                        <p className="mainItemLineSubtitle">Price</p>

                        <div className="mainItemLinePriceInner">
                            <p className="mainItemLinePriceValue">289.99</p>
                            <p
                                className={cn(
                                    "mainItemLinePricePercent",
                                    "negative",
                                )}
                            >
                                <ArrowFall />
                                44.25%
                            </p>
                        </div>
                    </div>

                    <div className="mainItemLineText">
                        <p className="mainItemLineSubtitle">Buys</p>
                        <p className="mainItemLineValue">0</p>
                    </div>

                    <div className="mainItemLineText">
                        <p className="mainItemLineSubtitle">Sells</p>
                        <p className="mainItemLineValue">0</p>
                    </div>

                    <div className="mainItemLineText">
                        <p className="mainItemLineSubtitle">Traders</p>
                        <p className="mainItemLineValue">0</p>
                    </div>

                    <div className="mainItemLineText">
                        <p className="mainItemLineSubtitle">Volume</p>
                        <p className="mainItemLineValue">115$</p>
                    </div>

                    <div className="mainItemLineActions">
                        <button className="mainItemLineBuy">Buy</button>

                        <button className="mainItemLineCopy">
                            <Copy />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Token;
