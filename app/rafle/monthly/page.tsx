import Image from "next/image";

import "../index.scss";

import { Pagination } from "@/shared/ui/Pagination";
import { UserAvatar } from "@/shared/ui/UserAvatar";

const MonthlyRafle = () => {
    return (
        <>
            <div className="rafleBanner">
                <div className="rafleBannerGrid">
                    <Image src="/img/banner-grid.png" alt="banner grid" fill />
                </div>

                <p className="rafleBannerTitle">Monthly race $15,000</p>

                <p className="rafleBannerText">Raffle wraws in</p>

                <div className="rafleBannerCountdown">
                    <div className="rafleBannerCountdownItem">
                        <p className="rafleBannerCountdownItemTime">00</p>
                        <p className="rafleBannerCountdownItemText">hours</p>
                    </div>
                    <div className="rafleBannerCountdownDots">:</div>
                    <div className="rafleBannerCountdownItem">
                        <p className="rafleBannerCountdownItemTime">00</p>
                        <p className="rafleBannerCountdownItemText">hours</p>
                    </div>
                    <div className="rafleBannerCountdownDots">:</div>
                    <div className="rafleBannerCountdownItem">
                        <p className="rafleBannerCountdownItemTime">00</p>
                        <p className="rafleBannerCountdownItemText">hours</p>
                    </div>
                </div>
            </div>

            <div className="rafleStats">
                <div className="rafleStatsItem">
                    <div className="rafleStatsItemUser">
                        <div className="rafleStatsItemUserInfo">
                            <UserAvatar image="/img/token1.png" />

                            <p className="rafleStatsItemUserName">
                                Player
                            </p>
                        </div>
                    </div>

                    <div className="rafleStatsItemText">
                        <div className="rafleLeaderboardsItemBlock">
                            <p className="rafleLeaderboardsItemBlockTitle">
                                Races won
                            </p>

                            <p className="rafleLeaderboardsItemBlockValue">
                                0
                            </p>
                        </div>
                    </div>

                    <div className="rafleStatsItemText">
                        <div className="rafleLeaderboardsItemBlock">
                            <p className="rafleLeaderboardsItemBlockTitle">
                                Opened
                            </p>

                            <p className="rafleLeaderboardsItemBlockValue">
                                0
                            </p>
                        </div>
                    </div>

                    <div className="rafleStatsItemText">
                        <div className="rafleLeaderboardsItemBlock">
                            <p className="rafleLeaderboardsItemBlockTitle">
                                Your position
                            </p>

                            <p className="rafleLeaderboardsItemBlockValue">
                                0
                            </p>
                        </div>
                    </div>

                    <div className="rafleStatsItemButton">
                        <button className="mainGradientButton rafleStatsItemButtonValue">
                            Trophy case
                        </button>
                    </div>
                </div>
            </div>

            <div className="raflePrizes">
                <div className="raflePrize">
                    <p className="raflePrizePlace">2</p>

                    <div className="raflePrizeImgInner">
                        <div className="raflePrizeImg">
                            <Image src="/img/token1.png" alt="avatar" fill />
                        </div>
                    </div>

                    <div className="raflePrizeInfo">
                        <p className="raflePrizeName">User_9185151</p>
                        <p className="raflePrizeProfit">+$28.6K</p>
                        <p className="raflePrizeOpened">Opened $226,121.05</p>
                    </div>
                </div>

                <div className="raflePrize big">
                    <p className="raflePrizePlace">1</p>

                    <div className="raflePrizeImgInner">
                        <div className="raflePrizeImg">
                            <Image src="/img/token1.png" alt="avatar" fill />
                        </div>
                    </div>

                    <div className="raflePrizeInfo">
                        <p className="raflePrizeName">User_9185151</p>
                        <p className="raflePrizeProfit">+$28.6K</p>
                        <p className="raflePrizeOpened">Opened $226,121.05</p>
                    </div>
                </div>

                <div className="raflePrize">
                    <p className="raflePrizePlace">3</p>

                    <div className="raflePrizeImgInner">
                        <div className="raflePrizeImg">
                            <Image src="/img/token1.png" alt="avatar" fill />
                        </div>
                    </div>

                    <div className="raflePrizeInfo">
                        <p className="raflePrizeName">User_9185151</p>
                        <p className="raflePrizeProfit">+$28.6K</p>
                        <p className="raflePrizeOpened">Opened $226,121.05</p>
                    </div>
                </div>
            </div>

            <div className="rafleLeaderboardsInner">
                <p className="rafleLeaderboardsTitle">Leaderboard</p>

                <div className="rafleLeaderboards">
                    <div className="rafleLeaderboardsItem">
                        <div className="rafleLeaderboardsItemNum">
                            <p className="rafleLeaderboardsItemNumValue">1</p>
                        </div>

                        <div className="rafleLeaderboardsItemUser">
                            <div className="rafleLeaderboardsItemUserContent">
                                <UserAvatar image="/img/token1.png" />

                                <div className="rafleLeaderboardsItemUserInfo">
                                    <p className="rafleLeaderboardsItemUserTitle">
                                        Your profile
                                    </p>

                                    <p className="rafleLeaderboardsItemUserName">
                                        User_9185151
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rafleLeaderboardsItemTickets">
                            <div className="rafleLeaderboardsItemBlock">
                                <p className="rafleLeaderboardsItemBlockTitle">
                                    Opened
                                </p>

                                <p className="rafleLeaderboardsItemBlockValue">
                                    194.043.43$
                                </p>
                            </div>
                        </div>

                        <div className="rafleLeaderboardsItemReward">
                            <div className="rafleLeaderboardsItemBlock">
                                <p className="rafleLeaderboardsItemBlockTitle">
                                    Reward
                                </p>

                                <p className="rafleLeaderboardsItemBlockValue green">
                                    1000.00$
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rafleLeaderboardsItem">
                        <div className="rafleLeaderboardsItemNum">
                            <p className="rafleLeaderboardsItemNumValue">2</p>
                        </div>

                        <div className="rafleLeaderboardsItemUser">
                            <div className="rafleLeaderboardsItemUserContent">
                                <UserAvatar image="/img/token1.png" />

                                <div className="rafleLeaderboardsItemUserInfo">
                                    <p className="rafleLeaderboardsItemUserTitle">
                                        Your profile
                                    </p>

                                    <p className="rafleLeaderboardsItemUserName">
                                        User_9185151
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rafleLeaderboardsItemTickets">
                            <div className="rafleLeaderboardsItemBlock">
                                <p className="rafleLeaderboardsItemBlockTitle">
                                    Opened
                                </p>

                                <p className="rafleLeaderboardsItemBlockValue">
                                    194.043.43$
                                </p>
                            </div>
                        </div>

                        <div className="rafleLeaderboardsItemReward">
                            <div className="rafleLeaderboardsItemBlock">
                                <p className="rafleLeaderboardsItemBlockTitle">
                                    Reward
                                </p>

                                <p className="rafleLeaderboardsItemBlockValue green">
                                    1000.00$
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rafleLeaderboardsItem">
                        <div className="rafleLeaderboardsItemNum">
                            <p className="rafleLeaderboardsItemNumValue">3</p>
                        </div>

                        <div className="rafleLeaderboardsItemUser">
                            <div className="rafleLeaderboardsItemUserContent">
                                <UserAvatar image="/img/token1.png" />

                                <div className="rafleLeaderboardsItemUserInfo">
                                    <p className="rafleLeaderboardsItemUserTitle">
                                        Your profile
                                    </p>

                                    <p className="rafleLeaderboardsItemUserName">
                                        User_9185151
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rafleLeaderboardsItemTickets">
                            <div className="rafleLeaderboardsItemBlock">
                                <p className="rafleLeaderboardsItemBlockTitle">
                                    Tikets
                                </p>

                                <p className="rafleLeaderboardsItemBlockValue">
                                    $6.5M
                                </p>
                            </div>
                        </div>

                        <div className="rafleLeaderboardsItemReward">
                            <div className="rafleLeaderboardsItemBlock">
                                <p className="rafleLeaderboardsItemBlockTitle">
                                    Reward
                                </p>

                                <p className="rafleLeaderboardsItemBlockValue green">
                                    1000.00$
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rafleLeaderboardsItem">
                        <div className="rafleLeaderboardsItemNum">
                            <p className="rafleLeaderboardsItemNumValue">4</p>
                        </div>

                        <div className="rafleLeaderboardsItemUser">
                            <div className="rafleLeaderboardsItemUserContent">
                                <UserAvatar image="/img/token1.png" />

                                <div className="rafleLeaderboardsItemUserInfo">
                                    <p className="rafleLeaderboardsItemUserTitle">
                                        Your profile
                                    </p>

                                    <p className="rafleLeaderboardsItemUserName">
                                        User_9185151
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rafleLeaderboardsItemTickets">
                            <div className="rafleLeaderboardsItemBlock">
                                <p className="rafleLeaderboardsItemBlockTitle">
                                    Tikets
                                </p>

                                <p className="rafleLeaderboardsItemBlockValue">
                                    $6.5M
                                </p>
                            </div>
                        </div>

                        <div className="rafleLeaderboardsItemReward">
                            <div className="rafleLeaderboardsItemBlock">
                                <p className="rafleLeaderboardsItemBlockTitle">
                                    Reward
                                </p>

                                <p className="rafleLeaderboardsItemBlockValue green">
                                    1000.00$
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rafleLeaderboardsPagination">
                    <Pagination />
                </div>
            </div>
        </>
    );
};

export default MonthlyRafle;
