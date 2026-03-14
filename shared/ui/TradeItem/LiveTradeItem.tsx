import Image from "next/image";

import "./index.scss";
import { Profit } from "../Profit";

type Props = {
    name: string;
};

const LiveTradeItem: React.FC<Props> = ({ name }) => {
    return (
        <div className="headerTradeItem">
            <p className="headerTradeItemAction">
                {name} <span>closed</span>
            </p>

            <div className="headerTradeItemUser">
                <div className="headerTradeItemImg">
                    <Image src="/img/token2.png" alt="user" fill />
                </div>

                <p className="headerTradeItemName">SNOOPSNOOP</p>
            </div>

            <Profit value={7.81} positive />
        </div>
    );
};

export default LiveTradeItem;
