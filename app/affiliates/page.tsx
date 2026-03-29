"use client";

import React from "react";
import Image from "next/image";
import cn from "classnames";

import "./index.scss";

import {
    ArrowDown,
    Belt,
    Edit,
    Link,
    QuestionCircle,
    Tier1,
    Tier2,
    Tier3,
    Tier4,
    Tier5,
    Tier6,
    X2,
} from "@/shared/icons";
import { SliderBlock } from "@/shared/ui/SliderBlock";
import { Input } from "@/shared/ui/Input";
import { CustomSelect } from "@/shared/ui/CustomSelect";
import { UserAvatar } from "@/shared/ui/UserAvatar";

const AffiliatesPage = () => {
    const [tierIsShow, setTierIsShow] = React.useState(false);
    const [linkIsEdit, setLinkIsEdit] = React.useState(false);

    return (
        <>
            <div className="affiTop">
                <p className="affiTitle">
                    Affiliate program
                    <QuestionCircle />
                </p>

                <p className="affiSubtitle">
                    Earn from platform revenue — forever
                </p>

                <p className="affiText">
                    Unlock up to 45% of trading fees via affiliate progression.
                    Get paid for every $1 of trader volume
                </p>
            </div>

            <div className="affiLink">
                <div className="affiLinkContent">
                    <div className="affiLinkInputWrapper">
                        {linkIsEdit ? (
                            <Input value="9090909" full />
                        ) : (
                            <p className="affiLinkValue">
                                https://moonlab.affiliateprogram/
                                <span>9090909</span>
                            </p>
                        )}
                    </div>

                    <div className="affiLinkButtons">
                        <a href="#" target="_blank" className="affiLinkX">
                            <X2 />
                        </a>

                        <button
                            className="outlinedButton affiLinkEdit"
                            onClick={() => setLinkIsEdit((prev) => !prev)}
                        >
                            <Edit />
                            {linkIsEdit ? "Save" : "Edit"}
                        </button>

                        <button
                            className="mainGradientButton affiLinkCopy"
                            onClick={() =>
                                navigator.clipboard.writeText(
                                    "https://moonlab.affiliateprogram/9090909",
                                )
                            }
                        >
                            <Link />
                            Copy Link
                        </button>
                    </div>
                </div>

                <div className="affiLinkBanner">
                    <div className="affiLinkBannerBg">
                        <Image src="/img/banner-grid.png" alt="grid" fill />
                    </div>

                    <div className="affiLinkBannerTexts">
                        <p className="affiLinkBannerTitle">
                            Earn 1% on referral tokens
                        </p>

                        <p className="affiLinkBannerText">
                            Invite token creators and receive 1% of their
                            creation fees
                        </p>
                    </div>

                    <button className="affiLinkBannerButton">
                        Active for 6 days
                    </button>
                </div>
            </div>

            <div className="affiEarn">
                <div className="affiEarnTop">
                    <p className="affiEarnTopTitle">
                        Your Earnings
                        <span>0$</span>
                    </p>

                    <button className="outlinedButton affiEarnTopButton">
                        Nothing to claim
                    </button>
                </div>

                <div className="affiEarnContent">
                    <div className="affiEarnItem">
                        <p className="affiEarnItemTitle">All-Time PnL</p>

                        <p className="affiEarnItemValue">0 Users</p>
                    </div>

                    <div className="affiEarnItem">
                        <p className="affiEarnItemTitle">Total Active</p>

                        <p className="affiEarnItemValue">0 Users</p>
                    </div>

                    <div className="affiEarnItem">
                        <p className="affiEarnItemTitle">Total Volume</p>

                        <p className="affiEarnItemValue">0 Users</p>
                    </div>

                    <div className="affiEarnItem">
                        <p className="affiEarnItemTitle">Trading Fees</p>

                        <p className="affiEarnItemValue">0 Users</p>
                    </div>

                    <div className="affiEarnItem">
                        <p className="affiEarnItemTitle">Creator Fees</p>

                        <p className="affiEarnItemValue">0 Users</p>
                    </div>
                </div>
            </div>

            <div className="affiTier">
                <div className="affiTierTop">
                    <div className="affiTierTopBelt">
                        <div className="affiTierTopBeltContent">
                            <Belt />
                            <p className="affiTierTopBeltNumber">1</p>
                        </div>

                        <div className="affiTierTopBeltTexts">
                            <p className="affiTierTopBeltTitle">
                                Tier 115% Fee Share
                            </p>

                            <p className="affiTierTopBeltText">
                                Your affiliate level depends on total referral
                                trading volume
                            </p>
                        </div>
                    </div>

                    <button
                        className={cn("outlinedButton", "affiTierTopButton", {
                            ["active"]: tierIsShow,
                        })}
                        onClick={() => setTierIsShow((prev) => !prev)}
                    >
                        {tierIsShow ? "Hide" : "Show"} more
                        <ArrowDown />
                    </button>
                </div>

                <SliderBlock progress={20} text="Tier 2" time="$0.0/ $5.0M" />

                {tierIsShow && (
                    <div className="affiTierItems">
                        <div className="affiTierItem active">
                            <div className="affiTierItemIcon">
                                <Tier1 />
                                <p className="affiTierItemIconNumber">1</p>
                            </div>

                            <p className="affiTierItemTitle">Tier 1</p>

                            <p className="affiTierItemText">15% Free Share</p>

                            <div className="affiTierItemVolume">
                                <p className="affiTierItemVolumeTitle">
                                    Volume
                                </p>

                                <p className="affiTierItemVolumeValue">
                                    0 $ - 5M $
                                </p>
                            </div>
                        </div>

                        <div className="affiTierItem">
                            <div className="affiTierItemIcon">
                                <Tier2 />
                                <p className="affiTierItemIconNumber">2</p>
                            </div>

                            <p className="affiTierItemTitle">Tier 2</p>

                            <p className="affiTierItemText">15% Free Share</p>

                            <div className="affiTierItemVolume">
                                <p className="affiTierItemVolumeTitle">
                                    Volume
                                </p>

                                <p className="affiTierItemVolumeValue">
                                    0 $ - 5M $
                                </p>
                            </div>
                        </div>

                        <div className="affiTierItem">
                            <div className="affiTierItemIcon">
                                <Tier3 />
                                <p className="affiTierItemIconNumber">3</p>
                            </div>

                            <p className="affiTierItemTitle">Tier 3</p>

                            <p className="affiTierItemText">15% Free Share</p>

                            <div className="affiTierItemVolume">
                                <p className="affiTierItemVolumeTitle">
                                    Volume
                                </p>

                                <p className="affiTierItemVolumeValue">
                                    0 $ - 5M $
                                </p>
                            </div>
                        </div>

                        <div className="affiTierItem">
                            <div className="affiTierItemIcon">
                                <Tier4 />
                                <p className="affiTierItemIconNumber">4</p>
                            </div>

                            <p className="affiTierItemTitle">Tier 4</p>

                            <p className="affiTierItemText">15% Free Share</p>

                            <div className="affiTierItemVolume">
                                <p className="affiTierItemVolumeTitle">
                                    Volume
                                </p>

                                <p className="affiTierItemVolumeValue">
                                    0 $ - 5M $
                                </p>
                            </div>
                        </div>

                        <div className="affiTierItem">
                            <div className="affiTierItemIcon">
                                <Tier5 />
                                <p className="affiTierItemIconNumber">5</p>
                            </div>

                            <p className="affiTierItemTitle">Tier 5</p>

                            <p className="affiTierItemText">15% Free Share</p>

                            <div className="affiTierItemVolume">
                                <p className="affiTierItemVolumeTitle">
                                    Volume
                                </p>

                                <p className="affiTierItemVolumeValue">
                                    0 $ - 5M $
                                </p>
                            </div>
                        </div>

                        <div className="affiTierItem">
                            <div className="affiTierItemIcon">
                                <Tier2 />
                                <p className="affiTierItemIconNumber">6</p>
                            </div>

                            <p className="affiTierItemTitle">Tier 6</p>

                            <p className="affiTierItemText">15% Free Share</p>

                            <div className="affiTierItemVolume">
                                <p className="affiTierItemVolumeTitle">
                                    Volume
                                </p>

                                <p className="affiTierItemVolumeValue">
                                    0 $ - 5M $
                                </p>
                            </div>
                        </div>

                        <div className="affiTierItem">
                            <div className="affiTierItemIcon">
                                <Tier6 />
                                <p className="affiTierItemIconNumber">7</p>
                            </div>

                            <p className="affiTierItemTitle">Tier 7</p>

                            <p className="affiTierItemText">15% Free Share</p>

                            <div className="affiTierItemVolume">
                                <p className="affiTierItemVolumeTitle">
                                    Volume
                                </p>

                                <p className="affiTierItemVolumeValue">
                                    0 $ - 5M $
                                </p>
                            </div>
                        </div>

                        <div className="affiTierItem">
                            <div className="affiTierItemIcon">
                                <Tier4 />
                                <p className="affiTierItemIconNumber">8</p>
                            </div>

                            <p className="affiTierItemTitle">Tier 8</p>

                            <p className="affiTierItemText">15% Free Share</p>

                            <div className="affiTierItemVolume">
                                <p className="affiTierItemVolumeTitle">
                                    Volume
                                </p>

                                <p className="affiTierItemVolumeValue">
                                    0 $ - 5M $
                                </p>
                            </div>
                        </div>

                        <div className="affiTierItem">
                            <div className="affiTierItemIcon">
                                <Tier5 />
                                <p className="affiTierItemIconNumber">9</p>
                            </div>

                            <p className="affiTierItemTitle">Tier 9</p>

                            <p className="affiTierItemText">15% Free Share</p>

                            <div className="affiTierItemVolume">
                                <p className="affiTierItemVolumeTitle">
                                    Volume
                                </p>

                                <p className="affiTierItemVolumeValue">
                                    0 $ - 5M $
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="affiRefs">
                <div className="affiRefsTitleInner">
                    <p className="affiRefsTitle">Invited Referrals</p>

                    <CustomSelect
                        options={[
                            {
                                text: "Newest first",
                            },
                            {
                                text: "Oldest first",
                            },
                        ]}
                    />
                </div>

                <div className="affiRefsContent">
                    <div className="affiRefsItem">
                        <div className="affiRefsItemUser">
                            <div className="affiRefsItemUserInfo">
                                <UserAvatar image="/img/token1.png" />

                                <div className="affiRefsItemUserWrapper">
                                    <p className="affiRefsItemUserTitle">
                                        Joined 2d ago
                                    </p>

                                    <p className="affiRefsItemUserName">
                                        Snoopgod
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="affiRefsItemText">
                            <div className="affiRefsItemTextBlock">
                                <p className="affiRefsItemTextTitle">
                                    Your earning
                                </p>

                                <p className="affiRefsItemTextValue green">
                                    +54.13
                                </p>
                            </div>
                        </div>

                        <div className="affiRefsItemText">
                            <div className="affiRefsItemTextBlock">
                                <p className="affiRefsItemTextTitle">
                                    Their volume
                                </p>

                                <p className="affiRefsItemTextValue">12 435$</p>
                            </div>
                        </div>

                        <div className="affiRefsItemText">
                            <div className="affiRefsItemTextBlock">
                                <p className="affiRefsItemTextTitle">Trades</p>

                                <p className="affiRefsItemTextValue">43</p>
                            </div>
                        </div>

                        <div className="affiRefsItemStatus">
                            <p className="affiRefcItemStatusValue active">
                                Active
                            </p>
                        </div>
                    </div>

                    <div className="affiRefsItem">
                        <div className="affiRefsItemUser">
                            <div className="affiRefsItemUserInfo">
                                <UserAvatar image="/img/token1.png" />

                                <div className="affiRefsItemUserWrapper">
                                    <p className="affiRefsItemUserTitle">
                                        Joined 2d ago
                                    </p>

                                    <p className="affiRefsItemUserName">
                                        Snoopgod
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="affiRefsItemText">
                            <div className="affiRefsItemTextBlock">
                                <p className="affiRefsItemTextTitle">
                                    Your earning
                                </p>

                                <p className="affiRefsItemTextValue green">
                                    +54.13
                                </p>
                            </div>
                        </div>

                        <div className="affiRefsItemText">
                            <div className="affiRefsItemTextBlock">
                                <p className="affiRefsItemTextTitle">
                                    Their volume
                                </p>

                                <p className="affiRefsItemTextValue">12 435$</p>
                            </div>
                        </div>

                        <div className="affiRefsItemText">
                            <div className="affiRefsItemTextBlock">
                                <p className="affiRefsItemTextTitle">Trades</p>

                                <p className="affiRefsItemTextValue">43</p>
                            </div>
                        </div>

                        <div className="affiRefsItemStatus">
                            <p className="affiRefcItemStatusValue">Inactive</p>
                        </div>
                    </div>

                    <div className="affiRefsItem totals">
                        <div className="affiRefsItemUser">
                            <p className="affiRefsItemTotalText">Total</p>
                        </div>

                        <div className="affiRefsItemText">
                            <p className="affiRefsItemTotalText green">
                                +54.13
                            </p>
                        </div>

                        <div className="affiRefsItemText">
                            <p className="affiRefsItemTotalText">12 435$</p>
                        </div>

                        <div className="affiRefsItemText">
                            <p className="affiRefsItemTotalText">43</p>
                        </div>

                        <div className="affiRefsItemStatus">
                            <p className="affiRefsItemStatusRefs">4/5 active</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AffiliatesPage;
