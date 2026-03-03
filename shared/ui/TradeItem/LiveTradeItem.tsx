import cn from "classnames";
import Image from "next/image";

import styles from "./index.module.scss";
import { Profit } from "../Profit";

type Props = {
    name: string;
};

const LiveTradeItem: React.FC<Props> = ({ name }) => {
    return (
        <div className={styles.headerTradeItem}>
            <p className={styles.headerTradeItemAction}>
                {name} <span>closed</span>
            </p>

            <div className={styles.headerTradeItemUser}>
                <div className={styles.headerTradeItemImg}>
                    <Image src="/img/token2.png" alt="user" fill />
                </div>

                <p className={styles.headerTradeItemName}>SNOOPSNOOP</p>
            </div>

            <Profit value={7.81} positive />
        </div>
    );
};

export default LiveTradeItem;
