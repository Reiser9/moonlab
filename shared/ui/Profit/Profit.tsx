import React from "react";
import cn from "classnames";

import "./index.scss";

type Props = {
    value: number | string;
    positive?: boolean;
};

const Profit: React.FC<Props> = ({ value, positive = false }) => {
    return (
        <p
            className={cn("headerTradeItemProfit", {
                ["positive"]: positive,
                ["negative"]: !positive,
            })}
        >
            {positive ? "+" : "-"}
            {value}$
        </p>
    );
};

export default Profit;
