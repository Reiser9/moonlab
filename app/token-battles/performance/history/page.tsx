import { Trophy } from "@/shared/icons";
import React from "react";

const HistoryPage = () => {
    return (
        <div className="perHistoryContent">
            <div className="perHistoryTop">
                <div className="perHistoryTopWrap">
                    <p className="title2">History</p>

                    <div className="perHistoryTopTabs">
                        <button className="perHistoryTopTab active">
                            All (24)
                        </button>

                        <button className="perHistoryTopTab">
                            Wins (14)
                        </button>

                        <button className="perHistoryTopTab">
                            Losses (10)
                        </button>
                    </div>
                </div>

                <p className="perHistoryProfit green">
                    Total: +$4,280
                </p>
            </div>

            <div className="perHistoryItems">
                <div className="battleProfileRecentItem">
                    <div className="battleProfileRecentItemInfo">
                        <div className="battleProfileRecentItemIcon">
                            <Trophy />
                        </div>

                        <p className="battleProfileRecentItemName">
                            PEPE Battle
                        </p>

                        <div className="battleProfileRecentItemTags">
                            <p className="battleProfileRecentItemTag">
                                4 players
                            </p>
                            <p className="battleProfileRecentItemTag">
                                25m ago
                            </p>
                        </div>
                    </div>

                    <div className="battleProfileRecentItemValues">
                        <p className="battleProfileRecentItemNum">#1</p>
                        <p className="battleProfileRecentItemProfit">
                            +$847.32
                        </p>
                        <p className="battleProfileRecentItemPrize">
                            +$400 prize
                        </p>
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
                            <p className="battleProfileRecentItemTag">
                                4 players
                            </p>
                            <p className="battleProfileRecentItemTag">
                                25m ago
                            </p>
                        </div>
                    </div>

                    <div className="battleProfileRecentItemValues">
                        <p className="battleProfileRecentItemNum">#2</p>
                        <p className="battleProfileRecentItemProfit">
                            +$847.32
                        </p>
                        <p className="battleProfileRecentItemPrize">
                            +$400 prize
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryPage;
