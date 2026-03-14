import cn from "classnames";

import "./index.scss";

type Props = {
    time: string;
    text: string;
    progress: number;
    className?: string;
};

const SliderBlock: React.FC<Props> = ({ time, text, progress, className }) => {
    return (
        <span className={cn("mainItemSlider", className)}>
            <span className="mainItemSliderWrapper">
                <span
                    className={cn("mainItemSliderBorder", {
                        ["orange"]: progress >= 50,
                    })}
                >
                    <span className="mainItemSliderLine">
                        <span
                            className="mainItemSliderProgress"
                            style={{ width: `${progress}%` }}
                        ></span>
                        <span
                            className="mainItemSliderCircle"
                            style={{ left: `${progress}%` }}
                        >
                            <span className="mainItemSliderCircle2">
                                <span className="mainItemSliderCircle3">
                                    <span className="mainItemSliderCircle4"></span>
                                </span>
                            </span>
                        </span>
                    </span>
                </span>

                <span className="decorWrapper">
                    <span className="decorBig"></span>
                    <span className="decorSmall"></span>
                    <span className="decorSmall"></span>
                    <span className="decorSmall"></span>
                    <span className="decorSmall"></span>
                    <span className="decorBig"></span>
                    <span className="decorSmall"></span>
                    <span className="decorSmall"></span>
                    <span className="decorSmall"></span>
                    <span className="decorSmall"></span>
                    <span className="decorBig"></span>
                    <span className="decorSmall"></span>
                    <span className="decorSmall"></span>
                    <span className="decorSmall"></span>
                    <span className="decorSmall"></span>
                    <span className="decorBig"></span>
                    <span className="decorSmall"></span>
                    <span className="decorSmall"></span>
                    <span className="decorSmall"></span>
                    <span className="decorSmall"></span>
                    <span className="decorBig"></span>
                    <span className="decorSmall"></span>
                    <span className="decorSmall"></span>
                    <span className="decorSmall"></span>
                    <span className="decorSmall"></span>
                    <span className="decorBig"></span>
                    <span className="decorSmall"></span>
                    <span className="decorSmall"></span>
                    <span className="decorSmall"></span>
                    <span className="decorSmall"></span>
                    <span className="decorBig"></span>
                </span>
            </span>

            <span className="mainItemSliderText">
                <span>{time}</span>
                <span>{text}</span>
            </span>
        </span>
    );
};

export default SliderBlock;
