import Image from "next/image";

import "../index.scss";

import { Pagination } from "@/shared/ui/Pagination";
import { UserAvatar } from "@/shared/ui/UserAvatar";
import { PrizesBlock } from "@/shared/ui/PrizesBlock";

const WeeklyRafle = () => {
    return (
        <>
            <div className="rafleBanner">
                <div className="rafleBannerGrid">
                    <Image src="/img/banner-grid.png" alt="banner grid" fill />
                </div>

                <p className="rafleBannerTitle">Weekly race $15,000</p>

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

            <PrizesBlock data={[
                {
                    image: "/img/token1.png",
                    name: "User_9185151",
                    text: "Opened $226,121.05",
                    value: "+$28.6K"
                },
                {
                    image: "/img/token1.png",
                    name: "User_9185151",
                    text: "Opened $226,121.05",
                    value: "+$28.6K"
                },
                {
                    image: "/img/token1.png",
                    name: "User_9185151",
                    text: "Opened $226,121.05",
                    value: "+$28.6K"
                }
            ]} />

            <div className="rafleLeaderboardsInner">
                <p className="title2 rafleLeaderboardsTitle">Leaderboard</p>

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

export default WeeklyRafle;
