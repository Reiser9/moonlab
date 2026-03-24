import React from "react";
import Image from "next/image";

import { Fire2, Trophy } from "@/shared/icons";

const TradingPage = () => {
    return (
        <div className="perTradingContent">
            <div className="perTradingWrap">
                <div className="perTradingStyleWrap">
                    <p className="title2">Your Trading DNA</p>
                </div>

                <div className="perTradingStyleWrap">
                    <p className="title2">Style Breakdown</p>

                    <div className="perTradingStyleItems">
                        <div className="perTradingStyleItem">
                            <div className="perTradingStyleItemTextBlock">
                                <p className="perTradingStyleItemTitle">Avg Trade Size</p>

                                <div className="perTradingStyleItemWrap">
                                    <p className="perTradingStyleItemText">Moderate position sizing</p>
                                    <p className="perTradingStyleItemNum purple">48%</p>
                                </div>
                            </div>

                            <div className="perDurItemLine">
                                <div
                                    className="perDurItemLineProgress purple"
                                    style={{ width: "40%" }}
                                ></div>
                            </div>
                        </div>

                        <div className="perTradingStyleItem">
                            <div className="perTradingStyleItemTextBlock">
                                <p className="perTradingStyleItemTitle">Avg Trade Size</p>

                                <div className="perTradingStyleItemWrap">
                                    <p className="perTradingStyleItemText">Moderate position sizing</p>
                                    <p className="perTradingStyleItemNum darkpurple">48%</p>
                                </div>
                            </div>

                            <div className="perDurItemLine">
                                <div
                                    className="perDurItemLineProgress darkpurple"
                                    style={{ width: "20%" }}
                                ></div>
                            </div>
                        </div>

                        <div className="perTradingStyleItem">
                            <div className="perTradingStyleItemTextBlock">
                                <p className="perTradingStyleItemTitle">Avg Trade Size</p>

                                <div className="perTradingStyleItemWrap">
                                    <p className="perTradingStyleItemText">Moderate position sizing</p>
                                    <p className="perTradingStyleItemNum lightblue">48%</p>
                                </div>
                            </div>

                            <div className="perDurItemLine">
                                <div
                                    className="perDurItemLineProgress lightblue"
                                    style={{ width: "10%" }}
                                ></div>
                            </div>
                        </div>

                        <div className="perTradingStyleItem">
                            <div className="perTradingStyleItemTextBlock">
                                <p className="perTradingStyleItemTitle">Avg Trade Size</p>

                                <div className="perTradingStyleItemWrap">
                                    <p className="perTradingStyleItemText">Moderate position sizing</p>
                                    <p className="perTradingStyleItemNum red">48%</p>
                                </div>
                            </div>

                            <div className="perDurItemLine">
                                <div
                                    className="perDurItemLineProgress red"
                                    style={{ width: "60%" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="perTradingWrap">
                <div className="perTradingPosition">
                    <p className="perTradingPositionTitle">
                        Long
                    </p>

                    <div className="perDurItemLine">
                        <div
                            className="perDurItemLineProgress green"
                            style={{ width: "40%" }}
                        ></div>
                    </div>

                    <div className="perDurItemInfoTexts">
                        <p className="perBattleTypeItemText">Win rate: </p>
                        <p className="perBattleTypeItemText">Avg PnL</p>
                    </div>

                    <div className="perDurItemInfo green">
                        <p className="perDurItemValue">63%</p>
                        <p className="perDurItemValue">+$1,240</p>
                    </div>
                </div>

                <div className="perTradingPosition">
                    <p className="perTradingPositionTitle">
                        Short
                    </p>

                    <div className="perDurItemLine">
                        <div
                            className="perDurItemLineProgress red"
                            style={{ width: "20%" }}
                        ></div>
                    </div>

                    <div className="perDurItemInfoTexts">
                        <p className="perBattleTypeItemText">Win rate: </p>
                        <p className="perBattleTypeItemText">Avg PnL</p>
                    </div>

                    <div className="perDurItemInfo red">
                        <p className="perDurItemValue">48%</p>
                        <p className="perDurItemValue">+$1,240</p>
                    </div>
                </div>
            </div>

            <p className="title2">Favorite Tokens</p>

            <div className="perFavoriteItems">
                <div className="perFavoriteItem">
                    <div className="perFavoriteItemInfo">
                        <p className="perFavoriteItemNum">
                            №1
                        </p>

                        <div className="perFavoriteItemImage">
                            <Image src="/img/token1.png" alt="image" fill />
                        </div>

                        <p className="perFavoriteItemName">
                            PEPE Battle
                        </p>

                        <p className="perFavoriteItemText">
                            8 battles
                        </p>
                    </div>

                    <div className="perFavoriteItemStats">
                        <p className="perFavoriteItemWr red">
                            15% WR
                        </p>

                        <p className="perFavoriteItemStatsProfit red">
                            -$1,840
                        </p>
                    </div>
                </div>

                <div className="perFavoriteItem">
                    <div className="perFavoriteItemInfo">
                        <p className="perFavoriteItemNum">
                            №1
                        </p>

                        <div className="perFavoriteItemImage">
                            <Image src="/img/token1.png" alt="image" fill />
                        </div>

                        <p className="perFavoriteItemName">
                            PEPE Battle
                        </p>

                        <p className="perFavoriteItemText">
                            8 battles
                        </p>
                    </div>

                    <div className="perFavoriteItemStats">
                        <p className="perFavoriteItemWr green">
                            75% WR
                        </p>

                        <p className="perFavoriteItemStatsProfit green">
                            +$1,840
                        </p>
                    </div>
                </div>
            </div>

            <p className="title2">Performance by Battle Type</p>

            <div className="typeItems">
                <div className="typeItem">
                    <div className="typeItemWrap">
                        <div className="typeItemIcon">
                            <Trophy />
                        </div>

                        <p className="typeItemName">
                            Won ELON Battle — placed #1
                        </p>
                    </div>

                    <div className="typeItemStatus">
                        <p className="typeItemProfit yellow">+$2,100</p>

                        <p className="typeItemStatusValue">1h ago</p>
                    </div>
                </div>

                <div className="typeItem">
                    <div className="typeItemWrap">
                        <div className="typeItemIcon">
                            <Fire2 />
                        </div>

                        <p className="typeItemName">
                            Achievement unlocked: Hot Streak
                        </p>
                    </div>

                    <div className="typeItemStatus">
                        <p className="typeItemProfit yellow">3 wins</p>

                        <p className="typeItemStatusValue">1h ago</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TradingPage;
