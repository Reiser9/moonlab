import cn from "classnames";
import Image from "next/image";

import "./index.scss";

import { ArrowFall, ArrowIncrease, CircleStarMini } from "@/shared/icons";
import { SliderBlock } from "../SliderBlock";

const TradeItem = () => {
    return (
        <div className="mainTradesItem">
            <div className={cn("mainTradesItemBlock", "mainTradesItemToken")}>
                <div className="mainTradesItemTokenImgInner">
                    <div className="mainTradesItemTokenImg">
                        <Image src="/img/token1.png" alt="Token" fill />
                    </div>

                    <CircleStarMini />
                </div>

                <div className="mainTradesItemTextInner">
                    <p className="mainTradesItemTitle">Token Name</p>
                    <p className="mainTradesItemText">Tesla</p>
                </div>
            </div>

            <div className={cn("mainTradesItemBlock", "mainTradesItemUser")}>
                <div className="mainTradesItemTokenImgInner">
                    <div className="mainTradesItemTokenImg">
                        <Image src="/img/token1.png" alt="Token" fill />
                    </div>
                </div>

                <div className="mainTradesItemTextInner">
                    <p className="mainTradesItemTitle">User</p>
                    <p className="mainTradesItemText">Defanu1934</p>
                </div>
            </div>

            <div className={cn("mainTradesItemBlock", "mainTradesItemSlider")}>
                <SliderBlock
                    progress={15}
                    time="12m"
                    text="Flash"
                    className="mainTradesItemSliderContent"
                />
            </div>

            <div
                className={cn("mainTradesItemBlock", "mainTradesItemTextBlock")}
            >
                <p className="mainTradesItemTextName">Amount</p>
                <p className="mainTradesItemTextValue">104$</p>
            </div>

            <div
                className={cn("mainTradesItemBlock", "mainTradesItemTextBlock")}
            >
                <p className="mainTradesItemTextName">Entry Price</p>
                <p className="mainTradesItemTextValue">0.58231$</p>
            </div>

            <div
                className={cn("mainTradesItemBlock", "mainTradesItemTextBlock")}
            >
                <p className="mainTradesItemTextName">Exit Price</p>
                <p className="mainTradesItemTextValue">104$</p>
            </div>

            <div
                className={cn("mainTradesItemBlock", "mainTradesItemTextBlock")}
            >
                <p className="mainTradesItemTextName">Final PnL</p>
                <p className={cn("mainTradesItemTextValue", "negative")}>
                    <ArrowFall />
                    44.25%
                </p>
            </div>

            <div
                className={cn("mainTradesItemBlock", "mainTradesItemTextBlock")}
            >
                <p className="mainTradesItemTextName">Amount</p>
                <p className="mainTradesItemTextValue">
                    <ArrowIncrease />
                    44.25%
                </p>
            </div>
        </div>
    );
};

export default TradeItem;
