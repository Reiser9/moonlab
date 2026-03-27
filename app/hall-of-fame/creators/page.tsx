import { Pagination } from "@/shared/ui/Pagination";
import { PrizesBlock } from "@/shared/ui/PrizesBlock";
import { Stats } from "@/shared/ui/Stats";
import { UserAvatar } from "@/shared/ui/UserAvatar";

const TopCreators = () => {
    return (
        <>
            <div className="hallPrizeInner">
                <PrizesBlock
                    data={[
                        {
                            image: "/img/token1.png",
                            name: "User_9185151",
                            text: "PnL",
                            value: "+$28.6K",
                        },
                        {
                            image: "/img/token1.png",
                            name: "User_9185151",
                            text: "PnL",
                            value: "+$28.6K",
                        },
                        {
                            image: "/img/token1.png",
                            name: "User_9185151",
                            text: "PnL",
                            value: "+$28.6K",
                        },
                    ]}
                />

                <Stats
                    data={[
                        {
                            title: "Total Volume",
                            value: "$2.8B",
                        },
                        {
                            title: "Total Trades",
                            value: "36,144,852",
                        },
                        {
                            title: "Total Tokens",
                            value: "4,343,675",
                        },
                        {
                            title: "Total Users",
                            value: "376,726",
                        },
                    ]}
                />
            </div>

            <div className="hallTableInner">
                <p className="title2">Leaderboard</p>

                <div className="hallTable">
                    <div className="hallTableItem active">
                        <div className="hallTableItemNum">
                            <p className="hallTableItemNumValue">39482</p>
                        </div>

                        <div className="hallTableItemUser">
                            <div className="hallTableItemUserWrap">
                                <UserAvatar image="/img/token1.png" />

                                <div className="hallTableItemUserInfo">
                                    <p className="hallTableItemUserTitle">
                                        User
                                    </p>

                                    <p className="hallTableItemUserName">
                                        User_9185151
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="hallTableItemTextBlock">
                            <p className="hallTableItemText">Volume</p>

                            <p className="hallTableItemValue">$6.5M</p>
                        </div>

                        <div className="hallTableItemTextBlock">
                            <p className="hallTableItemText">Total Trades</p>

                            <p className="hallTableItemValue green">769</p>
                        </div>

                        <div className="hallTableItemUser trade">
                            <div className="hallTableItemUserWrap">
                                <UserAvatar image="/img/token1.png" />

                                <div className="hallTableItemUserInfo">
                                    <p className="hallTableItemUserTitle">
                                        Best Trade
                                    </p>

                                    <p className="hallTableItemUserName green">
                                        +$10,759.46(+107.59%)
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="hallTableItemTotal">
                            <p className="hallTableItemTotalTitle">30d PnL</p>

                            <p className="hallTableItemTotalValue">+$52.3K</p>
                        </div>
                    </div>
                </div>

                <Pagination />
            </div>
        </>
    );
};

export default TopCreators;
