import { Pagination } from "@/shared/ui/Pagination";
import { PrizesBlock } from "@/shared/ui/PrizesBlock";
import { UserAvatar } from "@/shared/ui/UserAvatar";

const TopReferrals = () => {
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

                <div className="hallStats">
                    <div className="hallStat">
                        <p className="hallStatTitle">Total Volume</p>

                        <div className="hallStatText">$2.8B</div>
                    </div>

                    <div className="hallStat">
                        <p className="hallStatTitle">Total Trades</p>

                        <div className="hallStatText">36,144,852</div>
                    </div>

                    <div className="hallStat">
                        <p className="hallStatTitle">Total Tokens</p>

                        <div className="hallStatText">4,343,675</div>
                    </div>

                    <div className="hallStat">
                        <p className="hallStatTitle">Total Users</p>

                        <div className="hallStatText">376,726</div>
                    </div>
                </div>
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

                    <div className="hallTableItem">
                        <div className="hallTableItemNum">
                            <p className="hallTableItemNumValue">1</p>
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

                    <div className="hallTableItem">
                        <div className="hallTableItemNum">
                            <p className="hallTableItemNumValue">1</p>
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

export default TopReferrals;
