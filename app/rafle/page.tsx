import Image from "next/image";

import "./index.scss";

import { Ticket, Time } from "@/shared/icons";
import { Pagination } from "@/shared/ui/Pagination";
import { UserAvatar } from "@/shared/ui/UserAvatar";

const RafflePage = () => {
    return <>
        <div className="rafleBanner">
            <div className="rafleBannerGrid">
                <Image src="/img/banner-grid.png" alt="banner grid" fill />
            </div>

            <p className="rafleBannerTitle">
                Dayli raffle  #434  2.00.00$
            </p>

            <p className="rafleBannerText">
                Raffle wraws in
            </p>

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

        <div className="rafleAbout">
            <div className="rafleAboutBlock">
                <p className="title2 rafleAboutBlockTitle">
                    About the daily raffle
                </p>

                <p className="rafleAboutBlockText">
                    Spend $1 or more for a chance to win up to $1,000.00 USD! Every day, twenty lucky winners are randomly selected. If you win, simply click Claim to collect your prize. Don&rsquo;t miss out-open packs now and see if today is your lucky day!
                </p>
            </div>

            <div className="rafleAboutPoints">
                <div className="rafleAboutPoint">
                    <div className="rafleAboutPointIcon">
                        <Ticket />
                    </div>

                    <p className="rafleAboutPointText">
                        Open packs daily for a chance to win!
                    </p>
                </div>

                <div className="rafleAboutPoint">
                    <div className="rafleAboutPointIcon">
                        <Time />
                    </div>

                    <p className="rafleAboutPointText">
                        Time is running out --don&rsquo;t miss your chance!
                    </p>
                </div>
            </div>
        </div>

        <div className="rafleLeaderboardsInner">
            <p className="title2 rafleLeaderboardsTitle">
                Leaderboard
            </p>

            <div className="rafleLeaderboards">
                <div className="rafleLeaderboardsItem active">
                    <div className="rafleLeaderboardsItemNum">
                        <p className="rafleLeaderboardsItemNumValue">34114</p>
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
};

export default RafflePage;
