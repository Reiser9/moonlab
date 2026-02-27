import React from "react";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

import styles from "./index.module.scss";
import { ArrowFall, ArrowIncrease } from "@/shared/icons";

type Props = {
    image: string;
    name: string;
    price: string | number;
    percent: string | number;
    percentPositive?: boolean;
    volume: string | number;
    progress: number;
};

const Token: React.FC<Props> = ({
    progress,
    image,
    name,
    price,
    percent,
    volume,
    percentPositive = false,
}) => {
    return (
        <Link href="/" className={styles.mainItem}>
            <span className={styles.mainItemImg}>
                <span className={styles.mainItemImgContent}>
                    <Image src={image} alt={name} fill />
                </span>
            </span>

            <span className={styles.mainItemContent}>
                <span className={styles.mainItemName}>{name}</span>

                <span className={styles.mainItemPriceInner}>
                    <span className={styles.mainItemPrice}>{price}</span>

                    <span
                        className={cn(styles.mainItemPercent, {
                            [styles.negative]: !percentPositive,
                            [styles.positive]: percentPositive,
                        })}
                    >
                        {percentPositive ? <ArrowIncrease /> : <ArrowFall />}
                        {percent}%
                    </span>
                </span>

                <span className={styles.mainItemSlider}>
                    <span className={styles.mainItemSliderWrapper}>
                        <span
                            className={cn(styles.mainItemSliderBorder, {
                                [styles.orange]: progress >= 50,
                            })}
                        >
                            <span className={styles.mainItemSliderLine}>
                                <span
                                    className={styles.mainItemSliderProgress}
                                    style={{ width: `${progress}%` }}
                                ></span>
                                <span
                                    className={styles.mainItemSliderCircle}
                                    style={{ left: `${progress}%` }}
                                >
                                    <span
                                        className={styles.mainItemSliderCircle2}
                                    >
                                        <span
                                            className={
                                                styles.mainItemSliderCircle3
                                            }
                                        >
                                            <span
                                                className={
                                                    styles.mainItemSliderCircle4
                                                }
                                            ></span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>

                        <span className={styles.decorWrapper}>
                            <span className={styles.decorBig}></span>
                            <span className={styles.decorSmall}></span>
                            <span className={styles.decorSmall}></span>
                            <span className={styles.decorSmall}></span>
                            <span className={styles.decorSmall}></span>
                            <span className={styles.decorBig}></span>
                            <span className={styles.decorSmall}></span>
                            <span className={styles.decorSmall}></span>
                            <span className={styles.decorSmall}></span>
                            <span className={styles.decorSmall}></span>
                            <span className={styles.decorBig}></span>
                            <span className={styles.decorSmall}></span>
                            <span className={styles.decorSmall}></span>
                            <span className={styles.decorSmall}></span>
                            <span className={styles.decorSmall}></span>
                            <span className={styles.decorBig}></span>
                            <span className={styles.decorSmall}></span>
                            <span className={styles.decorSmall}></span>
                            <span className={styles.decorSmall}></span>
                            <span className={styles.decorSmall}></span>
                            <span className={styles.decorBig}></span>
                            <span className={styles.decorSmall}></span>
                            <span className={styles.decorSmall}></span>
                            <span className={styles.decorSmall}></span>
                            <span className={styles.decorSmall}></span>
                            <span className={styles.decorBig}></span>
                            <span className={styles.decorSmall}></span>
                            <span className={styles.decorSmall}></span>
                            <span className={styles.decorSmall}></span>
                            <span className={styles.decorSmall}></span>
                            <span className={styles.decorBig}></span>
                        </span>
                    </span>

                    <span className={styles.mainItemSliderText}>
                        <span>12m</span>
                        <span>Flash</span>
                    </span>
                </span>

                <span className={styles.mainItemVolume}>
                    <span>Volume</span>
                    <span>{volume}$</span>
                </span>
            </span>
        </Link>
    );
};

export default Token;
