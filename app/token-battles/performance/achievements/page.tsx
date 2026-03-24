import React from "react";

import { Fire2, Lock2, Trophy } from "@/shared/icons";

const AchievementsPage = () => {
    return <div className="perAchiContent">
        <div className="perAchiTitleInner">
            <p className="title2">Achievements</p>

            <p className="perAchiText">6 / 15 unlocked</p>
        </div>

        <div className="perAchiItems">
            <div className="perAchiItem">
                <div className="perAchiItemInfo">
                    <Fire2 className="purple" />

                    <div className="perAchiItemInfoTextBlock">
                        <p className="perAchiItemInfoTitle">
                            Hot Streak
                        </p>

                        <p className="perAchiItemInfoText">
                            Win 3 battles in a row
                        </p>
                    </div>
                </div>

                <p className="perAchiItemStatus">
                    <Lock2 />
                     Unlocked
                </p>
            </div>

            <div className="perAchiItem">
                <div className="perAchiItemInfo">
                    <Fire2 className="yellow" />

                    <div className="perAchiItemInfoTextBlock">
                        <p className="perAchiItemInfoTitle">
                            Profit Machine
                        </p>

                        <p className="perAchiItemInfoText">
                            Win 3 battles in a row
                        </p>
                    </div>
                </div>

                <p className="perAchiItemStatus">
                    <Lock2 />
                     Unlocked
                </p>
            </div>

            <div className="perAchiItem">
                <div className="perAchiItemInfo">
                    <Fire2 className="green" />

                    <div className="perAchiItemInfoTextBlock">
                        <p className="perAchiItemInfoTitle">
                            Speed Trader
                        </p>

                        <p className="perAchiItemInfoText">
                            Win 3 battles in a row
                        </p>
                    </div>
                </div>

                <p className="perAchiItemStatus">
                    <Lock2 />
                     Unlocked
                </p>
            </div>

            <div className="perAchiItem">
                <div className="perAchiItemInfo">
                    <Fire2 className="lightblue" />

                    <div className="perAchiItemInfoTextBlock">
                        <p className="perAchiItemInfoTitle">
                            First Victory
                        </p>

                        <p className="perAchiItemInfoText">
                            Win 3 battles in a row
                        </p>
                    </div>
                </div>

                <p className="perAchiItemStatus">
                    <Lock2 />
                     Unlocked
                </p>
            </div>

            <div className="perAchiItem">
                <div className="perAchiItemInfo">
                    <Fire2 className="darkpurple" />

                    <div className="perAchiItemInfoTextBlock">
                        <p className="perAchiItemInfoTitle">
                            Big Spender
                        </p>

                        <p className="perAchiItemInfoText">
                            Win 3 battles in a row
                        </p>
                    </div>
                </div>

                <p className="perAchiItemStatus">
                    <Lock2 />
                     Unlocked
                </p>
            </div>

            <div className="perAchiItem">
                <div className="perAchiItemInfo">
                    <Fire2 className="red" />

                    <div className="perAchiItemInfoTextBlock">
                        <p className="perAchiItemInfoTitle">
                            Sharpshooter
                        </p>

                        <p className="perAchiItemInfoText">
                            Win 3 battles in a row
                        </p>
                    </div>
                </div>

                <p className="perAchiItemStatus">
                    <Lock2 />
                     Unlocked
                </p>
            </div>

            <div className="perAchiItem disable">
                <div className="perAchiItemInfo">
                    <Fire2 />

                    <div className="perAchiItemInfoTextBlock">
                        <p className="perAchiItemInfoTitle">
                            Hot Streak
                        </p>

                        <p className="perAchiItemInfoText">
                            Win 3 battles in a row
                        </p>
                    </div>
                </div>

                <p className="perAchiItemStatus">
                    <Lock2 />
                     Unlocked
                </p>
            </div>
        </div>

        <p className="title2">
            Performance by Battle Type
        </p>

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
                    <p className="typeItemProfit yellow">
                        +$2,100
                    </p>

                    <p className="typeItemStatusValue">
                        1h ago
                    </p>
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
                    <p className="typeItemProfit yellow">
                        3 wins
                    </p>

                    <p className="typeItemStatusValue">
                        1h ago
                    </p>
                </div>
            </div>
        </div>
    </div>;
};

export default AchievementsPage;
