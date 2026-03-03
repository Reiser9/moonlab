import React from "react";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

import styles from "./index.module.scss";

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
                <Link href="/" className={styles.mainItem}>
                    <span className={styles.mainItemImg}>
                        <span className={styles.mainItemImgContent}>
                            <Image src={image} alt={name} fill />
                        </span>
                    </span>

                    <span className={styles.mainItemContent}>
                        <span className={styles.mainItemName}>{name}</span>

                        <span className={styles.mainItemPriceInner}>
                            <span className={styles.mainItemPrice}>
                                {price}
                            </span>

                            <span
                                className={cn(styles.mainItemPercent, {
                                    [styles.negative]: !percentPositive,
                                    [styles.positive]: percentPositive,
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

                        <span className={styles.mainItemVolume}>
                            <span>Volume</span>
                            <span>{volume}$</span>
                        </span>
                    </span>
                </Link>
            )}

            {view === "line" && (
                <div className={styles.mainItemLine}>
                    <div className={styles.mainItemLineToken}>
                        <div className={styles.mainItemLineTokenImgInner}>
                            <div className={styles.mainItemLineTokenImg}>
                                <Image src="/img/token1.png" alt="token" fill />
                            </div>
                        </div>

                        <div className={styles.mainItemLineTokenWrap}>
                            <p className={styles.mainItemLineSubtitle}>Token Name</p>
                            <p className={styles.mainItemLineTokenName}>DUH9321</p>
                        </div>
                    </div>

                    <div className={styles.mainItemLineTime}>
                        <p className={styles.mainItemLineSubtitle}>Time left</p>

                        <SliderBlock
                            progress={15}
                            text="Flesh"
                            time="12m"
                            className={styles.mainItemLineSlider}
                        />
                    </div>

                    <div className={styles.mainItemLinePrice}>
                        <p className={styles.mainItemLineSubtitle}>Price</p>

                        <div className={styles.mainItemLinePriceInner}>
                            <p className={styles.mainItemLinePriceValue}>289.99</p>
                            <p className={cn(styles.mainItemLinePricePercent, styles.negative)}>
                                <ArrowFall />
                                44.25%
                            </p>
                        </div>
                    </div>

                    <div className={styles.mainItemLineText}>
                        <p className={styles.mainItemLineSubtitle}>Buys</p>
                        <p className={styles.mainItemLineValue}>0</p>
                    </div>

                    <div className={styles.mainItemLineText}>
                        <p className={styles.mainItemLineSubtitle}>Sells</p>
                        <p className={styles.mainItemLineValue}>0</p>
                    </div>

                    <div className={styles.mainItemLineText}>
                        <p className={styles.mainItemLineSubtitle}>Traders</p>
                        <p className={styles.mainItemLineValue}>0</p>
                    </div>

                    <div className={styles.mainItemLineText}>
                        <p className={styles.mainItemLineSubtitle}>Volume</p>
                        <p className={styles.mainItemLineValue}>115$</p>
                    </div>

                    <div className={styles.mainItemLineActions}>
                        <button className={styles.mainItemLineBuy}>Buy</button>

                        <button className={styles.mainItemLineCopy}>
                            <Copy />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Token;
