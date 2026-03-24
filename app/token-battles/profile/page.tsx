import React from "react";
import Image from "next/image";

import "./index.scss";

import { Chart3, Diamond, Fire2, Light2, Target2, Trophy, Warn3 } from "@/shared/icons";

const ProfileBattle = () => {
    return <>
        <div className="battleProfileContent">
            <div className="battleProfileTop">
                <div className="battleProfileTopInfo">
                    <div className="battleProfileTopImageInner">
                        <div className="battleProfileTopImage">
                            <Image src="/img/token1.png" alt="Image" fill />
                        </div>
                    </div>

                    <div className="battleProfileTopInfoWrap">
                        <div className="battleProfileTopInfoNameInner">
                            <p className="battleProfileTopInfoName">
                                Snoooprew
                            </p>

                            <div className="battleProfileTopInfoPoints">
                                <p className="battleProfileTopInfoPoint yellow">
                                    Top trader
                                </p>

                                <p className="battleProfileTopInfoPoint green">
                                    Online
                                </p>
                            </div>
                        </div>

                        <div className="battleProfileTopInfoTags">
                            <p className="battleProfileTopInfoTag">
                                Joined 3 months ago
                            </p>

                            <p className="battleProfileTopInfoTag">
                                Last battle 25 min ago
                            </p>
                        </div>
                    </div>
                </div>

                <div className="battleProfileTopButtons">
                    <button className="outlinedButton battleProfileTopButton">
                        Follow
                    </button>

                    <button className="mainGradientButton battleProfileTopButton">
                        Challenge
                    </button>
                </div>
            </div>

            <div className="battleProfileStats">
                <div className="battleProfileStat">
                    <p className="battleProfileStatTitle">
                        Battles
                    </p>

                    <p className="battleProfileStatValue green">
                        +4354$
                    </p>
                </div>

                <div className="battleProfileStat">
                    <p className="battleProfileStatTitle">
                        Wins
                    </p>

                    <p className="battleProfileStatValue green">
                        54
                    </p>
                </div>

                <div className="battleProfileStat">
                    <p className="battleProfileStatTitle">
                        Win rate
                    </p>

                    <p className="battleProfileStatValue green">
                        56%
                    </p>
                </div>

                <div className="battleProfileStat">
                    <p className="battleProfileStatTitle">
                        Total earned
                    </p>

                    <p className="battleProfileStatValue green">
                        +4354$
                    </p>
                </div>

                <div className="battleProfileStat">
                    <p className="battleProfileStatTitle">
                        Best pnl
                    </p>

                    <p className="battleProfileStatValue yellow">
                        +4354$
                    </p>
                </div>

                <div className="battleProfileStat">
                    <p className="battleProfileStatTitle">
                        Streak
                    </p>

                    <p className="battleProfileStatValue green">
                        5
                    </p>
                </div>
            </div>

            <div className="battleProfileWrapper">
                <div className="battleProfileHead">
                    <p className="title2 battleProfileHeadTitle">
                        HEAD-TO-HEAD vs YOU
                    </p>

                    <div className="battleProfileHeadUsers">
                        <div className="battleProfileHeadUser">
                            <div className="battleProfileHeadUserImageInner">
                                <div className="battleProfileHeadUserImage">
                                    <Image src="/img/token1.png" alt="image" fill />
                                </div>
                            </div>

                            <p className="battleProfileHeadUserName">
                                SNOOPSNOOP
                            </p>
                        </div>

                        <div className="battleProfileHeadUserContent">
                            <p className="battleProfileHeadUserContentValue yellow">
                                7
                            </p>

                            <div className="battleProfileHeadUserContentVs">
                                <span>V</span>
                                <span>S</span>
                            </div>

                            <p className="battleProfileHeadUserContentValue green">
                                4
                            </p>
                        </div>

                        <div className="battleProfileHeadUser">
                            <div className="battleProfileHeadUserImageInner">
                                <div className="battleProfileHeadUserImage">
                                    <Image src="/img/token2.png" alt="image" fill />
                                </div>
                            </div>

                            <p className="battleProfileHeadUserName">
                                YOU
                            </p>
                        </div>
                    </div>

                    <div className="battleProfileHeadStats">
                        <div className="battleProfileHeadStat">
                            <p className="battleProfileHeadStatValue yellow">
                                +$842
                            </p>

                            <div className="battleProfileHeadStatLineInner">
                                <p className="battleProfileHeadStatLineTitle">
                                    Avg PnL
                                </p>

                                <div className="battleProfileHeadStatLine">
                                    <div className="battleProfileHeadStatLineProgress yellowLine" style={{width: "55%"}}></div>
                                </div>
                            </div>

                            <p className="battleProfileHeadStatValue green">
                                +$842
                            </p>
                        </div>

                        <div className="battleProfileHeadStat">
                            <p className="battleProfileHeadStatValue yellow">
                                +$842
                            </p>

                            <div className="battleProfileHeadStatLineInner">
                                <p className="battleProfileHeadStatLineTitle">
                                    Win Rate
                                </p>

                                <div className="battleProfileHeadStatLine">
                                    <div className="battleProfileHeadStatLineProgress yellowLine" style={{width: "85%"}}></div>
                                </div>
                            </div>

                            <p className="battleProfileHeadStatValue green">
                                +$842
                            </p>
                        </div>

                        <div className="battleProfileHeadStat">
                            <p className="battleProfileHeadStatValue yellow">
                                +$842
                            </p>

                            <div className="battleProfileHeadStatLineInner">
                                <p className="battleProfileHeadStatLineTitle">
                                    Avg Trades
                                </p>

                                <div className="battleProfileHeadStatLine">
                                    <div className="battleProfileHeadStatLineProgress yellowLine" style={{width: "55%"}}></div>
                                </div>
                            </div>

                            <p className="battleProfileHeadStatValue green">
                                +$842
                            </p>
                        </div>

                        <div className="battleProfileHeadStat">
                            <p className="battleProfileHeadStatValue yellow">
                                +$842
                            </p>

                            <div className="battleProfileHeadStatLineInner">
                                <p className="battleProfileHeadStatLineTitle">
                                    Avg Best PnL
                                </p>

                                <div className="battleProfileHeadStatLine">
                                    <div className="battleProfileHeadStatLineProgress yellowLine" style={{width: "25%"}}></div>
                                </div>
                            </div>

                            <p className="battleProfileHeadStatValue green">
                                +$842
                            </p>
                        </div>

                        <div className="battleProfileHeadStat">
                            <p className="battleProfileHeadStatValue red">
                                +$842
                            </p>

                            <div className="battleProfileHeadStatLineInner">
                                <p className="battleProfileHeadStatLineTitle">
                                    Avg Risk
                                </p>

                                <div className="battleProfileHeadStatLine">
                                    <div className="battleProfileHeadStatLineProgress redLine" style={{width: "50%"}}></div>
                                </div>
                            </div>

                            <p className="battleProfileHeadStatValue green">
                                +$842
                            </p>
                        </div>
                    </div>

                    <div className="battleProfileHeadMatchups">
                        <p className="battleProfileHeadMatchupsTitle">
                            RECENT MATCHUPS
                        </p>

                        <div className="battleProfileHeadMatchupsItems">
                            <div className="battleProfileHeadMatchupsItem">
                                <div className="battleProfileHeadMatchupsItemInfo">
                                    <p className="battleProfileHeadMatchupsItemInfoName">
                                        PEPE
                                    </p>

                                    <p className="battleProfileHeadMatchupsItemInfoVs">
                                        <span className="green">$847</span> vs <span className="red">$623</span>
                                    </p>
                                </div>

                                <div className="battleProfileHeadMatchupsItemStatus">
                                    <p className="battleProfileHeadMatchupsItemResult green">SN won</p>

                                    <p className="battleProfileHeadMatchupsItemStatusValue">
                                        25m ago
                                    </p>
                                </div>
                            </div>

                            <div className="battleProfileHeadMatchupsItem">
                                <div className="battleProfileHeadMatchupsItemInfo">
                                    <p className="battleProfileHeadMatchupsItemInfoName">
                                        PEPE
                                    </p>

                                    <p className="battleProfileHeadMatchupsItemInfoVs">
                                        <span className="green">$847</span> vs <span className="red">$623</span>
                                    </p>
                                </div>

                                <div className="battleProfileHeadMatchupsItemStatus">
                                    <p className="battleProfileHeadMatchupsItemResult yellow">SN won</p>

                                    <p className="battleProfileHeadMatchupsItemStatusValue">
                                        25m ago
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="battleProfileAchi">
                    <div className="battleProfileAchiContent">
                        <p className="title2 battleProfileAchiTitle">Achievements</p>

                        <div className="battleProfileAchiItems">
                            <div className="battleProfileAchiItem">
                                <div className="battleProfileAchiItemIcon">
                                    <Trophy />
                                </div>

                                <div className="battleProfileAchiItemTextBlock">
                                    <p className="battleProfileAchiItemTitle">
                                        Battle Champion
                                    </p>

                                    <p className="battleProfileAchiItemText">
                                        Won 50+ battles
                                    </p>
                                </div>
                            </div>

                            <div className="battleProfileAchiItem">
                                <div className="battleProfileAchiItemIcon">
                                    <Fire2 />
                                </div>

                                <div className="battleProfileAchiItemTextBlock">
                                    <p className="battleProfileAchiItemTitle">
                                        On Fire
                                    </p>

                                    <p className="battleProfileAchiItemText">
                                        5 win streak (current)
                                    </p>
                                </div>
                            </div>

                            <div className="battleProfileAchiItem">
                                <div className="battleProfileAchiItemIcon">
                                    <Chart3 />
                                </div>

                                <div className="battleProfileAchiItemTextBlock">
                                    <p className="battleProfileAchiItemTitle">
                                        Profit King
                                    </p>

                                    <p className="battleProfileAchiItemText">
                                        Single battle PnL over $3,000
                                    </p>
                                </div>
                            </div>

                            <div className="battleProfileAchiItem">
                                <div className="battleProfileAchiItemIcon">
                                    <Light2 />
                                </div>

                                <div className="battleProfileAchiItemTextBlock">
                                    <p className="battleProfileAchiItemTitle">
                                        Speed Demon
                                    </p>

                                    <p className="battleProfileAchiItemText">
                                        Won a 2-minute battle
                                    </p>
                                </div>
                            </div>

                            <div className="battleProfileAchiItem">
                                <div className="battleProfileAchiItemIcon">
                                    <Diamond />
                                </div>

                                <div className="battleProfileAchiItemTextBlock">
                                    <p className="battleProfileAchiItemTitle">
                                        Diamond Hands
                                    </p>

                                    <p className="battleProfileAchiItemText">
                                        Held one position entire battle
                                    </p>
                                </div>
                            </div>

                            <div className="battleProfileAchiItem disable">
                                <div className="battleProfileAchiItemIcon">
                                    <Target2 />
                                </div>

                                <div className="battleProfileAchiItemTextBlock">
                                    <p className="battleProfileAchiItemTitle">
                                        Sniper
                                    </p>

                                    <p className="battleProfileAchiItemText">
                                        80%+ win rate in 10+ battles
                                    </p>
                                </div>
                            </div>

                            <div className="battleProfileAchiItem disable">
                                <div className="battleProfileAchiItemIcon">
                                    <Warn3 />
                                </div>

                                <div className="battleProfileAchiItemTextBlock">
                                    <p className="battleProfileAchiItemTitle">
                                        Risk Manager
                                    </p>

                                    <p className="battleProfileAchiItemText">
                                        Won with &lt;30% avg exposure
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="battleProfileAchiHistory">
                        <p className="title2 battleProfileAchiTitle">Pnl history (LAST 20 BATTLES)</p>

                        <div className="battleProfileAchiHistoryChart">
                            <div className="battleProfileAchiHistoryChartItem">
                                <div className="battleProfileAchiHistoryChartItemPositiveInner">
                                    <div className="battleProfileAchiHistoryChartItemPositive" style={{height: "45%"}}></div>
                                </div>

                                <div className="battleProfileAchiHistoryChartItemNegativeInner">
                                    <div className="battleProfileAchiHistoryChartItemNegative"></div>
                                </div>
                            </div>

                            <div className="battleProfileAchiHistoryChartItem">
                                <div className="battleProfileAchiHistoryChartItemPositiveInner">
                                    <div className="battleProfileAchiHistoryChartItemPositive" style={{height: "100%"}}></div>
                                </div>

                                <div className="battleProfileAchiHistoryChartItemNegativeInner">
                                    <div className="battleProfileAchiHistoryChartItemNegative"></div>
                                </div>
                            </div>

                            <div className="battleProfileAchiHistoryChartItem">
                                <div className="battleProfileAchiHistoryChartItemPositiveInner">
                                    <div className="battleProfileAchiHistoryChartItemPositive"></div>
                                </div>

                                <div className="battleProfileAchiHistoryChartItemNegativeInner">
                                    <div className="battleProfileAchiHistoryChartItemNegative" style={{height: "33%"}}></div>
                                </div>
                            </div>

                            <div className="battleProfileAchiHistoryChartItem">
                                <div className="battleProfileAchiHistoryChartItemPositiveInner">
                                    <div className="battleProfileAchiHistoryChartItemPositive" style={{height: "100%"}}></div>
                                </div>

                                <div className="battleProfileAchiHistoryChartItemNegativeInner">
                                    <div className="battleProfileAchiHistoryChartItemNegative"></div>
                                </div>
                            </div>

                            <div className="battleProfileAchiHistoryChartItem">
                                <div className="battleProfileAchiHistoryChartItemPositiveInner">
                                    <div className="battleProfileAchiHistoryChartItemPositive" style={{height: "30%"}}></div>
                                </div>

                                <div className="battleProfileAchiHistoryChartItemNegativeInner">
                                    <div className="battleProfileAchiHistoryChartItemNegative"></div>
                                </div>
                            </div>

                            <div className="battleProfileAchiHistoryChartItem">
                                <div className="battleProfileAchiHistoryChartItemPositiveInner">
                                    <div className="battleProfileAchiHistoryChartItemPositive" style={{height: "100%"}}></div>
                                </div>

                                <div className="battleProfileAchiHistoryChartItemNegativeInner">
                                    <div className="battleProfileAchiHistoryChartItemNegative"></div>
                                </div>
                            </div>

                            <div className="battleProfileAchiHistoryChartItem">
                                <div className="battleProfileAchiHistoryChartItemPositiveInner">
                                    <div className="battleProfileAchiHistoryChartItemPositive" style={{height: "50%"}}></div>
                                </div>

                                <div className="battleProfileAchiHistoryChartItemNegativeInner">
                                    <div className="battleProfileAchiHistoryChartItemNegative"></div>
                                </div>
                            </div>

                            <div className="battleProfileAchiHistoryChartItem">
                                <div className="battleProfileAchiHistoryChartItemPositiveInner">
                                    <div className="battleProfileAchiHistoryChartItemPositive" style={{height: "67%"}}></div>
                                </div>

                                <div className="battleProfileAchiHistoryChartItemNegativeInner">
                                    <div className="battleProfileAchiHistoryChartItemNegative"></div>
                                </div>
                            </div>

                            <div className="battleProfileAchiHistoryChartItem">
                                <div className="battleProfileAchiHistoryChartItemPositiveInner">
                                    <div className="battleProfileAchiHistoryChartItemPositive"></div>
                                </div>

                                <div className="battleProfileAchiHistoryChartItemNegativeInner">
                                    <div className="battleProfileAchiHistoryChartItemNegative" style={{height: "17%"}}></div>
                                </div>
                            </div>

                            <div className="battleProfileAchiHistoryChartItem">
                                <div className="battleProfileAchiHistoryChartItemPositiveInner">
                                    <div className="battleProfileAchiHistoryChartItemPositive" style={{height: "52%"}}></div>
                                </div>

                                <div className="battleProfileAchiHistoryChartItemNegativeInner">
                                    <div className="battleProfileAchiHistoryChartItemNegative"></div>
                                </div>
                            </div>

                            <div className="battleProfileAchiHistoryChartItem">
                                <div className="battleProfileAchiHistoryChartItemPositiveInner">
                                    <div className="battleProfileAchiHistoryChartItemPositive" style={{height: "100%"}}></div>
                                </div>

                                <div className="battleProfileAchiHistoryChartItemNegativeInner">
                                    <div className="battleProfileAchiHistoryChartItemNegative"></div>
                                </div>
                            </div>

                            <div className="battleProfileAchiHistoryChartItem">
                                <div className="battleProfileAchiHistoryChartItemPositiveInner">
                                    <div className="battleProfileAchiHistoryChartItemPositive" style={{height: "75%"}}></div>
                                </div>

                                <div className="battleProfileAchiHistoryChartItemNegativeInner">
                                    <div className="battleProfileAchiHistoryChartItemNegative"></div>
                                </div>
                            </div>

                            <div className="battleProfileAchiHistoryChartItem">
                                <div className="battleProfileAchiHistoryChartItemPositiveInner">
                                    <div className="battleProfileAchiHistoryChartItemPositive" style={{height: "31%"}}></div>
                                </div>

                                <div className="battleProfileAchiHistoryChartItemNegativeInner">
                                    <div className="battleProfileAchiHistoryChartItemNegative"></div>
                                </div>
                            </div>

                            <div className="battleProfileAchiHistoryChartItem">
                                <div className="battleProfileAchiHistoryChartItemPositiveInner">
                                    <div className="battleProfileAchiHistoryChartItemPositive" style={{height: "67%"}}></div>
                                </div>

                                <div className="battleProfileAchiHistoryChartItemNegativeInner">
                                    <div className="battleProfileAchiHistoryChartItemNegative"></div>
                                </div>
                            </div>

                            <div className="battleProfileAchiHistoryChartItem">
                                <div className="battleProfileAchiHistoryChartItemPositiveInner">
                                    <div className="battleProfileAchiHistoryChartItemPositive"></div>
                                </div>

                                <div className="battleProfileAchiHistoryChartItemNegativeInner">
                                    <div className="battleProfileAchiHistoryChartItemNegative" style={{height: "45%"}}></div>
                                </div>
                            </div>

                            <div className="battleProfileAchiHistoryChartItem">
                                <div className="battleProfileAchiHistoryChartItemPositiveInner">
                                    <div className="battleProfileAchiHistoryChartItemPositive" style={{height: "75%"}}></div>
                                </div>

                                <div className="battleProfileAchiHistoryChartItemNegativeInner">
                                    <div className="battleProfileAchiHistoryChartItemNegative"></div>
                                </div>
                            </div>

                            <div className="battleProfileAchiHistoryChartItem">
                                <div className="battleProfileAchiHistoryChartItemPositiveInner">
                                    <div className="battleProfileAchiHistoryChartItemPositive" style={{height: "100%"}}></div>
                                </div>

                                <div className="battleProfileAchiHistoryChartItemNegativeInner">
                                    <div className="battleProfileAchiHistoryChartItemNegative"></div>
                                </div>
                            </div>

                            <div className="battleProfileAchiHistoryChartItem">
                                <div className="battleProfileAchiHistoryChartItemPositiveInner">
                                    <div className="battleProfileAchiHistoryChartItemPositive" style={{height: "52%"}}></div>
                                </div>

                                <div className="battleProfileAchiHistoryChartItemNegativeInner">
                                    <div className="battleProfileAchiHistoryChartItemNegative"></div>
                                </div>
                            </div>

                            <div className="battleProfileAchiHistoryChartItem">
                                <div className="battleProfileAchiHistoryChartItemPositiveInner">
                                    <div className="battleProfileAchiHistoryChartItemPositive" style={{height: "67%"}}></div>
                                </div>

                                <div className="battleProfileAchiHistoryChartItemNegativeInner">
                                    <div className="battleProfileAchiHistoryChartItemNegative"></div>
                                </div>
                            </div>

                            <div className="battleProfileAchiHistoryChartItem">
                                <div className="battleProfileAchiHistoryChartItemPositiveInner">
                                    <div className="battleProfileAchiHistoryChartItemPositive" style={{height: "100%"}}></div>
                                </div>

                                <div className="battleProfileAchiHistoryChartItemNegativeInner">
                                    <div className="battleProfileAchiHistoryChartItemNegative"></div>
                                </div>
                            </div>

                            <div className="battleProfileAchiHistoryChartItem">
                                <div className="battleProfileAchiHistoryChartItemPositiveInner">
                                    <div className="battleProfileAchiHistoryChartItemPositive"></div>
                                </div>

                                <div className="battleProfileAchiHistoryChartItemNegativeInner">
                                    <div className="battleProfileAchiHistoryChartItemNegative" style={{height: "55%"}}></div>
                                </div>
                            </div>

                            <div className="battleProfileAchiHistoryChartItem">
                                <div className="battleProfileAchiHistoryChartItemPositiveInner">
                                    <div className="battleProfileAchiHistoryChartItemPositive" style={{height: "45%"}}></div>
                                </div>

                                <div className="battleProfileAchiHistoryChartItemNegativeInner">
                                    <div className="battleProfileAchiHistoryChartItemNegative"></div>
                                </div>
                            </div>

                            <div className="battleProfileAchiHistoryChartItem">
                                <div className="battleProfileAchiHistoryChartItemPositiveInner">
                                    <div className="battleProfileAchiHistoryChartItemPositive" style={{height: "67%"}}></div>
                                </div>

                                <div className="battleProfileAchiHistoryChartItemNegativeInner">
                                    <div className="battleProfileAchiHistoryChartItemNegative"></div>
                                </div>
                            </div>

                            <div className="battleProfileAchiHistoryChartItem">
                                <div className="battleProfileAchiHistoryChartItemPositiveInner">
                                    <div className="battleProfileAchiHistoryChartItemPositive" style={{height: "100%"}}></div>
                                </div>

                                <div className="battleProfileAchiHistoryChartItemNegativeInner">
                                    <div className="battleProfileAchiHistoryChartItemNegative"></div>
                                </div>
                            </div>

                            <div className="battleProfileAchiHistoryChartItem">
                                <div className="battleProfileAchiHistoryChartItemPositiveInner">
                                    <div className="battleProfileAchiHistoryChartItemPositive"></div>
                                </div>

                                <div className="battleProfileAchiHistoryChartItemNegativeInner">
                                    <div className="battleProfileAchiHistoryChartItemNegative" style={{height: "20%"}}></div>
                                </div>
                            </div>

                            <div className="battleProfileAchiHistoryChartItem">
                                <div className="battleProfileAchiHistoryChartItemPositiveInner">
                                    <div className="battleProfileAchiHistoryChartItemPositive" style={{height: "67%"}}></div>
                                </div>

                                <div className="battleProfileAchiHistoryChartItemNegativeInner">
                                    <div className="battleProfileAchiHistoryChartItemNegative"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="battleProfileRecent">
            <p className="title2">
                Recent battles
            </p>

            <div className="battleProfileRecentItems">
                <div className="battleProfileRecentItem">
                    <div className="battleProfileRecentItemInfo">
                        <div className="battleProfileRecentItemIcon">
                            <Trophy />
                        </div>

                        <p className="battleProfileRecentItemName">
                            PEPE Battle
                        </p>

                        <div className="battleProfileRecentItemTags">
                            <p className="battleProfileRecentItemTag">4 players</p>
                            <p className="battleProfileRecentItemTag">25m ago</p>
                        </div>
                    </div>

                    <div className="battleProfileRecentItemValues">
                        <p className="battleProfileRecentItemNum">#1</p>
                        <p className="battleProfileRecentItemProfit">+$847.32</p>
                        <p className="battleProfileRecentItemPrize">+$400 prize</p>
                    </div>
                </div>

                <div className="battleProfileRecentItem">
                    <div className="battleProfileRecentItemInfo">
                        <div className="battleProfileRecentItemIcon">
                            <Trophy />
                        </div>

                        <p className="battleProfileRecentItemName">
                            PEPE Battle
                        </p>

                        <div className="battleProfileRecentItemTags">
                            <p className="battleProfileRecentItemTag">4 players</p>
                            <p className="battleProfileRecentItemTag">25m ago</p>
                        </div>
                    </div>

                    <div className="battleProfileRecentItemValues">
                        <p className="battleProfileRecentItemNum">#2</p>
                        <p className="battleProfileRecentItemProfit">+$847.32</p>
                        <p className="battleProfileRecentItemPrize">+$400 prize</p>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default ProfileBattle;
