import Image from "next/image";

import "./index.scss";
import { Profit } from "../Profit";
import Link from "next/link";

type Props = {
    name: string;
};

const LiveTradeItem: React.FC<Props> = ({ name }) => {
    return (
        <Link href="/terminal/1" className="headerTradeItem">
            <span className="headerTradeItemAction">
                {name} <span>closed</span>
            </span>

            <span className="headerTradeItemUser">
                <span className="headerTradeItemImg">
                    <Image src="/img/token2.png" alt="user" fill />
                </span>

                <span className="headerTradeItemName">SNOOPSNOOP</span>
            </span>

            <Profit value={7.81} positive />
        </Link>
    );
};

export default LiveTradeItem;
