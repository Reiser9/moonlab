import cn from "classnames";

import styles from "./index.module.scss";

type Props = {
    time: string;
    text: string;
    progress: number;
    className?: string;
};

const SliderBlock: React.FC<Props> = ({ time, text, progress, className }) => {
    return (
        <span className={cn(styles.mainItemSlider, className)}>
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
                            <span className={styles.mainItemSliderCircle2}>
                                <span className={styles.mainItemSliderCircle3}>
                                    <span
                                        className={styles.mainItemSliderCircle4}
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
                <span>{time}</span>
                <span>{text}</span>
            </span>
        </span>
    );
};

export default SliderBlock;
