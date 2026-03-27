"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import cn from "classnames";

import {
    ArrowIncrease,
    ArrowRight,
    CircleStarMini,
    Deposite,
    Info,
    QuestionCircle,
    Solana,
    Wallet,
} from "@/shared/icons";
import { useSidebarContext } from "@/shared/context/SidebarProvider";

const DashboardPage = () => {
    const [typeToken, setTypeToken] = React.useState<"turbo" | "hyper">(
        "turbo",
    );

    const { setDepositeModal, setWithdrawModal, setConnectSolModal } =
        useSidebarContext();

    return (
        <>
            <div className="dashboardTop">
                <div className="dashboardTopInfo">
                    <div className="dashboardTopInfoBalance">
                        <p className="dashboardTopInfoTitle">Your Balance</p>

                        <p className="dashboardTopInfoBalanceValue">0$</p>

                        <p className="dashboardTopInfoText">
                            Today&rsquo;s PnL
                        </p>

                        <p className="dashboardTopInfoPnlValue">0$</p>
                    </div>

                    <div className="dashboardTopInfoBlock">
                        <div className="dashboardTopInfoConnect">
                            <div className="dashboardTopInfoConnectInfo">
                                <div className="dashboardTopInfoConnectInfoIcon">
                                    <Solana />
                                </div>

                                <p className="dashboardTopInfoConnectInfoText">
                                    SOL Wallet:
                                </p>

                                <Info />
                            </div>

                            <button
                                className="dashboardTopInfoConnectButton"
                                onClick={() => setConnectSolModal(true)}
                            >
                                Connect
                            </button>
                        </div>

                        <button
                            className="dashboardTopInfoWithdraw"
                            onClick={() => setWithdrawModal(true)}
                        >
                            <Wallet />
                            Withdraw
                        </button>

                        <button
                            className="mainGradientButton dashboardTopInfoDeposite"
                            onClick={() => setDepositeModal(true)}
                        >
                            <Deposite />
                            Deposit
                        </button>
                    </div>
                </div>

                <div className="dashboardTopStats">
                    <div className="dashboardTopStatsItem">
                        <p className="dashboardTopStatsItemTitle">
                            All-Time PnL
                        </p>

                        <div className="dashboardTopStatsItemWrap">
                            <p className="dashboardTopStatsItemValue">$0</p>
                        </div>
                    </div>

                    <div className="dashboardTopStatsItem">
                        <p className="dashboardTopStatsItemTitle">
                            Total Volume
                        </p>

                        <div className="dashboardTopStatsItemWrap">
                            <p className="dashboardTopStatsItemSubtitle">
                                Closed Trades: <span>0</span>
                            </p>

                            <p className="dashboardTopStatsItemValue">$0</p>
                        </div>
                    </div>

                    <div className="dashboardTopStatsItem">
                        <p className="dashboardTopStatsItemTitle">
                            Creator Earnings
                            <QuestionCircle />
                        </p>

                        <div className="dashboardTopStatsItemWrap">
                            <p className="dashboardTopStatsItemSubtitle">
                                Created: <span>0</span>
                            </p>

                            <p className="dashboardTopStatsItemValue">$0</p>
                        </div>
                    </div>

                    <div className="dashboardTopStatsItem">
                        <p className="dashboardTopStatsItemTitle">
                            Affiliate Earnings
                        </p>

                        <div className="dashboardTopStatsItemWrap">
                            <p className="dashboardTopStatsItemSubtitle">
                                Invited: <span>0</span>
                            </p>

                            <p className="dashboardTopStatsItemValue">$0</p>
                        </div>
                    </div>

                    <div className="dashboardTopStatsItem">
                        <p className="dashboardTopStatsItemTitle">
                            Mindshare Earnings
                        </p>

                        <div className="dashboardTopStatsItemWrap">
                            <p className="dashboardTopStatsItemSubtitle">
                                Total Posts: <span>0</span>
                            </p>

                            <p className="dashboardTopStatsItemValue">$0</p>
                        </div>
                    </div>

                    <div className="dashboardTopStatsItem">
                        <p className="dashboardTopStatsItemTitle">
                            Best Launch
                        </p>

                        <div className="dashboardTopStatsItemWrap">
                            <p className="dashboardTopStatsItemValue">N/A</p>
                        </div>
                    </div>

                    <div className="dashboardTopStatsItem">
                        <p className="dashboardTopStatsItemTitle">Best Trade</p>

                        <div className="dashboardTopStatsItemWrap">
                            <p className="dashboardTopStatsItemValue">N/A</p>
                        </div>
                    </div>

                    <div className="dashboardTopStatsItem">
                        <p className="dashboardTopStatsItemTitle">
                            Worst Trade
                        </p>

                        <div className="dashboardTopStatsItemWrap">
                            <p className="dashboardTopStatsItemValue">N/A</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dashboardTasks">
                <div className="dashboardTask">
                    <div className="dashboardTaskWrap">
                        <p className="dashboardItemTitle">
                            Turbo Creator Fees
                            <QuestionCircle />
                        </p>
                        <p className="dashboardTaskValue">$0</p>
                    </div>
                    <button className="dashboardTaskButton">Claim</button>
                </div>

                <div className="dashboardTask">
                    <div className="dashboardTaskWrap">
                        <p className="dashboardItemTitle">
                            Hyper Creator Fees
                            <QuestionCircle />
                        </p>
                        <p className="dashboardTaskValue">$0</p>
                    </div>
                    <button className="dashboardTaskButton">Claim</button>
                </div>

                <div className="dashboardTask">
                    <div className="dashboardTaskWrap">
                        <p className="dashboardItemTitle">
                            Creator Token Supply
                            <QuestionCircle />
                        </p>
                        <p className="dashboardTaskValue">
                            <span>Tokens</span> 0
                        </p>
                    </div>
                    <button
                        className="mainGradientButton dashboardTaskConnect"
                        onClick={() => setConnectSolModal(true)}
                    >
                        Connect sol wallet
                    </button>
                </div>

                <div className="dashboardTask">
                    <div className="dashboardTaskWrap">
                        <Link href="/" className="dashboardItemTitle">
                            Tokens
                            <ArrowRight className="dashboardItemArrow" />
                        </Link>
                        <p className="dashboardTaskValue">$0</p>
                    </div>
                    <button className="dashboardTaskButton">Claim</button>
                </div>

                <div className="dashboardTask">
                    <div className="dashboardTaskWrap">
                        <Link href="/" className="dashboardItemTitle">
                            Mindshare Rewards
                            <ArrowRight className="dashboardItemArrow" />
                        </Link>
                        <p className="dashboardTaskValue">$0</p>
                    </div>
                    <button className="dashboardTaskButton">Claim</button>
                </div>
            </div>

            <div className="dashboardTable">
                <div className="dashboardTableHeader">
                    <div className="dashboardTableHeaderTitleWrapper">
                        <p className="dashboardTableHeaderTitle">
                            Launched Tokens
                        </p>

                        <div className="dashboardTableHeaderTabs">
                            <button
                                className={cn("dashboardTableHeaderTab", {
                                    ["active"]: typeToken === "turbo",
                                })}
                                onClick={() => setTypeToken("turbo")}
                            >
                                Turbo Tokens
                            </button>

                            <button
                                className={cn("dashboardTableHeaderTab", {
                                    ["active"]: typeToken === "hyper",
                                })}
                                onClick={() => setTypeToken("hyper")}
                            >
                                Hyper Tokens
                            </button>
                        </div>
                    </div>

                    <div className="dashboardTableHeaderSort">
                        <p className="dashboardTableHeaderSortTitle">
                            Sort by:
                        </p>

                        <div className="dashboardTableHeaderSortButtons">
                            <button className="dashboardTableHeaderSortButton active">
                                %Change
                            </button>

                            <button className="dashboardTableHeaderSortButton">
                                Price
                            </button>

                            <button className="dashboardTableHeaderSortButton">
                                Volume
                            </button>

                            <button className="dashboardTableHeaderSortButton">
                                Traders
                            </button>
                        </div>
                    </div>
                </div>

                <div className="dashboardTableContent">
                    <div className="dashboardTableTabs">
                        <button className="dashboardTableTab active">
                            Live
                        </button>
                        <button className="dashboardTableTab">Expired</button>
                    </div>

                    <div className="dashboardTableItems">
                        <div className="dashboardTableItem">
                            <div className="dashboardTableItemToken">
                                <div className="mainTradesItemTokenImgInner">
                                    <div className="mainTradesItemTokenImg">
                                        <Image
                                            src="/img/token1.png"
                                            alt="Token"
                                            fill
                                        />
                                    </div>

                                    <CircleStarMini />
                                </div>

                                <div className="mainTradesItemTextInner">
                                    <p className="mainTradesItemTitle">
                                        Token Name
                                    </p>
                                    <p className="mainTradesItemText">Tesla</p>
                                </div>
                            </div>

                            <div className="dashboardTableItemBlock">
                                <p className="dashboardTableItemBlockTitle">
                                    Holders
                                </p>

                                <p className="dashboardTableItemBlockText">
                                    104$
                                </p>
                            </div>

                            <div className="dashboardTableItemBlock">
                                <p className="dashboardTableItemBlockTitle">
                                    Your Tokens
                                </p>

                                <p className="dashboardTableItemBlockText">
                                    0.58231$
                                </p>
                            </div>

                            <div className="dashboardTableItemBlock">
                                <p className="dashboardTableItemBlockTitle">
                                    Fees Earned
                                </p>

                                <p className="dashboardTableItemBlockText">
                                    104$
                                </p>
                            </div>

                            <div className="dashboardTableItemBlock">
                                <p className="dashboardTableItemBlockTitle">
                                    Points
                                </p>

                                <p className="dashboardTableItemBlockText">
                                    <ArrowIncrease />
                                    44.25%
                                </p>
                            </div>

                            <div className="dashboardTableItemBlock">
                                <p className="dashboardTableItemBlockTitle">
                                    Deployment Date
                                </p>

                                <p className="dashboardTableItemBlockText">
                                    <ArrowIncrease />
                                    44.25%
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardPage;
