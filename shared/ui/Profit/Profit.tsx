import React from "react";
import cn from "classnames";

import styles from "./index.module.scss";

type Props = {
    value: number | string;
    positive?: boolean;
};

const Profit: React.FC<Props> = ({ value, positive = false }) => {
    return (
        <p
            className={cn(styles.headerTradeItemProfit, {
                [styles.positive]: positive,
                [styles.negative]: !positive,
            })}
        >
            {positive ? "+" : "-"}
            {value}$
        </p>
    );
};

export default Profit;
