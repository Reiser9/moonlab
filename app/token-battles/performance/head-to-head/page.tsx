import React from "react";
import Image from "next/image";

import { Fire2, Trophy } from "@/shared/icons";

const HeadToHeadPage = () => {
    return (
        <div className="perHeadContent">
            <p className="title2">Your Rivalries</p>

            <div className="perHeadRivalItems">
                <div className="perHeadRivalItem">
                    <div className="perHeadRivalItemUser">
                        <div className="perHeadRivalItemUserImageInner">
                            <div className="perHeadRivalItemUserImage">
                                <Image src="/img/token1.png" alt="image" fill />
                            </div>
                        </div>

                        <p className="perHeadRivalItemUserName">Snoooprew</p>
                    </div>

                    <div className="perHeadRivalItemLineInner">
                        <div className="perDurItemLine">
                            <div
                                className="perDurItemLineProgress red"
                                style={{width: "40%"}}
                            ></div>
                        </div>

                        <div className="perDurItemInfo red">
                            <p className="perDurItemValue">You: 4W</p>
                            <p className="perDurItemText">11 matches</p>
                            <p className="perDurItemValue">S: 7W</p>
                        </div>
                    </div>

                    <p className="perHeadRivalItemDiapason red">4 — 7</p>

                    <div className="perHeadRivalItemTextBlock">
                        <p className="perHeadRivalItemText">Your PnL</p>
                        <p className="perHeadRivalItemValue green">+$2,840</p>
                    </div>

                    <button className="outlinedButton perHeadRivalItemButton">
                         Challenge
                    </button>
                </div>

                <div className="perHeadRivalItem">
                    <div className="perHeadRivalItemUser">
                        <div className="perHeadRivalItemUserImageInner">
                            <div className="perHeadRivalItemUserImage">
                                <Image src="/img/token1.png" alt="image" fill />
                            </div>
                        </div>

                        <p className="perHeadRivalItemUserName">Snoooprew</p>
                    </div>

                    <div className="perHeadRivalItemLineInner">
                        <div className="perDurItemLine">
                            <div
                                className="perDurItemLineProgress lightblue"
                                style={{width: "40%"}}
                            ></div>
                        </div>
                        
                        <div className="perDurItemInfo lightblue">
                            <p className="perDurItemValue">You: 4W</p>
                            <p className="perDurItemText">11 matches</p>
                            <p className="perDurItemValue">S: 7W</p>
                        </div>
                    </div>

                    <p className="perHeadRivalItemDiapason lightblue">4 — 7</p>

                    <div className="perHeadRivalItemTextBlock">
                        <p className="perHeadRivalItemText">Your PnL</p>
                        <p className="perHeadRivalItemValue lightblue">+$2,840</p>
                    </div>

                    <button className="outlinedButton perHeadRivalItemButton">
                         Challenge
                    </button>
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

export default HeadToHeadPage;
