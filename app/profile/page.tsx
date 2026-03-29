"use client";

import React from "react";
import Image from "next/image";

import "./index.scss";

import { ArrowFall, ArrowRight, CheckCircle, Edit, Mail, QuestionCircle, Share, Solana2, Telegram2, X, X2 } from "@/shared/icons";
import { Modal } from "@/shared/ui/Modal";
import { UserAvatar } from "@/shared/ui/UserAvatar";
import { Input } from "@/shared/ui/Input";
import { SliderBlock } from "@/shared/ui/SliderBlock";
import { useSidebarContext } from "@/shared/context/SidebarProvider";

const ProfilePage = () => {
    const [profileModal, setProfileModal] = React.useState(false);

    const { setConnectSolModal } = useSidebarContext();

    return <>
        <div className="profilePageTop">
            <div className="profilePageInfo">
                <div className="profilePageInfoImageInner">
                    <div className="profilePageInfoImage">
                        <Image src="/img/token1.png" alt="image" fill />
                    </div>
                </div>

                <p className="profilePageInfoName">
                    user_d452c760
                </p>

                <div className="profilePageInfoButtons">
                    <button className="profilePageInfoButton" onClick={() => setProfileModal(true)}>
                        <Edit />
                        Edit
                    </button>

                    <button className="profilePageInfoButton">
                        <Share />
                        Share
                    </button>
                </div>
            </div>

            <div className="profilePageTextBlockInner">
                <div className="profilePageTextBlock">
                    <p className="profilePageText">
                        Points
                    </p>

                    <p className="profilePageValue">
                        0
                    </p>
                </div>

                <div className="profilePageTextBlock">
                    <p className="profilePageText">
                        Place
                    </p>

                    <p className="profilePageValue">
                        385730
                    </p>
                </div>

                <div className="profilePageTextBlock">
                    <p className="profilePageText">
                        Tier
                    </p>

                    <p className="profilePageValue">
                        .eth
                        <ArrowRight />
                    </p>
                </div>
            </div>

            <div className="profilePageTopButtons">
                <div className="profilePageTopMail">
                    <Mail />
                    mail@gmail.com
                </div>

                <button className="mainGradientButton profilePageTopButton" onClick={() => setConnectSolModal(true)}>
                    <Solana2 />
                    Connect sol wallet
                </button>
            </div>
        </div>

        <div className="profilePageStats">
            <p className="title2">
                Statistics
            </p>

            <div className="profilePageStatsItems">
                <div className="profilePageStatsItem">
                    <p className="profilePageStatsItemTitle">
                        All-Time PnL
                    </p>

                    <div className="profilePageStatsItemValueInner">
                        <p className="profilePageStatsItemValue">0</p>
                    </div>
                </div>

                <div className="profilePageStatsItem">
                    <p className="profilePageStatsItemTitle">
                        Total Volume
                    </p>

                    <div className="profilePageStatsItemValueInner">
                        <p className="profilePageStatsItemValue">0</p>
                        <p className="profilePageStatsItemText">Closed Trades:</p>
                        <p className="profilePageStatsItemSubtitle">0</p>
                    </div>
                </div>

                <div className="profilePageStatsItem">
                    <p className="profilePageStatsItemTitle">
                        Creator Earnings
                        <QuestionCircle />
                    </p>

                    <div className="profilePageStatsItemValueInner">
                        <p className="profilePageStatsItemValue">0</p>
                        <p className="profilePageStatsItemText">Created:</p>
                        <p className="profilePageStatsItemSubtitle">0</p>
                    </div>
                </div>

                <div className="profilePageStatsItem">
                    <p className="profilePageStatsItemTitle">
                        Affiliate Earnings
                    </p>

                    <div className="profilePageStatsItemValueInner">
                        <p className="profilePageStatsItemValue">0</p>
                        <p className="profilePageStatsItemText">Invited:</p>
                        <p className="profilePageStatsItemSubtitle">0</p>
                    </div>
                </div>

                <div className="profilePageStatsItem">
                    <p className="profilePageStatsItemTitle">
                        Mindshare Earnings
                    </p>

                    <div className="profilePageStatsItemValueInner">
                        <p className="profilePageStatsItemValue">0</p>
                        <p className="profilePageStatsItemText">Total Posts:</p>
                        <p className="profilePageStatsItemSubtitle">0</p>
                    </div>
                </div>

                <div className="profilePageStatsItem">
                    <p className="profilePageStatsItemTitle">
                        Best Launch
                    </p>

                    <div className="profilePageStatsItemValueInner">
                        <p className="profilePageStatsItemValue">N/A</p>
                    </div>
                </div>

                <div className="profilePageStatsItem">
                    <p className="profilePageStatsItemTitle">
                        Best Trade
                    </p>

                    <div className="profilePageStatsItemValueInner">
                        <p className="profilePageStatsItemValue">N/A</p>
                    </div>
                </div>

                <div className="profilePageStatsItem">
                    <p className="profilePageStatsItemTitle">
                        Worst Trade
                    </p>

                    <div className="profilePageStatsItemValueInner">
                        <p className="profilePageStatsItemValue">N/A</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="profilePageTokens">
            <div className="profilePageTokensHeader">
                <p className="title2">
                    Launched Tokens
                </p>

                <div className="profilePageTokensHeaderTabs">
                    <button className="profilePageTokensHeaderTab active">
                        Turbo Tokens
                    </button>

                    <button className="profilePageTokensHeaderTab">
                        Turbo Tokens
                    </button>
                </div>
            </div>

            <div className="profilePageTokensContent">
                <div className="profilePageTokensItem">
                    <div className="profilePageTokensItemInfo">
                        <div className="profilePageTokensItemInfoToken">
                            <UserAvatar width={40} height={40} image="/img/token1.png" />

                            <div className="profilePageTokensItemInfoTokenWrap">
                                <div className="profilePageTokensItemInfoTokenIner">
                                    <p className="profilePageTokensItemInfoTokenName">
                                        GLOW
                                    </p>

                                    <div className="profilePageTokensItemInfoTokenTags">
                                        <p className="profilePageTokensItemInfoTokenTag active">Active</p>
                                        <p className="profilePageTokensItemInfoTokenTag">Flash</p>
                                    </div>
                                </div>

                                <p className="profilePageTokensItemInfoTokenStatus">Created 2h ago. Duration 12 m</p>
                            </div>
                        </div>

                        <div className="profilePageTokensItemInfoTextBlock">
                            <p className="profilePageTokensItemInfoTextTitle">Price</p>
                            <div className="profilePageTokensItemInfoPrice">
                                <p className="profilePageTokensItemInfoTextValue">
                                    984.32
                                </p>

                                <p className="profilePageTokensItemInfoPriceProfit">
                                    <ArrowFall />
                                    44.25%
                                </p>
                            </div>
                        </div>

                        <div className="profilePageTokensItemInfoTextBlock">
                            <p className="profilePageTokensItemInfoTextTitle">Volume</p>
                            <p className="profilePageTokensItemInfoTextValue">
                                20 203$
                            </p>
                        </div>

                        <div className="profilePageTokensItemInfoTextBlock">
                            <p className="profilePageTokensItemInfoTextTitle">Trades</p>
                            <div className="profilePageTokensItemInfoTrades">
                                <p className="profilePageTokensItemInfoTextValue">
                                    43
                                </p>

                                <p className="profilePageTokensItemInfoTradesInfo">
                                    <span className="green">124b</span> / <span className="red">32s</span>
                                </p>
                            </div>
                        </div>

                        <div className="profilePageTokensItemInfoTextBlock">
                            <p className="profilePageTokensItemInfoTextTitle">Your earnings</p>
                            <p className="profilePageTokensItemInfoTextValue green">
                                +12 324$
                            </p>
                        </div>

                        <div className="profilePageTokensItemInfoMigration">
                            <p className="profilePageTokensItemInfoTextTitle">Migration</p>

                            <div className="profilePageTokensItemInfoMigrationSlider">
                                <SliderBlock progress={55} />
                                <p className="profilePageTokensItemInfoMigrationSliderValue">204.5$ <span>/</span> 500$</p>
                            </div>
                        </div>
                    </div>

                    <div className="profilePageTokensItemStats">
                        <div className="profilePageTokensItemStat">
                            <p className="profilePageTokensItemStatTitle">
                                ATH
                            </p>

                            <p className="profilePageTokensItemStatValue yellow">
                                1 245.6$
                            </p>
                        </div>

                        <div className="profilePageTokensItemStat">
                            <p className="profilePageTokensItemStatTitle">
                                Market cap
                            </p>

                            <p className="profilePageTokensItemStatValue">
                                49 043$
                            </p>
                        </div>

                        <div className="profilePageTokensItemStat">
                            <p className="profilePageTokensItemStatTitle">
                                Total buys
                            </p>

                            <p className="profilePageTokensItemStatValue green">
                                115.6
                            </p>
                        </div>

                        <div className="profilePageTokensItemStat">
                            <p className="profilePageTokensItemStatTitle">
                                Total sells
                            </p>

                            <p className="profilePageTokensItemStatValue red">
                                8
                            </p>
                        </div>
                    </div>

                    <div className="profilePageTokensItemMigrate">
                        <div className="profilePageTokensItemMigrateTitleInner">
                            <p className="profilePageTokensItemMigrateTitle">
                                Migrate on-chain
                            </p>

                            <p className="profilePageTokensItemMigrateText">Graduation coming soon</p>
                        </div>

                        <SliderBlock progress={15} />

                        <p className="profilePageTokensItemMigrateValue">Volume <span>209.9$</span></p>
                    </div>

                    <div className="profilePageTokensItemButtons">
                        <button className="mainGradientButton profilePageTokensItemButton">
                            View chart
                        </button>

                        <button className="profilePageTokensItemButtonSquare">
                            <Share />
                        </button>
                    </div>
                </div>

                <div className="profilePageTokensItem">
                    <div className="profilePageTokensItemInfo">
                        <div className="profilePageTokensItemInfoToken">
                            <UserAvatar width={40} height={40} image="/img/token1.png" />

                            <div className="profilePageTokensItemInfoTokenWrap">
                                <div className="profilePageTokensItemInfoTokenIner">
                                    <p className="profilePageTokensItemInfoTokenName">
                                        GLOW
                                    </p>

                                    <div className="profilePageTokensItemInfoTokenTags">
                                        <p className="profilePageTokensItemInfoTokenTag">Expired</p>
                                        <p className="profilePageTokensItemInfoTokenTag">Flash</p>
                                    </div>
                                </div>

                                <p className="profilePageTokensItemInfoTokenStatus">Created 2h ago. Duration 12 m</p>
                            </div>
                        </div>

                        <div className="profilePageTokensItemInfoTextBlock">
                            <p className="profilePageTokensItemInfoTextTitle">Price</p>
                            <div className="profilePageTokensItemInfoPrice">
                                <p className="profilePageTokensItemInfoTextValue">
                                    984.32
                                </p>

                                <p className="profilePageTokensItemInfoPriceProfit">
                                    <ArrowFall />
                                    44.25%
                                </p>
                            </div>
                        </div>

                        <div className="profilePageTokensItemInfoTextBlock">
                            <p className="profilePageTokensItemInfoTextTitle">Volume</p>
                            <p className="profilePageTokensItemInfoTextValue">
                                20 203$
                            </p>
                        </div>

                        <div className="profilePageTokensItemInfoTextBlock">
                            <p className="profilePageTokensItemInfoTextTitle">Trades</p>
                            <div className="profilePageTokensItemInfoTrades">
                                <p className="profilePageTokensItemInfoTextValue">
                                    43
                                </p>

                                <p className="profilePageTokensItemInfoTradesInfo">
                                    <span className="green">124b</span> / <span className="red">32s</span>
                                </p>
                            </div>
                        </div>

                        <div className="profilePageTokensItemInfoTextBlock">
                            <p className="profilePageTokensItemInfoTextTitle">Your earnings</p>
                            <p className="profilePageTokensItemInfoTextValue green">
                                +12 324$
                            </p>
                        </div>

                        <div className="profilePageTokensItemInfoMigration">
                            <p className="profilePageTokensItemInfoTextTitle">Migration</p>

                            <div className="profilePageTokensItemInfoMigrationSlider">
                                <SliderBlock progress={55} />
                                <p className="profilePageTokensItemInfoMigrationSliderValue">204.5$ <span>/</span> 500$</p>
                            </div>
                        </div>
                    </div>

                    <div className="profilePageTokensItemStats">
                        <div className="profilePageTokensItemStat">
                            <p className="profilePageTokensItemStatTitle">
                                ATH
                            </p>

                            <p className="profilePageTokensItemStatValue yellow">
                                1 245.6$
                            </p>
                        </div>

                        <div className="profilePageTokensItemStat">
                            <p className="profilePageTokensItemStatTitle">
                                Market cap
                            </p>

                            <p className="profilePageTokensItemStatValue">
                                49 043$
                            </p>
                        </div>

                        <div className="profilePageTokensItemStat">
                            <p className="profilePageTokensItemStatTitle">
                                Total buys
                            </p>

                            <p className="profilePageTokensItemStatValue green">
                                115.6
                            </p>
                        </div>

                        <div className="profilePageTokensItemStat">
                            <p className="profilePageTokensItemStatTitle">
                                Total sells
                            </p>

                            <p className="profilePageTokensItemStatValue red">
                                8
                            </p>
                        </div>
                    </div>

                    <div className="profilePageTokensItemButtons">
                        <button className="profilePageTokensItemButtonSquare">
                            <Share />
                        </button>
                    </div>
                </div>

                <div className="profilePageTokensItem">
                    <div className="profilePageTokensItemInfo">
                        <div className="profilePageTokensItemInfoToken">
                            <UserAvatar width={40} height={40} image="/img/token1.png" />

                            <div className="profilePageTokensItemInfoTokenWrap">
                                <div className="profilePageTokensItemInfoTokenIner">
                                    <p className="profilePageTokensItemInfoTokenName">
                                        GLOW
                                    </p>

                                    <div className="profilePageTokensItemInfoTokenTags">
                                        <p className="profilePageTokensItemInfoTokenTag active">On-chain</p>
                                        <p className="profilePageTokensItemInfoTokenTag">Flash</p>
                                    </div>
                                </div>

                                <p className="profilePageTokensItemInfoTokenStatus">Created 2h ago. Duration 12 m</p>
                            </div>
                        </div>

                        <div className="profilePageTokensItemInfoTextBlock">
                            <p className="profilePageTokensItemInfoTextTitle">Price</p>
                            <div className="profilePageTokensItemInfoPrice">
                                <p className="profilePageTokensItemInfoTextValue">
                                    984.32
                                </p>

                                <p className="profilePageTokensItemInfoPriceProfit">
                                    <ArrowFall />
                                    44.25%
                                </p>
                            </div>
                        </div>

                        <div className="profilePageTokensItemInfoTextBlock">
                            <p className="profilePageTokensItemInfoTextTitle">Volume</p>
                            <p className="profilePageTokensItemInfoTextValue">
                                20 203$
                            </p>
                        </div>

                        <div className="profilePageTokensItemInfoTextBlock">
                            <p className="profilePageTokensItemInfoTextTitle">Trades</p>
                            <div className="profilePageTokensItemInfoTrades">
                                <p className="profilePageTokensItemInfoTextValue">
                                    43
                                </p>

                                <p className="profilePageTokensItemInfoTradesInfo">
                                    <span className="green">124b</span> / <span className="red">32s</span>
                                </p>
                            </div>
                        </div>

                        <div className="profilePageTokensItemInfoTextBlock">
                            <p className="profilePageTokensItemInfoTextTitle">Your earnings</p>
                            <p className="profilePageTokensItemInfoTextValue green">
                                +12 324$
                            </p>
                        </div>

                        <div className="profilePageTokensItemInfoMigration">
                            <p className="profilePageTokensItemInfoTextTitle">Migration</p>

                            <p className="profilePageTokensItemInfoTextValue migrationValue green">
                                Sol
                                <CheckCircle />
                            </p>
                        </div>
                    </div>

                    <div className="profilePageTokensItemStats">
                        <div className="profilePageTokensItemStat">
                            <p className="profilePageTokensItemStatTitle">
                                ATH
                            </p>

                            <p className="profilePageTokensItemStatValue yellow">
                                1 245.6$
                            </p>
                        </div>

                        <div className="profilePageTokensItemStat">
                            <p className="profilePageTokensItemStatTitle">
                                Market cap
                            </p>

                            <p className="profilePageTokensItemStatValue">
                                49 043$
                            </p>
                        </div>

                        <div className="profilePageTokensItemStat">
                            <p className="profilePageTokensItemStatTitle">
                                Total buys
                            </p>

                            <p className="profilePageTokensItemStatValue green">
                                115.6
                            </p>
                        </div>

                        <div className="profilePageTokensItemStat">
                            <p className="profilePageTokensItemStatTitle">
                                Total sells
                            </p>

                            <p className="profilePageTokensItemStatValue red">
                                8
                            </p>
                        </div>
                    </div>

                    <div className="profilePageTokensItemButtons">
                        <button className="profilePageTokensItemButtonSquare">
                            <Share />
                        </button>

                        <button className="profilePageTokensItemButtonNormal">
                            View on-chain
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <Modal size="small" value={profileModal} setValue={setProfileModal}>
            <div className="profileModalContent">
                <UserAvatar image="/img/token1.png" width={75} height={75} />

                <div className="profileModalForm">
                    <Input placeholder="User_djfhkqje" title="Account name" fieldRequired full />
                    <Input placeholder="Tell us about yourself" title="About" full component="textarea" lengthLimit={140} />

                    <div className="profileModalFormItem">
                        <div className="profileModalFormIcon">
                            <X2 />
                        </div>

                        <button className="profileModalFormX">
                            <X />
                            Connect X
                        </button>
                    </div>

                    <div className="profileModalFormItem">
                        <p className="profileModalFormItemTitle">
                            Telegram
                        </p>

                        <button className="profileModalFormTelegram">
                            <Telegram2 />
                            Log into your Telegram
                        </button>
                    </div>

                    <button className="mainGradientButton profileModalButton">
                        Save
                    </button>
                </div>
            </div>
        </Modal>
    </>
};

export default ProfilePage;
