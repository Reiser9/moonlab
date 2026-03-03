import cn from "classnames";
import Image from "next/image";

import styles from "./index.module.scss";

import { ArrowFall, ArrowIncrease, CircleStarMini } from "@/shared/icons";
import { SliderBlock } from "../SliderBlock";

const TradeItem = () => {
    return (
        <div className={styles.mainTradesItem}>
            <div
                className={cn(
                    styles.mainTradesItemBlock,
                    styles.mainTradesItemToken,
                )}
            >
                <div className={styles.mainTradesItemTokenImgInner}>
                    <div className={styles.mainTradesItemTokenImg}>
                        <Image src="/img/token1.png" alt="Token" fill />
                    </div>

                    <CircleStarMini />
                </div>

                <div className={styles.mainTradesItemTextInner}>
                    <p className={styles.mainTradesItemTitle}>Token Name</p>
                    <p className={styles.mainTradesItemText}>Tesla</p>
                </div>
            </div>

            <div
                className={cn(
                    styles.mainTradesItemBlock,
                    styles.mainTradesItemUser,
                )}
            >
                <div className={styles.mainTradesItemTokenImgInner}>
                    <div className={styles.mainTradesItemTokenImg}>
                        <Image src="/img/token1.png" alt="Token" fill />
                    </div>
                </div>

                <div className={styles.mainTradesItemTextInner}>
                    <p className={styles.mainTradesItemTitle}>User</p>
                    <p className={styles.mainTradesItemText}>Defanu1934</p>
                </div>
            </div>

            <div
                className={cn(
                    styles.mainTradesItemBlock,
                    styles.mainTradesItemSlider,
                )}
            >
                <SliderBlock
                    progress={15}
                    time="12m"
                    text="Flash"
                    className={styles.mainTradesItemSliderContent}
                />
            </div>

            <div
                className={cn(
                    styles.mainTradesItemBlock,
                    styles.mainTradesItemTextBlock,
                )}
            >
                <p className={styles.mainTradesItemTextName}>Amount</p>
                <p className={styles.mainTradesItemTextValue}>104$</p>
            </div>

            <div
                className={cn(
                    styles.mainTradesItemBlock,
                    styles.mainTradesItemTextBlock,
                )}
            >
                <p className={styles.mainTradesItemTextName}>Entry Price</p>
                <p className={styles.mainTradesItemTextValue}>0.58231$</p>
            </div>

            <div
                className={cn(
                    styles.mainTradesItemBlock,
                    styles.mainTradesItemTextBlock,
                )}
            >
                <p className={styles.mainTradesItemTextName}>Exit Price</p>
                <p className={styles.mainTradesItemTextValue}>104$</p>
            </div>

            <div
                className={cn(
                    styles.mainTradesItemBlock,
                    styles.mainTradesItemTextBlock,
                )}
            >
                <p className={styles.mainTradesItemTextName}>Final PnL</p>
                <p
                    className={cn(
                        styles.mainTradesItemTextValue,
                        styles.negative,
                    )}
                >
                    <ArrowFall />
                    44.25%
                </p>
            </div>

            <div
                className={cn(
                    styles.mainTradesItemBlock,
                    styles.mainTradesItemTextBlock,
                )}
            >
                <p className={styles.mainTradesItemTextName}>Amount</p>
                <p className={styles.mainTradesItemTextValue}>
                    <ArrowIncrease />
                    44.25%
                </p>
            </div>
        </div>
    );
};

export default TradeItem;
