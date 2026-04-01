import React from "react";

import "./index.scss";
import { Points, Substrate } from "@/shared/icons";
import { SliderBlock } from "@/shared/ui/SliderBlock";
import { Pagination } from "@/shared/ui/Pagination";
import { UserAvatar } from "@/shared/ui/UserAvatar";

const PointsPage = () => {
    return <>
        <div className="pointsTop">
            <div className="pointsTopIcon">
                <Points />
            </div>

            <div className="pointsTopTexts">
                <p className="pointsTopTitle">
                    POINTS PROGRAM
                </p>

                <p className="pointsTopPoints">
                    0 Points
                </p>

                <p className="pointsTopText">
                    Your activity earns rewards and points
                </p>
            </div>
        </div>

        <div className="pointsStats">
            <p className="title2">
                Your Stats
            </p>

            <div className="pointsStatsContent">
                <div className="pointsStatsProgress">
                    <div className="pointsStatsProgressIcon">
                        <Substrate />
                        <p className="affiTierTopBeltNumber">1</p>
                    </div>

                    <div className="pointsStatsProgressContent">
                        <p className="title2 pointsStatsProgressTitle">
                            eth Tier
                        </p>

                        <p className="pointsStatsProgressText">
                            Your tier may be important in the future
                        </p>

                        <SliderBlock progress={15} time="0 / 1,000" text="Pleb Tier" />
                    </div>

                    <div className="pointsStatsProgressIcon">
                        <Substrate />
                        <p className="affiTierTopBeltNumber">2</p>
                    </div>
                </div>

                <div className="pointsStatsItems">
                    <div className="pointsStatsItem">
                        <p className="pointsStatsItemTitle">
                            <span>0</span> Trading
                        </p>

                        <p className="pointsStatsItemText">
                            100 points per $1 in trading fees
                        </p>

                        <div className="pointsStatsItemTags">
                            <p className="pointsStatsItemTag">
                                Volume: <span>$0.0</span>
                            </p>

                            <p className="pointsStatsItemTag">
                                Trades: <span>0</span>
                            </p>
                        </div>
                    </div>

                    <div className="pointsStatsItem">
                        <p className="pointsStatsItemTitle">
                            <span>0</span> Creator
                        </p>

                        <p className="pointsStatsItemText">
                            10 points per $1 in token creation fees
                        </p>

                        <div className="pointsStatsItemTags">
                            <p className="pointsStatsItemTag">
                                Launched: <span>0 Tokens</span>
                            </p>
                        </div>
                    </div>

                    <div className="pointsStatsItem">
                        <p className="pointsStatsItemTitle">
                            <span>0</span> Affiliate
                        </p>

                        <p className="pointsStatsItemText">
                            7.5% to 22.5% of your friend&rsquo;s volume and creator points for every referral
                        </p>

                        <div className="pointsStatsItemTags">
                            <p className="pointsStatsItemTag">
                                Invited: <span>0 Users</span>
                            </p>
                        </div>
                    </div>

                    <div className="pointsStatsItem">
                        <p className="pointsStatsItemTitle">
                            <span>0</span> Mindshare
                        </p>

                        <p className="pointsStatsItemText">
                            Mindshare scores are converted to points via a variable coefficient
                        </p>

                        <div className="pointsStatsItemTags">
                            <p className="pointsStatsItemTag">
                                Posted: <span>0 Tweets</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="pointsLeaderboard">
            <div className="pointsLeaderboardTop">
                <p className="title2">
                    Leaderboard
                </p>
            </div>

            <div className="pointsLeaderboardTable">
                <div className="pointsLeaderboardItem active">
                    <div className="pointsLeaderboardItemNum">
                        <p className="pointsLeaderboardItemNumValue">31213</p>
                    </div>

                    <div className="pointsLeaderboardItemUser">
                        <div className="pointsLeaderboardItemUserWrap">
                            <UserAvatar image="/img/token1.png" />

                            <div className="pointsLeaderboardItemUserInfo">
                                <p className="pointsLeaderboardItemUserTitle">
                                    User
                                </p>

                                <p className="pointsLeaderboardItemUserName">
                                    User_9185151
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pointsLeaderboardItemTextBlock">
                        <p className="pointsLeaderboardItemText">
                            Tier
                        </p>

                        <p className="pointsLeaderboardItemValue">
                            .eth
                        </p>
                    </div>

                    <div className="pointsLeaderboardItemTextBlock">
                        <p className="pointsLeaderboardItemText">
                            Trading
                        </p>

                        <p className="pointsLeaderboardItemValue green">
                            6.9M
                        </p>
                    </div>

                    <div className="pointsLeaderboardItemTextBlock">
                        <p className="pointsLeaderboardItemText">
                            Creator
                        </p>

                        <p className="pointsLeaderboardItemValue green">
                            44.3K
                        </p>
                    </div>

                    <div className="pointsLeaderboardItemTextBlock">
                        <p className="pointsLeaderboardItemText">
                            Affiliate
                        </p>

                        <p className="pointsLeaderboardItemValue green">
                            163.5K
                        </p>
                    </div>

                    <div className="pointsLeaderboardItemTextBlock">
                        <p className="pointsLeaderboardItemText">
                            Mindshare
                        </p>

                        <p className="pointsLeaderboardItemValue green">
                            4.0K
                        </p>
                    </div>

                    <div className="pointsLeaderboardItemTotal">
                        <p className="pointsLeaderboardItemTotalTitle">
                            Total Points
                        </p>

                        <p className="pointsLeaderboardItemTotalValue">
                            0.0
                        </p>
                    </div>
                </div>

                <div className="pointsLeaderboardItem">
                    <div className="pointsLeaderboardItemNum">
                        <p className="pointsLeaderboardItemNumValue">1</p>
                    </div>

                    <div className="pointsLeaderboardItemUser">
                        <div className="pointsLeaderboardItemUserWrap">
                            <UserAvatar image="/img/token1.png" />

                            <div className="pointsLeaderboardItemUserInfo">
                                <p className="pointsLeaderboardItemUserTitle">
                                    User
                                </p>

                                <p className="pointsLeaderboardItemUserName">
                                    User_9185151
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pointsLeaderboardItemTextBlock">
                        <p className="pointsLeaderboardItemText">
                            Tier
                        </p>

                        <p className="pointsLeaderboardItemValue">
                            .eth
                        </p>
                    </div>

                    <div className="pointsLeaderboardItemTextBlock">
                        <p className="pointsLeaderboardItemText">
                            Trading
                        </p>

                        <p className="pointsLeaderboardItemValue green">
                            6.9M
                        </p>
                    </div>

                    <div className="pointsLeaderboardItemTextBlock">
                        <p className="pointsLeaderboardItemText">
                            Creator
                        </p>

                        <p className="pointsLeaderboardItemValue green">
                            44.3K
                        </p>
                    </div>

                    <div className="pointsLeaderboardItemTextBlock">
                        <p className="pointsLeaderboardItemText">
                            Affiliate
                        </p>

                        <p className="pointsLeaderboardItemValue green">
                            163.5K
                        </p>
                    </div>

                    <div className="pointsLeaderboardItemTextBlock">
                        <p className="pointsLeaderboardItemText">
                            Mindshare
                        </p>

                        <p className="pointsLeaderboardItemValue green">
                            4.0K
                        </p>
                    </div>

                    <div className="pointsLeaderboardItemTotal">
                        <p className="pointsLeaderboardItemTotalTitle">
                            Total Points
                        </p>

                        <p className="pointsLeaderboardItemTotalValue">
                            7.1M
                        </p>
                    </div>
                </div>
            </div>

            <Pagination />
        </div>
    </>;
};

export default PointsPage;
