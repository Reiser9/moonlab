import Image from "next/image";

import "./index.scss";
import { Profit } from "../Profit";
import Link from "next/link";

type Props = {
    name: string;
};

const LiveTradeItem: React.FC<Props> = ({ name }) => {
    return (
        <div className="headerTradeItem">
            <Link href="/profile/1" className="headerTradeItemAction">
                {name} <span>closed</span>
            </Link>

            <Link href="/terminal/1" className="headerTradeItemUser">
                <span className="headerTradeItemImg">
                    <Image src="/img/token2.png" alt="user" fill />
                </span>

                <span className="headerTradeItemName">SNOOPSNOOP</span>
            </Link>

            <Profit value={7.81} positive />
        </div>
    );
};

export default LiveTradeItem;
