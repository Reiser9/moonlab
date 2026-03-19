import React from "react";

import "./index.scss";

import { Mind, X2 } from "@/shared/icons";
import { UserAvatar } from "@/shared/ui/UserAvatar";

const MindshareMining = () => {
    return (
        <>
            <div className="mindTop">
                <div className="mindTopIcon">
                    <Mind />
                </div>

                <div className="mindTopTexts">
                    <p className="mindTopTitle">MINDSHARE MINING</p>

                    <p className="mindTopPoints">Earn for X Activity</p>

                    <p className="mindTopText">
                        You&rsquo;re eligible to join. Connect X!
                    </p>
                </div>

                <button className="mainGradientButton mindTopButton">
                    Connect X account
                </button>
            </div>

            <div className="mindStats">
                <div className="mindStatsTop">
                    <div className="mindStatsTopWrap">
                        <p className="title2 mindStatsTopTitle">Epoch 4 is live</p>

                        <p className="mindStatsTopText">
                            Rewards can be claimed after the epoch ends
                        </p>
                    </div>

                    <div className="mindStatsTopCoundown">
                        <div className="mindStatsTopCoundownItem">
                            <p className="mindStatsTopCoundownItemTitle">00</p>
                            <p className="mindStatsTopCoundownItemText">hours</p>
                        </div>
                        <p className="mindStatsTopCoundownDots">:</p>
                        <div className="mindStatsTopCoundownItem">
                            <p className="mindStatsTopCoundownItemTitle">00</p>
                            <p className="mindStatsTopCoundownItemText">minutes</p>
                        </div>
                        <p className="mindStatsTopCoundownDots">:</p>
                        <div className="mindStatsTopCoundownItem">
                            <p className="mindStatsTopCoundownItemTitle">00</p>
                            <p className="mindStatsTopCoundownItemText">seconds</p>
                        </div>
                    </div>
                </div>

                <div className="mindStatsItems">
                    <div className="mindStatsItem">
                        <p className="mindStatsItemTitle">
                            $750
                        </p>

                        <p className="mindStatsItemText">
                            Rewards Pool
                        </p>
                    </div>

                    <div className="mindStatsItem">
                        <p className="mindStatsItemTitle">
                            $750
                        </p>

                        <p className="mindStatsItemText">
                            Last Epoch Rewards (22 Jan, 2026)
                        </p>
                    </div>

                    <div className="mindStatsItem">
                        <p className="mindStatsItemTitle">
                            $2,250
                        </p>

                        <p className="mindStatsItemText">
                            Total earnings
                        </p>
                    </div>
                </div>
            </div>

            <div className="mindTableInner">
                <div className="mindTableTexts">
                    <p className="title2">Epoch 4 Leaderboard</p>
                    <p className="mindTableText">Only the top 50 players will receive rewards</p>
                </div>

                <div className="mindTable">
                    <div className="mindTableItem active">
                        <div className="mindTableItemNum">
                            <p className="mindTableItemNumValue">39482</p>
                        </div>

                        <div className="mindTableItemUser">
                            <div className="mindTableItemUserWrap">
                                <UserAvatar image="/img/token1.png" />

                                <div className="mindTableItemUserInfo">
                                    <p className="mindTableItemUserTitle">
                                        User
                                    </p>

                                    <p className="mindTableItemUserName">
                                        User_9185151
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mindTableItemTextBlock mindTableItemX">
                            <a href="#" target="_blank" className="mindTableItemXLink">
                                <X2 />
                            </a>

                            <p className="mindTableItemValue">
                                56.63
                            </p>
                        </div>

                        <div className="mindTableItemTextBlock">
                            <p className="mindTableItemText">
                                Posts
                            </p>

                            <p className="mindTableItemValue">
                                1
                            </p>
                        </div>

                        <div className="mindTableItemTextBlock">
                            <p className="mindTableItemText">
                                Epoch Rewards
                            </p>

                            <p className="mindTableItemValue green">
                                TBC
                            </p>
                        </div>

                        <div className="mindTableItemTextBlock">
                            <p className="mindTableItemText">
                                All-time Rewards
                            </p>

                            <p className="mindTableItemValue green">
                                $6.3
                            </p>
                        </div>

                        <div className="mindTableItemTextBlock">
                            <p className="mindTableItemText">
                                All-time Points
                            </p>

                            <p className="mindTableItemValue">
                                258
                            </p>
                        </div>

                        <div className="mindTableItemTotal">
                            <p className="mindTableItemTotalTitle">
                                Epoch Points
                            </p>

                            <p className="mindTableItemTotalValue">
                                34
                            </p>
                        </div>
                    </div>

                    <div className="mindTableItem">
                        <div className="mindTableItemNum">
                            <p className="mindTableItemNumValue">1</p>
                        </div>

                        <div className="mindTableItemUser">
                            <div className="mindTableItemUserWrap">
                                <UserAvatar image="/img/token1.png" />

                                <div className="mindTableItemUserInfo">
                                    <p className="mindTableItemUserTitle">
                                        User
                                    </p>

                                    <p className="mindTableItemUserName">
                                        User_9185151
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mindTableItemTextBlock mindTableItemX">
                            <a href="#" target="_blank" className="mindTableItemXLink">
                                <X2 />
                            </a>

                            <p className="mindTableItemValue">
                                56.63
                            </p>
                        </div>

                        <div className="mindTableItemTextBlock">
                            <p className="mindTableItemText">
                                Posts
                            </p>

                            <p className="mindTableItemValue">
                                1
                            </p>
                        </div>

                        <div className="mindTableItemTextBlock">
                            <p className="mindTableItemText">
                                Epoch Rewards
                            </p>

                            <p className="mindTableItemValue green">
                                TBC
                            </p>
                        </div>

                        <div className="mindTableItemTextBlock">
                            <p className="mindTableItemText">
                                All-time Rewards
                            </p>

                            <p className="mindTableItemValue green">
                                $6.3
                            </p>
                        </div>

                        <div className="mindTableItemTextBlock">
                            <p className="mindTableItemText">
                                All-time Points
                            </p>

                            <p className="mindTableItemValue">
                                258
                            </p>
                        </div>

                        <div className="mindTableItemTotal">
                            <p className="mindTableItemTotalTitle">
                                Epoch Points
                            </p>

                            <p className="mindTableItemTotalValue">
                                34
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MindshareMining;
